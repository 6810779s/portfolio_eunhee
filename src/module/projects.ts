interface itemProps {
  [index: string]: string;
  label: string;
  description: string;
}

export interface projectsProps {
  [key: string]: any;
  num: number;
  name: itemProps;
  date: itemProps;
  testDate: itemProps;
  launchingDate: itemProps;
  refactoryDate: itemProps;
  language: itemProps;
  people: itemProps;
  launch: itemProps;
  link: itemProps;
  codeLink: itemProps;
  charge: itemProps;
  responsive: itemProps;
  description: itemProps;
  function: itemProps;
  skills: itemProps;
  tool: itemProps;
  clientView: itemProps;
  problems: itemProps;
  solve: itemProps;
  achieve: itemProps;
  mainImgSrc: itemProps;
  topImgSrc: itemProps;
}

/*
15분 에약프로그램 클라이언트 
<프로젝트 기간>
프로젝트 기간: 2022/1/7 ~ 2022/2/21
테스트 기간: 2022/2/22 ~ 2022/3/7
출시일 ; 2022/3/8
<유지보수>
1차 업데이트 : 2022/3/21 - 기능 개선
2차 업데이트 : 2022/4/8 - 버그 개선, 기능 개선
<사용스택>
Next.js, Redux-saga, Docker, nginx, Restful API, Git, SASS
<사용 툴>
MUI스타일, Jenkins, BitBucket, Jira, confluence
*/

