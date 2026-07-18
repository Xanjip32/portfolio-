(() => {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 50 : 80;
  const CONNECTION_DISTANCE = 2.5;
  const MAX_LINES = isMobile ? 150 : 300;
  const COLORS = [0xFF6B57, 0xff8a6c, 0xd946ef, 0xa78bfa, 0x38bdf8];

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));

  // ── Particle geometry (pre-allocated, never recreated) ──
  const particlesGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const velocities = [];
  const homePositions = [];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const x = (Math.random() - 0.5) * 15;
    const y = (Math.random() - 0.5) * 15;
    const z = (Math.random() - 0.5) * 15;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    homePositions.push({ x, y, z });

    const color = new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    velocities.push({
      x: (Math.random() - 0.5) * 0.005,
      y: (Math.random() - 0.5) * 0.005,
      z: (Math.random() - 0.5) * 0.005
    });
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: isMobile ? 0.1 : 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // ── Lines geometry (pre-allocated buffer, update in-place) ──
  const linePositions = new Float32Array(MAX_LINES * 6);
  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  linesGeometry.setDrawRange(0, 0);

  const linesMaterial = new THREE.LineBasicMaterial({
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
  scene.add(linesMesh);

  // ── Update connections (optimized: pre-allocated buffer, frame-capped) ──
  let connectionFrame = 0;
  const CONNECTION_FRAME_SKIP = isMobile ? 4 : 3;

  function updateConnections() {
    connectionFrame++;
    if (connectionFrame % CONNECTION_FRAME_SKIP !== 0) return;

    const pos = particlesGeometry.attributes.position.array;
    let lineCount = 0;

    for (let i = 0; i < PARTICLE_COUNT && lineCount < MAX_LINES; i++) {
      const ix = pos[i * 3], iy = pos[i * 3 + 1], iz = pos[i * 3 + 2];
      for (let j = i + 1; j < PARTICLE_COUNT && lineCount < MAX_LINES; j++) {
        const dx = ix - pos[j * 3];
        const dy = iy - pos[j * 3 + 1];
        const dz = iz - pos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          const idx = lineCount * 6;
          linePositions[idx] = ix;
          linePositions[idx + 1] = iy;
          linePositions[idx + 2] = iz;
          linePositions[idx + 3] = pos[j * 3];
          linePositions[idx + 4] = pos[j * 3 + 1];
          linePositions[idx + 5] = pos[j * 3 + 2];
          lineCount++;
        }
      }
    }

    linesGeometry.setDrawRange(0, lineCount * 2);
    linesGeometry.attributes.position.needsUpdate = true;
  }

  camera.position.z = 5;

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
  });

  // ── Click ripple ──
  const ripples = [];
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera);
    ripples.push({
      origin: raycaster.ray.origin.clone(),
      direction: raycaster.ray.direction.clone(),
      time: 0, maxTime: 60, strength: 2.5
    });
  });

  // ── Animation loop ──
  function animate() {
    requestAnimationFrame(animate);

    const pos = particlesGeometry.attributes.position.array;

    // Age ripples
    for (let r = ripples.length - 1; r >= 0; r--) {
      ripples[r].time++;
      if (ripples[r].time > ripples[r].maxTime) ripples.splice(r, 1);
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Ripple forces
      for (const ripple of ripples) {
        const px = pos[i * 3], py = pos[i * 3 + 1], pz = pos[i * 3 + 2];
        const toP = new THREE.Vector3(px - ripple.origin.x, py - ripple.origin.y, pz - ripple.origin.z);
        const dist = toP.length();
        const rRadius = ripple.time * 0.15;
        if (dist < rRadius + 2 && dist > rRadius - 2) {
          const push = ripple.strength * (1 - Math.abs(dist - rRadius) / 2) * (1 - ripple.time / ripple.maxTime);
          toP.normalize().multiplyScalar(push * 0.03);
          pos[i * 3] += toP.x;
          pos[i * 3 + 1] += toP.y;
          pos[i * 3 + 2] += toP.z;
        }
      }

      // Drift home
      pos[i * 3] += (homePositions[i].x - pos[i * 3]) * 0.002;
      pos[i * 3 + 1] += (homePositions[i].y - pos[i * 3 + 1]) * 0.002;
      pos[i * 3 + 2] += (homePositions[i].z - pos[i * 3 + 2]) * 0.002;

      // Normal drift
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      if (Math.abs(pos[i * 3]) > 7.5) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 7.5) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 7.5) velocities[i].z *= -1;
    }
    particlesGeometry.attributes.position.needsUpdate = true;

    updateConnections();

    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;

    camera.position.x += (mouseX - camera.position.x) * 0.02;
    camera.position.y += (-mouseY - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
