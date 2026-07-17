/* ─────────────────────────────────────────────
   translations.js  –  single source of truth
   Nested by:  translations[lang].section.key
   ───────────────────────────────────────────── */
var translations = {

  /* ═══════════════ ENGLISH ═══════════════ */
  en: {

    /* — shared across every page — */
    common: {
      menu:       "Menu",
      lang_switch:"Switch to 한국어",
      footer:     "© 2026 Sanjeev Shrestha. All rights reserved."
    },

    /* — nav links (same keys on every page) — */
    nav: {
      home:       "Home",
      about:      "About",
      projects:   "Projects",
      certificates:"Certificates",
      contact:    "Contact"
    },

    /* — index.html — */
    home: {
      greeting:       "Hi, I'm",
      title:          "Computer Engineering Student",
      subtitle:       "Building Full-Stack Projects & Learning Networking",
      desc:           "I build practical projects, document my learning, and continuously improve through hands-on practice.",
      view_projects:  "View My projects",
      download_cv:    "Download CV",

      section_focus:  "Current Focus",
      focus_laravel_desc: "Full-Stack web development",
      focus_linux_desc:   "System & Server Management",
      focus_mysql_desc:   "Database Management",
      focus_ccna_desc:    "Computer Networks",

      section_skills: "Skills",
      skills_core:    "Core Skills",
      skills_working: "Working Knowledge",
      skills_exploring:"Currently Exploring",
      skill_linux_server: "Linux / Server Management",
      skill_wordpress:    "WordPress (Headless CMS)",
      skill_laravel_fs:   "Laravel (Full-Stack)",
      skill_ai:           "AI-Assisted Development",
      skill_ccna:         "CCNA Networking",

      section_education: "Education & Experience",
      edu_donbosco:      "Don Bosco Institute of Engineering",
      edu_donbosco_desc: "High School Diploma, Electrical & Electronics",
      exp_vianet_date:   "May – Dec 2022 · Full-time · On-site",
      exp_vianet_title:  "L1 Field Support Technician",
      exp_vianet_company:"Vianet Communication",
      exp_cf_date:       "Oct 2022 – Aug 2023 · Part-time · Remote",
      exp_cf_title:      "Data Specialist",
      exp_cf_company:    "CloudFactory Nepal",
      edu_ysu:           "Youngsan University",
      edu_ysu_desc:      "AI Computer Engineering",
      certificate:       "Certificate",

      section_learning: "Learning",
      section_journey:  "Journey",
      status_completed:    "(completed)",
      status_paused:       "(Paused)",
      status_inprogress:   "(In progress)",
      status_inprogress_paren: "(In Progress)",
      status_current:      "(Current)",
      odin_desc:       "HTML CSS JavaScript Fundamentals Git & GitHub Command Line Flexbox DOM Manipulation Problem Solving Responsive Design",
      odin_projects:   "Projects: Landing Page, Calculator, Rock Paper Scissors, Etch-a-Sketch, Recipes",
      cs50_desc:       "Completed assignments through the Python/Flask track and studied Django. Paused for now.",
      laravel_desc:    "Learning full-stack web development with Laravel — PHP, Blade templates, MySQL, authentication, and REST APIs.",
      ccna_desc:       "Network Fundamentals Ethernet OSI Model TCP/IP",

      section_timeline: "📈 Timeline",
      tl_elec_1: "Electrical", tl_elec_2: "Engineering", tl_elec_3: "Diploma",
      tl_it:     "IT Support",
      tl_ce_1:   "Computer",   tl_ce_2:   "Engineering",  tl_ce_3: "Student",
      tl_python_1:"Python &",  tl_python_2:"Machine",     tl_python_3:"Learning",
      tl_odin_1:  "The Odin",  tl_odin_2:  "Project"
    },

    /* — about.html — */
    about: {
      title:           "About Me",
      subtitle:        "Computer Engineering Student · Full-Stack Developer · Network Enthusiast",
      intro:           "I'm Sanjeev, an AI & Computer Engineering student at Youngsan University in Busan, South Korea. Before moving into tech, I worked as a Data Specialist and IT Field Support Technician in Nepal — installing networks, solving connectivity issues, and working directly with customers. That hands-on problem-solving experience now shapes how I approach code.",
      hl_fullstack:    "Full-Stack Dev",
      hl_ccna:         "CCNA Networking",
      hl_linux:        "Linux / Servers",
      hl_ml:           "Python / ML",
      building_title:  "What I'm Building",
      building:        "My main project is KoreaSathi — a free open-source student hub built with headless WordPress CMS, Tailwind CSS, and deployed on Vercel. It helps Nepali students navigate visas, housing, jobs, and life in Korea. Something I wish existed when I was figuring it out myself.",
      learning_title:  "Currently Learning",
      learning:        "Expanding into full-stack development with Laravel — PHP, Blade templates, MySQL, and REST APIs. On the side, studying for my CCNA, since networking is where I want to take my career long-term. My earlier field support work gave me a taste for it, and I'm now going deeper on purpose.",
      languages_title: "Languages",
      cta_projects:    "View Projects",
      cta_contact:     "Get In Touch"
    },

    /* — project.html — */
    projects: {
      badge:           "Portfolio",
      hero_title:      "Projects",
      hero_desc:       "A collection of projects I've built throughout my learning journey. From web development and machine learning to networking and electronics, each project represents a step toward becoming a better software engineer.",
      view:            "View Projects",
      portfolio:       "Portfolio",
      featured:        "Featured Projects",
      featured_desc:   "These are some of the projects I've worked on throughout my learning journey, covering web development, networking, machine learning, and software engineering.",
      status_active:   "Active",
      status_ongoing:  "Ongoing",
      status_paused:   "Paused",
      tech_wp_headless:"WordPress (Headless)",
      live_demo:       "Live Demo",
      koreasathi_desc: "Nepal Korea Student Hub — A free open-source platform centralizing trusted information for Nepali students in South Korea. Built with headless WordPress CMS for content management, Tailwind CSS for styling, and deployed on Vercel. Covers visas, jobs, banking, immigration, emergencies, and more.",
      solar_title:     "Solar-Powered Egg Incubator",
      tag_hardware:    "Hardware Build",
      solar_desc:      "A self-taught electronics build from my school years — inverter PCB, a repurposed transformer, and an old lead-acid battery for backup power. No formal circuit design, no CAD — just YouTube, trial and error, and a soldering iron.",
      view_github:     "View on GitHub",
      student_title:   "Student Management App",
      tag_coursework:  "Coursework Project",
      student_desc:    "Built during coursework on instructor-provided starter code. Extended it with search, filtering, and sorting. Covers Node.js, Express, and REST API basics.",
      laravel_title:   "Full-Stack with Laravel",
      laravel_desc:    "Documenting my full-stack learning journey with Laravel — practice projects and notes covering front-end (HTML, CSS, JavaScript) and back-end (PHP, Laravel).",
      ccna_title:      "CCNA Study Documentation",
      ccna_desc:       "Documenting my CCNA prep — following Jeremy's IT Lab and Cisco Networking Academy. Includes study notes, router/switch configuration examples, and lab practice.",
      tag_networking:  "Networking",
      cs50_title:      "CS50: Web Programming",
      cs50_desc:       "Studied Harvard's CS50 Web Programming — completed assignments through the Python/Flask track and studied Django. Paused here for now, may pick it back up later.",
      mnist_title:     "MNIST Digit Classifier",
      tag_selfstudy:   "Self-Study",
      mnist_desc:      "Followed a tutorial to build an ML pipeline on MNIST — neural networks with NumPy, scikit-learn, and CNNs with TensorFlow. Completed as a learning exercise.",
      odin_title:      "The Odin Project — Foundations",
      odin_desc:       "Core projects completed during The Odin Project foundations course.",
      odin_calc:       "Calculator",
      odin_landing:    "Landing Page",
      odin_sketch:     "Etch-a-Sketch",
      odin_rps:        "Rock Paper Scissors",
      odin_tic:        "Tic Tac Toe",
      odin_recipes:    "Odin Recipes"
    },

    /* — certificates.html — */
    certificates: {
      badge:          "Experience",
      hero_title:     "Certificates",
      hero_desc:      "Professional experience letters and certifications earned throughout my career in IT support, field engineering, and electrical work.",
      view:           "View Certificates",
      section_title:  "Experience Letters",
      section_desc:   "Documents from my professional roles in Nepal — spanning IT support, field engineering, and electrical work.",
      vianet_title:   "IT Support",
      vianet_desc:    "Experience letter from my role as an IT Support Technician at Vianet — network installation, troubleshooting, and customer support.",
      tag_exp_letter: "Experience Letter",
      cf_desc:        "Experience letter from CloudFactory — data operations and field support role.",
      elec_title:     "Industrial Electrician",
      tag_diploma:    "Diploma",
      elec_desc:      "Electrical Engineering Diploma — foundational qualification in electrical systems and industrial wiring.",
      cisco_title:    "Cisco Packet Tracer",
      tag_certificate:"Certificate",
      cisco_desc:     "Getting Started with Cisco Packet Tracer — networking fundamentals and packet simulation."
    },

    /* — contact.html — */
    contact: {
      title: "Get In Touch",
      desc:  "Just want to say hi? I'd love to hear from you."
    }
  },

  /* ═══════════════ KOREAN ═══════════════ */
  ko: {

    common: {
      menu:       "메뉴",
      lang_switch:"English로 전환",
      footer:     "© 2026 Sanjeev Shrestha. 모든 권리 보유."
    },

    nav: {
      home:       "홈",
      about:      "소개",
      projects:   "프로젝트",
      certificates:"자격증",
      contact:    "연락처"
    },

    home: {
      greeting:       "안녕하세요, 저는",
      title:          "컴퓨터공학과 학생",
      subtitle:       "풀스택 프로젝트 개발 & 네트워킹 학습 중",
      desc:           "실용적인 프로젝트를 만들고, 학습 과정을 기록하며, 실습을 통해 지속적으로 성장합니다.",
      view_projects:  "프로젝트 보기",
      download_cv:    "이력서 다운로드",

      section_focus:  "현재 집중 분야",
      focus_laravel_desc: "풀스택 웹 개발",
      focus_linux_desc:   "시스템 & 서버 관리",
      focus_mysql_desc:   "데이터베이스 관리",
      focus_ccna_desc:    "컴퓨터 네트워크",

      section_skills: "기술 스택",
      skills_core:    "핵심 기술",
      skills_working: "실무 가능",
      skills_exploring:"탐구 중",
      skill_linux_server: "Linux / 서버 관리",
      skill_wordpress:    "WordPress (헤드리스 CMS)",
      skill_laravel_fs:   "Laravel (풀스택)",
      skill_ai:           "AI 어시스트 개발",
      skill_ccna:         "CCNA 네트워킹",

      section_education: "학력 및 경력",
      edu_donbosco:      "돈보스코 공업고등학교",
      edu_donbosco_desc: "고등학교 졸업, 전기전자과",
      exp_vianet_date:   "2022년 5월 – 12월 · 정규직 · 현장",
      exp_vianet_title:  "L1 필드 지원 기술자",
      exp_vianet_company:"Vianet Communication",
      exp_cf_date:       "2022년 10월 – 2023년 8월 · 파트타임 · 원격",
      exp_cf_title:      "데이터 스페셜리스트",
      exp_cf_company:    "CloudFactory 네팔",
      edu_ysu:           "영산대학교",
      edu_ysu_desc:      "AI 컴퓨터공학과",
      certificate:       "자격증",

      section_learning: "학습 중",
      section_journey:  "여정",
      status_completed:    "(완료)",
      status_paused:       "(일시정지)",
      status_inprogress:   "(진행 중)",
      status_inprogress_paren: "(진행 중)",
      status_current:      "(현재)",
      odin_desc:       "HTML CSS JavaScript 기초 Git & GitHub 명령줄 Flexbox DOM 조작 문제 해결 반응형 디자인",
      odin_projects:   "프로젝트: 랜딩 페이지, 계산기, 가위바위보, 에치어스케치, 레시피",
      cs50_desc:       "Python/Flask 트랙 과제 완료 및 Django 학습. 현재 일시정지.",
      laravel_desc:    "Laravel로 풀스택 웹 개발 학습 중 — PHP, Blade 템플릿, MySQL, 인증, REST API.",
      ccna_desc:       "네트워크 기초, 이더넷, OSI 모델, TCP/IP",

      section_timeline: "📈 타임라인",
      tl_elec_1: "전기", tl_elec_2: "공학", tl_elec_3: "디플로마",
      tl_it:     "IT 지원",
      tl_ce_1:   "컴퓨터",   tl_ce_2:   "공학",  tl_ce_3: "학생",
      tl_python_1:"파이썬 &",  tl_python_2:"머신",     tl_python_3:"러닝",
      tl_odin_1:  "더 오딘",  tl_odin_2:  "프로젝트"
    },

    about: {
      title:           "소개",
      subtitle:        "컴퓨터공학과 학생 · 풀스택 개발자 · 네트워크 애호가",
      intro:           "저는 Sanjeev입니다. 부산 영산대학교에서 AI 컴퓨터공학을 전공하고 있습니다. 한국 오기 전에는 네팔에서 데이터 스페셜리스트와 IT 필드 지원 기술자로 일했습니다. 네트워크 설치, 연결 문제 해결, 고객 직접 응대를 경험했습니다. 이 실무 문제 해결 경험이 지금 코드를 짜는 방식에도 녹아 있습니다.",
      hl_fullstack:    "풀스택 개발",
      hl_ccna:         "CCNA 네트워킹",
      hl_linux:        "Linux / 서버",
      hl_ml:           "Python / ML",
      building_title:  "만드는 중인 것",
      building:        "주 프로젝트는 KoreaSathi입니다. 네팔 유학생을 위한 무료 오픈소스 허브로, 헤드리스 WordPress CMS, Tailwind CSS, Vercel 배포로 만들었습니다. 비자, 주거, 구직, 한국 생활 정보를 한곳에 모았습니다. 제가 유학 준비할 때 있었으면 했던 서비스입니다.",
      learning_title:  "현재 학습 중",
      learning:        "Laravel로 풀스택 개발을 확장하고 있습니다 — PHP, Blade 템플릿, MySQL, REST API. 병행해서 CCNA 공부 중입니다. 네트워킹을 장기 커리어 방향으로 정했습니다. 필드 지원 일을 하며 흥미를 느꼈고, 이제 제대로 파고들고 있습니다.",
      languages_title: "언어",
      cta_projects:    "프로젝트 보기",
      cta_contact:     "연락하기"
    },

    projects: {
      badge:           "포트폴리오",
      hero_title:      "프로젝트",
      hero_desc:       "학습 여정에서 만든 프로젝트 모음입니다. 웹 개발, 머신러닝, 네트워킹, 전자공학까지 — 각 프로젝트는 더 나은 소프트웨어 엔지니어가 되기 위한 발걸음입니다.",
      view:            "프로젝트 보기",
      portfolio:       "포트폴리오",
      featured:        "주요 프로젝트",
      featured_desc:   "웹 개발, 네트워킹, 머신러닝, 소프트웨어 엔지니어링 등 학습 과정에서 진행한 대표 프로젝트들입니다.",
      status_active:   "활성",
      status_ongoing:  "진행 중",
      status_paused:   "일시정지",
      tech_wp_headless:"WordPress (헤드리스)",
      live_demo:       "라이브 데모",
      koreasathi_desc: "네팔-한국 학생 허브 — 네팔 유학생을 위한 신뢰할 수 있는 정보를 모은 무료 오픈소스 플랫폼입니다. 헤드리스 WordPress CMS, Tailwind CSS, Vercel 배포로 만들었습니다. 비자, 구직, 은행, 이민, 응급상황 등 다양한 정보를 다룹니다.",
      solar_title:     "태양광 달걀 부화기",
      tag_hardware:    "하드웨어 제작",
      solar_desc:      "학창시절 독학으로 만든 전자 프로젝트입니다. 인버터 PCB, 재활용 트랜스포머, 구형 납산 배터리로 백업 전원을 구성했습니다. 정식 회로 설계나 CAD 없이, 유튜브와 시행착오, 납땜으로 완성했습니다.",
      view_github:     "GitHub에서 보기",
      student_title:   "학생 관리 앱",
      tag_coursework:  "과제 프로젝트",
      student_desc:    "강사 제공 스타터 코드 기반으로 수업 중 제작했습니다. 검색, 필터링, 정렬 기능 추가. Node.js, Express, REST API 기초 학습.",
      laravel_title:   "Laravel 풀스택",
      laravel_desc:    "Laravel 풀스택 학습 여정 기록 — 프론트엔드(HTML, CSS, JavaScript)와 백엔드(PHP, Laravel) 연습 프로젝트와 노트 포함.",
      ccna_title:      "CCNA 학습 문서화",
      ccna_desc:       "Jeremy's IT Lab과 Cisco Networking Academy를 따라 CCNA 준비 중. 학습 노트, 라우터/스위치 설정 예시, 랩 실습 포함.",
      tag_networking:  "네트워킹",
      cs50_title:      "CS50: 웹 프로그래밍",
      cs50_desc:       "하버드 CS50 웹 프로그래밍 수강 — Python/Flask 트랙 과제 완료 및 Django 학습. 현재 일시정지, 추후 재개 예정.",
      mnist_title:     "MNIST 숫자 분류기",
      tag_selfstudy:   "독학",
      mnist_desc:      "MNIST 데이터로 ML 파이프라인 구축 — NumPy, scikit-learn으로 신경망, TensorFlow로 CNN 구성. 학습용 연습으로 완료.",
      odin_title:      "The Odin Project — 기초",
      odin_desc:       "The Odin Project 기초 과정 중 완료한 핵심 프로젝트들입니다.",
      odin_calc:       "계산기",
      odin_landing:    "랜딩 페이지",
      odin_sketch:     "에치어스케치",
      odin_rps:        "가위바위보",
      odin_tic:        "틱택토",
      odin_recipes:    "오딘 레시피"
    },

    certificates: {
      badge:          "경력",
      hero_title:     "자격증",
      hero_desc:      "IT 지원, 필드 엔지니어링, 전기 공사 경력 중 받은 재직증명서와 자격증들입니다.",
      view:           "자격증 보기",
      section_title:  "재직증명서",
      section_desc:   "네팔에서의 직무 관련 문서들 — IT 지원, 필드 엔지니어링, 전기 공사 분야.",
      vianet_title:   "IT 지원",
      vianet_desc:    "Vianet IT 지원 기술자 재직 시 발급받은 경력증명서 — 네트워크 설치, 트러블슈팅, 고객 지원.",
      tag_exp_letter: "경력증명서",
      cf_desc:        "CloudFactory 재직증명서 — 데이터 운영 및 필드 지원 역할.",
      elec_title:     "산업 전기기사",
      tag_diploma:    "디플로마",
      elec_desc:      "전기공학 디플로마 — 전기 시스템 및 산업 배선 기초 자격.",
      cisco_title:    "Cisco Packet Tracer",
      tag_certificate:"자격증",
      cisco_desc:     "Cisco Packet Tracer 입문 — 네트워크 기초 및 패킷 시뮬레이션."
    },

    contact: {
      title: "연락하기",
      desc:  "그저 인사만 하고 싶으셔도 좋아요. 언제든 연락 주세요."
    }
  }
};