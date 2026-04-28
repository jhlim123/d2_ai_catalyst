/* AI Catalyst Demo - 샘플 데이터 (파일럿 시연용) */
window.AC_DATA = {
  courses: [
    {
      id: 1,
      title: "ChatGPT로 매주 5시간 아끼는 이메일 자동화",
      tag: "마케팅 · 자동화",
      instructor: "김지훈",
      department: "마케팅팀 · 7년차",
      thumb: "indigo",
      icon: "✉️",
      seats: { taken: 8, total: 10 },
      rating: 4.9,
      reviews: 27,
      schedule: "2026.05.07 (목) 19:00 - 21:00",
      venue: "FEZH 회의실 A",
      price: 50000,
      summary: "받은 메일함을 비워주는 GPT 매크로 워크플로우. 본인 메일 데이터로 바로 적용해본다.",
      curriculum: [
        { time: "00:00", title: "오프닝 & 사전 점검", desc: "참가자 환경 셋업, GPT 보안 가이드 공유" },
        { time: "00:15", title: "이메일 분류 자동화 패턴", desc: "라벨링·우선순위 자동 분류 GPTs 시연" },
        { time: "00:45", title: "회신 초안 자동 생성", desc: "톤·길이·서명까지 맞춘 답장 템플릿 제작" },
        { time: "01:15", title: "[실습] 본인 메일에 적용", desc: "각자 받은편지함 사례로 매크로 1개 완성" },
        { time: "01:50", title: "Q&A & 보안 체크", desc: "기밀 데이터 처리 가이드 점검" }
      ]
    },
    {
      id: 2,
      title: "Midjourney로 광고 시안 30분 컷",
      tag: "디자인 · 이미지",
      instructor: "박서연",
      department: "디자인팀 · 5년차",
      thumb: "coral",
      icon: "🎨",
      seats: { taken: 10, total: 10 },
      rating: 4.8,
      reviews: 19,
      schedule: "2026.05.09 (토) 14:00 - 16:00",
      venue: "FEZH 회의실 B",
      price: 50000,
      summary: "프롬프트 한 줄로 캠페인 무드보드부터 메인 비주얼까지 뽑는 실전 노하우.",
      curriculum: [
        { time: "00:00", title: "Midjourney v7 핵심 기능 정리", desc: "Style Reference, Personalization 활용" },
        { time: "00:30", title: "광고 시안 프롬프트 공식", desc: "주제+무드+카메라+조명 4단 구조" },
        { time: "01:00", title: "[실습] 우리 브랜드 시안 5종", desc: "각자 담당 브랜드로 5장 산출" },
        { time: "01:40", title: "리터칭·후보정 워크플로우", desc: "Photoshop 자동 리터칭 연동" }
      ]
    },
    {
      id: 3,
      title: "Claude Code로 코드 리뷰 자동화",
      tag: "개발 · 코딩",
      instructor: "이민호",
      department: "개발팀 · 9년차",
      thumb: "mint",
      icon: "⌘",
      seats: { taken: 6, total: 10 },
      rating: 5.0,
      reviews: 14,
      schedule: "2026.05.12 (화) 19:30 - 21:30",
      venue: "FEZH 회의실 A",
      price: 50000,
      summary: "PR 올라오면 Claude가 알아서 리뷰. 사내 컨벤션까지 학습시키는 셋업.",
      curriculum: [
        { time: "00:00", title: "Claude Code CLI 기본기", desc: "설치, 프로젝트 인덱싱" },
        { time: "00:25", title: "사내 컨벤션 학습", desc: "CLAUDE.md, 커스텀 에이전트 작성" },
        { time: "01:00", title: "[실습] PR 리뷰 봇 구축", desc: "GitHub Action 연동 데모" },
        { time: "01:45", title: "보안·비용 가이드라인", desc: "민감 코드 마스킹 패턴" }
      ]
    },
    {
      id: 4,
      title: "Notion AI로 회의록·기획서 30초 정리",
      tag: "기획 · 생산성",
      instructor: "정현우",
      department: "기획팀 · 4년차",
      thumb: "amber",
      icon: "📝",
      seats: { taken: 9, total: 10 },
      rating: 4.7,
      reviews: 22,
      schedule: "2026.05.14 (목) 18:30 - 20:30",
      venue: "FEZH 회의실 C",
      price: 50000,
      summary: "음성 녹음만 던지면 액션 아이템까지 뽑아주는 노션 자동화 셋업.",
      curriculum: [
        { time: "00:00", title: "Notion AI 최신 기능", desc: "Q&A, 자동 요약, 자동 태깅" },
        { time: "00:30", title: "회의록 템플릿 설계", desc: "프로퍼티·릴레이션 베스트 프랙티스" },
        { time: "01:00", title: "[실습] 본인 워크스페이스 적용", desc: "녹음→요약→배포 전 과정" }
      ]
    },
    {
      id: 5,
      title: "Cursor IDE로 개발 속도 2배 만들기",
      tag: "개발 · 코딩",
      instructor: "강민정",
      department: "개발팀 · 6년차",
      thumb: "lavender",
      icon: "⚡",
      seats: { taken: 4, total: 10 },
      rating: 4.9,
      reviews: 11,
      schedule: "2026.05.16 (토) 10:00 - 12:00",
      venue: "FEZH 회의실 A",
      price: 50000,
      summary: "Tab으로 끝나는 코딩. Composer로 전체 모듈 한방에 작성하는 워크플로우.",
      curriculum: [
        { time: "00:00", title: "Cursor 핵심 단축키", desc: "Cmd+K, Composer, Apply 흐름" },
        { time: "00:30", title: "프로젝트 컨텍스트 설계", desc: ".cursorrules 작성법" },
        { time: "01:00", title: "[실습] 신규 기능 1개 구현", desc: "각자 사이드 프로젝트로" }
      ]
    },
    {
      id: 6,
      title: "Perplexity로 시장 리서치 1시간 컷",
      tag: "전략 · 리서치",
      instructor: "윤재호",
      department: "전략팀 · 8년차",
      thumb: "steel",
      icon: "🔎",
      seats: { taken: 7, total: 10 },
      rating: 4.6,
      reviews: 18,
      schedule: "2026.05.19 (화) 19:00 - 21:00",
      venue: "FEZH 회의실 B",
      price: 50000,
      summary: "출처 검증된 리서치 보고서를 1시간 만에 작성하는 Perplexity Pro 활용법.",
      curriculum: [
        { time: "00:00", title: "Perplexity Spaces 활용", desc: "프로젝트별 컨텍스트 분리" },
        { time: "00:30", title: "출처 검증 워크플로우", desc: "신뢰도 확인 체크리스트" },
        { time: "01:00", title: "[실습] 경쟁사 분석 보고서", desc: "각자 담당 영역 1건" }
      ]
    },
    {
      id: 7,
      title: "Gamma로 5분 만에 임원 보고용 PPT",
      tag: "기획 · 디자인",
      instructor: "한수진",
      department: "영업팀 · 5년차",
      thumb: "sunset",
      icon: "📊",
      seats: { taken: 10, total: 10 },
      rating: 4.8,
      reviews: 31,
      schedule: "2026.05.21 (목) 19:00 - 21:00",
      venue: "FEZH 회의실 C",
      price: 50000,
      summary: "텍스트 한 단락만 있으면 디자인까지 끝내는 Gamma 실전 가이드.",
      curriculum: [
        { time: "00:00", title: "Gamma 카드 시스템 이해", desc: "유연한 슬라이드 구조 설계" },
        { time: "00:30", title: "임원 보고 톤앤매너", desc: "본문→3-key 메시지 전환법" },
        { time: "01:00", title: "[실습] 본인 보고서 1건 변환", desc: "기존 PPT를 Gamma로 리메이크" }
      ]
    },
    {
      id: 8,
      title: "Suno로 사내 BGM·제품 데모 영상 음악 만들기",
      tag: "마케팅 · 콘텐츠",
      instructor: "최도윤",
      department: "마케팅팀 · 3년차",
      thumb: "forest",
      icon: "🎵",
      seats: { taken: 5, total: 10 },
      rating: 4.7,
      reviews: 9,
      schedule: "2026.05.23 (토) 14:00 - 16:00",
      venue: "FEZH 회의실 B",
      price: 50000,
      summary: "저작권 걱정 없는 사내 콘텐츠용 BGM, Suno로 즉석 제작.",
      curriculum: [
        { time: "00:00", title: "Suno v4 기본 사용법", desc: "프롬프트, 스타일, 페르소나" },
        { time: "00:30", title: "광고/제품 영상 BGM 패턴", desc: "장면 전환 맞춤 길이 조정" },
        { time: "01:00", title: "[실습] 본인 콘텐츠용 BGM 1곡", desc: "후처리(stem 분리)까지" }
      ]
    }
  ],

  myEnrollments: [
    { courseId: 1, status: "upcoming", date: "2026.05.07" },
    { courseId: 4, status: "completed", date: "2026.04.10", rated: true },
    { courseId: 6, status: "completed", date: "2026.03.22", rated: false }
  ],

  myRefunds: [
    { courseId: 4, amount: 50000, status: "approved", requestedAt: "2026.04.11" },
    { courseId: 6, amount: 50000, status: "pending",  requestedAt: "2026.03.23" }
  ],

  user: {
    name: "홍길동",
    department: "전략기획실",
    employeeId: "D2-2019-0042",
    subsidyRemaining: 0,
    subsidyTotalGiven: 1,
    coursesCompleted: 2,
    nextSession: "2026.05.07 (목) 19:00"
  }
};