export const projects: projectsProps[] = [
  {
    num: 1,
    name: { label: '프로젝트명', description: '15분 전화상담 예약 프로그램' },
    date: { label: '개발 기간', description: '2022-01-07 ~ 2022-02-21' },
    testDate: { label: '테스트 기간', description: '2022-02-22 ~ 2022-03-07' },
    launchingDate: {
      label: '출시일',
      description: '2022-03-08',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description:
        '1차 업데이트: 2022-03-21(기능 개선)/2차 업데이트: 2022-04-08(버그 및 기능 개선)',
    },
    language: {
      label: '개발 언어',
      description: 'Next.js/Docker/nginx/Git/SASS',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/RestAPI',
    },
    tool: {
      label: '개발툴',
      description: 'Jenkins/BitBucket/Jira/confluence',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '런칭상황', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://counsel.guidance.co.kr:7100/',
    },
    codeLink: { label: '코드 링크', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description:
        '프로젝트 총괄/프론트엔드/UI/UX 기획/api 설계/데이터베이스 설계',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    function: {
      label: '기능',
      description:
        '1. 날짜 및 시간 예약/2. 접속번호 찾기/3. 예약확인 및 취소/4. 예약된 시간 비활성화',
    },
    description: {
      label: '프로젝트 설명',
      description: `본 프로젝트는 가이던스 회사에서 심리검사를 완료한 
      고객에게 제공하는 무료 상담 서비스 예약 시스템입니다. 
        Rest API를 통해 데이터베이스에 있는 접속번호를 조회하여,
        해당하는 고객이 있을 경우 예약을 진행시킵니다.
        데이터베이스에 이미 존재하는 시간일 경우 예약을 할 수 없도록 disabled 처리가 되어있습니다.
        또한 예약 접수시, 비밀번호를 설정하여 부득이하게 예약을 취소해야 될 경우,
        설정한 비밀번호를 입력하여 예약을 취소하며 데이터베이스에서도 해당 정보가 삭제됩니다.`,
    },
    achieve: {
      label: '성과',
      description:
        '2022년 6월 20일 기준 총 예약 건수는 215명이며, 총 상담 완료수는 204명입니다.',
    },

    clientView: {
      label: '프로젝트 사용자 화면',
      description: `/projectImg/reserve/client/clientView1.png,
      /projectImg/reserve/client/clientView2.png,
      /projectImg/reserve/client/clientView3.png,
      /projectImg/reserve/client/clientView4.png,
      /projectImg/reserve/client/clientView5.png,
      /projectImg/reserve/client/clientView6.png
      `,
    },
    problems: {
      label: '문제점',
      description: `처음 프로젝트 총 책임자를 맡으므로, 기획 및 화면설계를 혼자 진행하며,
        고객이 만족할 수 있는 UI/UX를 구상하는데 있어 많은 고민이 필요했습니다.`,
    },
    solve: {
      label: '해결방법',
      description: `다양한 예약 사이트들을 참고하여
        예약전, 예약중 그리고 예약 후 등의 상황에서 사용자가 원할 수 있는 기능들을 기획하였습니다.
        예약전에는 예약에 필요한 접속번호를 모르는 사용자들을 위한 접속번호 찾기 기능을 추가하였고,
        예약중에는 비활성화된 날짜 및 시간을 명확하게 표시하고, 동시에 같은 날짜를 예약했을 경우를 대비하여, 
        사용자가 당황하지 않도록 알람창을 띄어 다른 날짜를 예약하도록 안내하였습니다. 
        예약 후, 사용자가 자신의 예약 날짜, 시간을 확인할 수 있도록 예약 확인 및 삭제 기능도 추가하였습니다.
        `,
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: '/projectImg/reserve/client/reserveProjectMainImg.png',
    },
    topImgSrc: {
      label: '상단 이미지',
      description: '/projectImg/reserve/client/topMainImg.png',
    },
  },
  {
    num: 2,
    name: { label: '프로젝트명', description: '예약 프로그램 관리자 페이지' },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    testDate: { label: '테스트 기간', description: '2022-02-22 ~ 2022-03-07' },
    launchingDate: {
      label: '출시일',
      description: '2022-03-08',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '2022-03-21(기능 개선)/2022-04-08(버그 및 기능 개선)',
    },
    tool: {
      label: '개발툴',
      description: 'Jenkins/BitBucket/Jira/confluence',
    },
    language: {
      label: '개발 언어',
      description: 'SCSS/React.js/Redux',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/Rest API',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://counsel.guidance.co.kr:7100/',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description:
        '프로젝트 총괄/프론트엔드/UI/UX 기획/api 설계/데이터베이스 설계',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: '~~~~~~~/~~~~~~~~~~/~~~~~~~',
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: 'src1/src2',
    },
    problems: {
      label: '문제점',
      description:
        '문제점~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    solve: {
      label: '해결방법',
      description: '이렇게 해결~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: '/projectImg/reserve/admin/reserveProjectMainImg.png',
    },
    topImgSrc: {
      label: '상단 이미지',
      description: '/projectImg/reserve/admin/topMainImg.png',
    },
  },
  {
    num: 3,
    name: {
      label: '프로젝트명',
      description: '방송통신고등학교 심리검사 실시 페이지',
    },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    testDate: { label: '테스트 기간', description: '2022-02-22 ~ 2022-03-07' },
    launchingDate: {
      label: '출시일',
      description: '2022/03/08',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '2022-03-21(기능 개선)/2022-04-08(버그 및 기능 개선)',
    },
    tool: {
      label: '개발툴',
      description: 'Jenkins/BitBucket/Jira/confluence',
    },
    language: {
      label: '개발 언어',
      description: 'SCSS/React.js/Redux',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/Rest API',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://counsel.guidance.co.kr:7100/',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description:
        '프로젝트 총괄/프론트엔드/UI/UX 기획/api 설계/데이터베이스 설계',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: '~~~~~~~/~~~~~~~~~~/~~~~~~~',
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: 'src1/src2',
    },
    problems: {
      label: '문제점',
      description:
        '문제점~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    solve: {
      label: '해결방법',
      description: '이렇게 해결~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: '/projectImg/testPage/client/testProjectMainImg.png',
    },
    topImgSrc: {
      label: '상단 이미지',
      description: '/projectImg/testPage/client/topMainImg.png',
    },
  },
  // {
  //   num: 4,
  //   name: { label: '프로젝트명', description: '검사 실시 관리자 페이지' },
  //   date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
  //   language: {
  //     label: '개발 언어',
  //     description: 'SCSS/React.js/Redux',
  //   },
  //   skills: { label: '사용 라이브러리/기술', description: 'Redux-saga/Rest API' },
  //   people: {
  //     label: '개발 인원',
  //     description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
  //   },
  //   launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
  //   link: {
  //     label: '프로그램 링크',
  //     description: 'http://counsel.guidance.co.kr:7100/',
  //   },
  //   codeLink: { label: '깃허브 코드', description: '비공개' },
  //   charge: {
  //     label: '맡은 역할',
  //     description: '프론트엔드/UI/UX 기획',
  //   },
  //   responsive: { label: '반응형 유무', description: '반응형 페이지' },
  //   description: {
  //     label: '프로젝트 설명',
  //     description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
  //   },
  //   achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
  //   function: {
  //     label: '기능',
  //     description: '~~~~~~~/~~~~~~~~~~/~~~~~~~',
  //   },
  //   clientView: {
  //     label: '프로젝트 사용자 화면',
  //     description: 'src1/src2',
  //   },
  //   problems: {
  //     label: '문제점',
  //     description:
  //       '문제점~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
  //   },
  //   solve: {
  //     label: '해결방법',
  //     description: '이렇게 해결~~~~~~~~~~~~~~~~~~~~~~~~',
  //   },
  //   mainImgSrc: { label: '메인 이미지', description: 'imgSrc' },
  // },
  {
    num: 4,
    name: {
      label: '프로젝트명',
      description: '한국가이던스 메인홈 관리자 페이지',
    },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    testDate: { label: '테스트 기간', description: '2022-02-22 ~ 2022-03-07' },
    launchingDate: {
      label: '출시일',
      description: '2022/03/08',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '2022-03-21(기능 개선)/2022-04-08(버그 및 기능 개선)',
    },
    tool: {
      label: '개발툴',
      description: 'Jenkins/BitBucket/Jira/confluence',
    },
    language: {
      label: '개발 언어',
      description: 'SCSS/React.js/Redux',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/Rest API',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://counsel.guidance.co.kr:7100/',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description: '프론트엔드',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: '~~~~~~~/~~~~~~~~~~/~~~~~~~',
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: 'src1/src2',
    },
    problems: {
      label: '문제점',
      description:
        '문제점~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    solve: {
      label: '해결방법',
      description: '이렇게 해결~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: '/projectImg/guidanceMain/admin/mainImg.png',
    },
    topImgSrc: {
      label: '상단 이미지',
      description: '/projectImg/reserve/client/topMainImg',
    },
  },
  {
    num: 5,
    name: { label: '프로젝트명', description: '현재 포트폴리오' },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    testDate: { label: '테스트 기간', description: '2022-02-22 ~ 2022-03-07' },
    launchingDate: {
      label: '출시일',
      description: '2022/03/08',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '2022-03-21(기능 개선)/2022-04-08(버그 및 기능 개선)',
    },
    tool: {
      label: '개발툴',
      description: 'Jenkins/BitBucket/Jira/confluence',
    },
    language: {
      label: '개발 언어',
      description: 'SCSS/React.js/Redux',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/Rest API',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://counsel.guidance.co.kr:7100/',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description: '프론트엔드',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: '~~~~~~~/~~~~~~~~~~/~~~~~~~',
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: 'src1/src2',
    },
    problems: {
      label: '문제점',
      description:
        '문제점~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    solve: {
      label: '해결방법',
      description: '이렇게 해결~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    mainImgSrc: { label: '메인 이미지', description: 'imgSrc' },
    topImgSrc: {
      label: '상단 이미지',
      description: '/projectImg/reserve/client/topMainImg',
    },
  },
  // {
  //   num: 6,
  //   label: '회사 메인 관리자 페이지',
  //   date: '',
  //   language: [],
  //   people: '',
  //   launch: '',
  //   link: '',
  //   codeLink: '',
  //   charge: [],
  //   responsive: '',
  //   description: '',
  //   function: [],
  //   skills: [],
  //   clientView: '',
  //   problems: '',
  //   solve: 'solve:',
  //   achieve: '',
  //   mainImgSrc: '',
  // },
];
