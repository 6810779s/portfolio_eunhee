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
  // topImgSrc: itemProps;
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
      description: 'MUI/Jenkins/BitBucket/Jira/confluence',
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
        '프로젝트 총괄/프론트엔드/UI 및 UX 기획/api 설계/데이터베이스 설계',
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
      description: `../projectImg/reserve/client/clientView1.png,
      ../projectImg/reserve/client/clientView2.png,
      
      ../projectImg/reserve/client/clientView3.png,
      
      ../projectImg/reserve/client/clientView4.png,
      
      ../projectImg/reserve/client/clientView5.png,
      
      ../projectImg/reserve/client/clientView6.png
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
      description: 'portfolio_eunhee/projectImg/reserve/client/mainImg.png',
    },
    // topImgSrc: {
    //   label: '상단 이미지',
    //   description: `${
    //     process.env.REACT_APP_ENV === 'local' && 'portfolio_eunhee/'
    //   }projectImg/reserve/client/topMainImg.png`,
    // },
  },
  {
    num: 2,
    name: { label: '프로젝트명', description: '예약 프로그램 관리자 페이지' },
    date: { label: '개발 기간', description: '2022-01-07 ~ 2022-02-21' },
    testDate: { label: '테스트 기간', description: '2022-02-22 ~ 2022-03-07' },
    launchingDate: {
      label: '출시일',
      description: '2022-03-08',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '2022-04-08(버그 및 기능 개선)/2022-05-24(기능 추가)',
    },
    tool: {
      label: '개발툴',
      description: 'MUI/Jenkins/BitBucket/Jira/confluence',
    },
    language: {
      label: '개발 언어',
      description: 'Next.js/Docker/nginx/Rest API/Git/SASS',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/RestAPI',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://counsel.guidance.co.kr:7100/admin',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description:
        '프로젝트 총괄/프론트엔드/UI 및 UX 기획/api 설계/데이터베이스 설계',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: `해당 프로젝트는 15분 전화상담 예약 프로그램의 관리자 페이지입니다. 
      관리자가 상담완료 및 미완료한 사용자들을 한눈에 체크할 수 있으며,
      원하는 예약날짜, 예약시간 및 근무시간을 관리자가 커스터마이징 할 수 있습니다.`,
    },
    achieve: {
      label: '성과',
      description:
        '2022년 6월 20일 기준 총 예약 건수는 215명이며, 총 상담 완료수는 204명입니다.',
    },
    function: {
      label: '기능',
      description: `1. 사용자 정보, 피검자가 실시한 검사 정보 및 예약 정보가 담겨있는 리스트 제공/
      2. 상담 완료 및 미완료 표시/
      3. 상세검색 필터 제공/
      4. 날짜 비활성화 기능/
      5. 시간 비활성화 기능/
      6. 근무 시간 조정 기능`,
    },

    clientView: {
      label: '프로젝트 사용자 화면',
      description: `../projectImg/reserve/admin/clientView1.png,
      ../projectImg/reserve/admin/clientView2.png,
      ../projectImg/reserve/admin/clientView3.png,
      ../projectImg/reserve/admin/clientView4.png,
      ../projectImg/reserve/admin/clientView5.png`,
    },
    problems: {
      label: '문제점',
      description: `관리자가 자유자재로 예약 날짜 및 시간을 조정할 수 있는 기능을 만들 시, 
        API전달 형식에 있어 많은 고민을 하였습니다.
        `,
    },
    solve: {
      label: '해결방법',
      description: `초기에는 {disabledDate: '2022/05/23,2022/05/24,2022/06'} 이러한 형식으로 전달하려 하였으나,
      데이터에 넣을 변수가 너무 길어졌고, 연도와 월이 겹쳐 비효율적이라고 생각하였습니다.
      팀원들과 함께 고민끝에 {year:'2022',month:'5',date:[{disabledDate:'11', disabledTime:[]}]}과 같은 형식으로
      연도와 월은 공통으로 사용하고, 날짜 전체를 비활성화할 경우에는 disabledTime의 배열에는 null값을, 해당날짜의 시간을
      비활성화할 경우에는 배열안에 비활성화할 시간을 담아주어, 기존에 생각했던 방식보다 더 효율적으로
      코드를 작성할 수 있었습니다.`,
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: 'portfolio_eunhee/projectImg/reserve/admin/mainImg.png',
    },
    // topImgSrc: {
    //   label: '상단 이미지',
    //   description: 'portfolio_eunhee/projectImg/reserve/admin/topMainImg.png',
    // },
  },
  {
    num: 3,
    name: {
      label: '프로젝트명',
      description: '방송통신고등학교 심리검사 실시 페이지',
    },
    date: { label: '개발 기간', description: '2022-04-06 ~ 2022-04-24' },
    testDate: { label: '테스트 기간', description: '2022-04-25 ~ 2022-04-27' },
    launchingDate: {
      label: '출시일',
      description: '2022-04-27',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '2022-05-02(버그 및 기능 개선)',
    },
    tool: {
      label: '개발툴',
      description: 'MUI/Jenkins/BitBucket/jira/confluence',
    },
    language: {
      label: '개발 언어',
      description: 'React.js/SASS/Redux/Docker/Git/nginx',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-saga/RestfulAPI',
    },
    people: {
      label: '개발 인원',
      description: '총 2명 - 백엔드 1명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '완료(서비스 종료)' },
    link: {
      label: '프로그램 링크',
      description: 'https://exam.guidance.co.kr/cyberhs/main',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description: `프론트엔드/UI 및 UX 기획`,
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: `방송통신고등학교에서 학생들에게 성격,학습 및 진로관련 심리검사를 제공하기 위해 페이지 제작을 요청하였습니다.
      해당 고등학교에는 다양한 연령층이 존재하여, 나이가 있으신 분들을 위해 UI적 요소는 크게크게 진행하였습니다.
      페이지 내에서는 검사를 실시할 수 있으며, localStorage에 진행한 검사가 저장되기 때문에, 
      오류 등 불가피한 상황으로 페이지를 나간다고 하더라도, 진행했던 부분부터 다시 진행할 수 있습니다. 
      진행을 완료한 검사는 본 페이지에서 바로 결과 확인 및 pdf파일 다운로드를 실행할 수 있습니다.`,
    },

    achieve: {
      label: '성과',
      description: `약 1500건의 검사를 계약하였으나 학생들의 만족도가 높았으며, 
    일부학생들의 요구로 인하여 초기 계약건수를 넘어선 2094건의 검사를 학생들이 원활하게 진행할 수 있도록
    페이지를 제공하였습니다.`,
    },
    function: {
      label: '기능',
      description: `1. 자동저장 기능/2. 진행율 표시기능/3. 검사실시 및 결과확인/4. 정보 수정`,
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: `../projectImg/testPage/client/clientView1.png,
      ../projectImg/testPage/client/clientView2.png,
      
      ../projectImg/testPage/client/clientView3.png,
      
      ../projectImg/testPage/client/clientView4.png,
      
      ../projectImg/testPage/client/clientView5.png,
      
      ../projectImg/testPage/client/clientView6.png
      `,
    },
    problems: {
      label: '문제점',
      description: `해당 검사는 문항의 선택지가 3개 ~ 12까지 다양하였으며, 단일선택 뿐만이 아니라, 여러개를 선택할 수 있는 문항도 존재하였습니다.
        모든 타입의 문항에 조건절을 걸어주기에는 조건의 범위가 넓었으며, 코드의 효율성도 떨어진다고 생각하였습니다.
        어떻게 해야지 좋은 로직을 구상한 다음, 구상한 로직을 어떻게 재사용할 수 있을지 고민하였습니다.`,
    },
    solve: {
      label: '해결방법',
      description: `단일선택 타입은 <OnlyOneAnswers/> 컴포넌트로, 다답형 타입만은 <SeveralAnswers/> 컴포넌트를 사용하여 문제를 해결하였습니다.
      문항리스트.map(v=>v.type!=="다답형 문항""&&<OnlyoneAnswers/>)와 같은 맥락의 로직을 사용하였으며,  <OnlyOneAnswers/> 컴포넌트들에서는,
      각 컴포넌트들에서 생성한 하나의 변수에 답을 담았고, <SeveralAnswers/>는 다답형이기 때문에 배열 형식으로 답을 담아주었습니다.`,
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: 'portfolio_eunhee/projectImg/testPage/client/mainImg.png',
    },
    // topImgSrc: {
    //   label: '상단 이미지',
    //   description: 'portfolio_eunhee/projectImg/testPage/client/topMainImg.png',
    // },
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
    date: { label: '개발 기간', description: '2022-05-25 ~ 진행중' },
    testDate: { label: '테스트 기간', description: '' },
    launchingDate: {
      label: '출시일',
      description: '출시전',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '',
    },
    tool: {
      label: '개발툴',
      description: 'Jenkins/BitBucket/Jira/confluence/MUI',
    },
    language: {
      label: '개발 언어',
      description: 'TypeScript/React.js/SCSS/Redux/Docker/Git/nginx',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-toolkit/Redux-thunk/Restful API',
    },
    people: {
      label: '개발 인원',
      description: '총 3명 - 백엔드 2명, 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '런칭중' },
    link: {
      label: '프로그램 링크',
      description: 'http://admin.guidance.co.kr:9000/(페이지 개설전)',
    },
    codeLink: { label: '깃허브 코드', description: '비공개' },
    charge: {
      label: '맡은 역할',
      description: '프론트엔드',
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: `가이던스 메인페이지를 관리하기 위한 관리자 페이지 입니다. 
      기존 페이지는 멈춤현상, 레이아웃 깨짐현상이 심하여 리뉴얼을 진행하게 되었습니다.
      해당 페이지에서는 사용자들의 정보 등록, 관리, 배송 상태 관리, 공지사항 및 QnA게시글 관리 등,
      메인 홈페이지를 관리자가 자유자재로 관리할 수 있는 페이지입니다.`,
    },
    achieve: { label: '성과', description: '진행중 입니다.' },
    function: {
      label: '기능',
      description: `1. 정보 등록, 수정 및 상세보기/2. 주문 조회, 수정 및 주문 상세보기/3. 주문 등록하기/4. 공지사항, QnA등 커뮤니티 게시글 관리/
      5. 거래명세표 보기/6. 상세 검색 필터`,
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: `../projectImg/guidanceMain/admin/clientView1.png,
      ../projectImg/guidanceMain/admin/clientView2.png,
      
      ../projectImg/guidanceMain/admin/clientView3.png,
      
      ../projectImg/guidanceMain/admin/clientView4.png
      `,
    },
    problems: {
      label: '문제점',
      description: `기존 프로젝트에서 타입관리가 잘 안되어, 유지보수에 있어 어려움이 있었습니다. 또한 redux-saga를 이용하여 중복된 코드가 
        많았습니다.`,
    },
    solve: {
      label: '해결방법',
      description: `Typescripnt를 적용하여 모든 변수에 타입을 지정해 주어, 
      다음 유지보수에서도 변수를 하나하나 찾아보지 않아도 한눈에 알아볼 수 있도록 코드를 작성하였습니다.
      또한 redux-tookit을 이용하여 중복되는 코드를 눈에 띄게 줄일 수 있었습니다.`,
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: 'portfolio_eunhee/projectImg/guidanceMain/admin/mainImg.png',
    },
    // topImgSrc: {
    //   label: '상단 이미지',
    //   description: 'portfolio_eunhee/projectImg/reserve/client/topMainImg',
    // },
  },
  {
    num: 5,
    name: { label: '프로젝트명', description: '현재 포트폴리오' },
    date: { label: '개발 기간', description: '2022-06-02 ~ 2022-06-22' },
    testDate: { label: '테스트 기간', description: '2022-06-22 ~ 2022-06-25' },
    launchingDate: {
      label: '출시일',
      description: '',
    },
    refactoryDate: {
      label: '업데이트 날짜',
      description: '',
    },
    tool: {
      label: '개발툴',
      description: 'Github/Jira/confluence/MUI',
    },
    language: {
      label: '개발 언어',
      description: 'Typescript/React.js/SCSS/Redux/Git',
    },
    skills: {
      label: '사용 라이브러리/기술',
      description: 'Redux-toolkit',
    },
    people: {
      label: '개발 인원',
      description: '총 1명 - 프론트엔드 1명',
    },
    launch: { label: '프로젝트 런칭 유무', description: '' },
    link: {
      label: '프로그램 링크',
      description: 'https://6810779s.github.io/portfolio_eunhee/',
    },
    codeLink: {
      label: '깃허브 코드',
      description: 'https://github.com/6810779s/portfolio_eunhee',
    },
    charge: {
      label: '맡은 역할',
      description: '프론트엔드',
    },
    responsive: { label: '반응형 유무', description: '없음' },
    description: {
      label: '프로젝트 설명',
      description: `현재 포트폴리오는 타입스크립트 공부겸, 제 자신을 어필하기 위하여 만들어진 포트폴리오입니다.
      해당 포트폴리오에서는 UI적 라이브러리는 사용하지 않고, 모두 직접 구현하였습니다.`,
    },
    achieve: {
      label: '성과',
      description:
        '포트폴리오를 제작하면서 타입스크립트에 더 입숙해질 수 있었으며, 다양한 UI/UX를 설계하며 실력을 더 쌓을 수 있었습니다.',
    },
    function: {
      label: '기능',
      description: `1. 포트폴리오 배경의 밤하늘 별 및 별똥별 위치, 크기 등 랜덤 생성
      /2. 스크롤 영역 이동
      /3. 스크롤 이동시 해당되는 영역을 왼쪽 사이드바에 표시
      /4. 히스토리 메뉴 영역에 도달했을 시, Response영역에 시간 순서대로 dom을 생성하여, 동적인 UI표현
      /5. 프로젝트 상세보기에서 사용자화면 이미지 마우스오버시 화면 확대`,
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: `../projectImg/portfolio/clientView1.png,
      ../projectImg/portfolio/clientView2.png,
      ../projectImg/portfolio/clientView3.png,
      ../projectImg/portfolio/clientView4.png,
      ../projectImg/portfolio/clientView5.png,
      ../projectImg/portfolio/clientView6.png,
      ../projectImg/portfolio/clientView7.png,
      ../projectImg/portfolio/clientView8.png
      `,
    },
    problems: {
      label: '문제점',
      description: `히스토리영역에서, 돔을 0.7초 간격으로 하나씩 생성하게 하고 싶어 setTimeout을 사용해주었지만,
        0.7초후에 모든 돔이 동시에 생성이 되어 어떻게 로직을 작성해야 되나 고민하였습니다.`,
    },
    solve: {
      label: '해결방법',
      description: `Promise를 사용하여 해결할 수 있었습니다. .then()으로 반복문에서도 코드 하나가 반복을 다 돌면, 그 다음 코드가
       반복을 도는 로직으로, dom을 0.7초 간격마다 순차적으로 순회할 수 있게 되었습니다.`,
    },
    mainImgSrc: {
      label: '메인 이미지',
      description: 'portfolio_eunhee/projectImg/portfolio/mainImg.png',
    },
    // topImgSrc: {
    //   label: '상단 이미지',
    //   description: 'portfolio_eunhee/projectImg/reserve/client/topMainImg',
    // },
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
