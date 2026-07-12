/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "배지수",
    nameEn: "Groom",
    father: "배쌍기",
    mother: "김진수",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "조원경",
    nameEn: "Bride",
    father: "조용현",
    mother: "",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-28",
    time: "17:00",
    venue: "델루시아 웨딩",
    hall: "씨엘로홀 2층",
    address: "경북 구미시 고아읍 신원대로 198 델루시아 웨딩",
    tel: "054-441-2100",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1253665665",
      naver: "https://naver.me/GOhYJkvI"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "오랜 인연, 새로운 시작",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 부부로서 새로운 시작을 하려 합니다.\n\n소중한 날 함께하시어\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "2017.05.01, 우리의 시작",
    content: "풋풋한 대학생으로 만나\n서로의 가장 가까운 친구이자\n든든한 편이 되었습니다.\n\n2026년 11월 28일\n이제 평생을 함께하려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "배지수", bank: "국민은행", number: "613202-04-219417" },
      { role: "아버지", name: "배쌍기", bank: "국민은행", number: "000-000-000000" },
      { role: "어머니", name: "김진수", bank: "대구은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "조원경", bank: "신한은행", number: "110-526-834255" },
      { role: "아버지", name: "조용현", bank: "경남은행", number: "000-000-000000" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 배지수♥ 신부 조원경 결혼합니다",
    description: "2026년 11월 28일, 소중한 분들을 초대합니다."
  }
};
