interface itemProps {
  [key: string]: string;
  label: string;
  description: string;
}

interface itemListProps {
  [key: string]: string | string[];
  label: string;
  description: string[];
}

export interface projectsProps {
  [key: string]: any;
  num: number;
  name: itemProps;
  date: itemProps;
  language: itemListProps;
  people: itemProps;
  launch: itemProps;
  link: itemProps;
  codeLink: itemProps;
  charge: itemListProps;
  responsive: itemProps;
  description: itemProps;
  function: itemListProps;
  skills: itemListProps;
  clientView: itemListProps;
  problems: itemProps;
  solve: itemProps;
  achieve: itemProps;
  mainImgSrc: itemProps;
}

export const projects: projectsProps[] = [
  {
    num: 1,
    name: { label: '프로젝트명', description: '15분 전화상담 예약 프로그램' },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    language: {
      label: '개발 언어',
      description: ['SCSS', 'React.js', 'Redux'],
    },
    skills: { label: '사용 기술', description: ['Redux-saga', 'Rest API'] },
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
      description: [
        '프로젝트 총괄',
        '프론트엔드',
        'UI/UX 기획',
        'api 설계',
        '데이터베이스 설계',
      ],
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    function: {
      label: '기능',
      description: ['~~~~~~~', '~~~~~~~~~~', '~~~~~~~'],
    },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },

    clientView: {
      label: '프로젝트 사용자 화면',
      description: ['src1', 'src2'],
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
  },
  {
    num: 2,
    name: { label: '프로젝트명', description: '예약 프로그램 관리자 페이지' },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    language: {
      label: '개발 언어',
      description: ['SCSS', 'React.js', 'Redux'],
    },
    skills: { label: '사용 기술', description: ['Redux-saga', 'Rest API'] },
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
      description: [
        '프로젝트 총괄',
        '프론트엔드',
        'UI/UX 기획',
        'api 설계',
        '데이터베이스 설계',
      ],
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: ['~~~~~~~', '~~~~~~~~~~', '~~~~~~~'],
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: ['src1', 'src2'],
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
  },
  {
    num: 3,
    name: {
      label: '프로젝트명',
      description: '방송통신고등학교 심리검사 실시 페이지',
    },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    language: {
      label: '개발 언어',
      description: ['SCSS', 'React.js', 'Redux'],
    },
    skills: { label: '사용 기술', description: ['Redux-saga', 'Rest API'] },
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
      description: [
        '프로젝트 총괄',
        '프론트엔드',
        'UI/UX 기획',
        'api 설계',
        '데이터베이스 설계',
      ],
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: ['~~~~~~~', '~~~~~~~~~~', '~~~~~~~'],
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: ['src1', 'src2'],
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
  },
  {
    num: 4,
    name: { label: '프로젝트명', description: '검사 실시 관리자 페이지' },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    language: {
      label: '개발 언어',
      description: ['SCSS', 'React.js', 'Redux'],
    },
    skills: { label: '사용 기술', description: ['Redux-saga', 'Rest API'] },
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
      description: ['프론트엔드', 'UI/UX 기획'],
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: ['~~~~~~~', '~~~~~~~~~~', '~~~~~~~'],
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: ['src1', 'src2'],
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
  },
  {
    num: 5,
    name: { label: '프로젝트명', description: '현재 포트폴리오' },
    date: { label: '개발 기간', description: '2022-02-01 ~ 2022-02-03' },
    language: {
      label: '개발 언어',
      description: ['SCSS', 'React.js', 'Redux'],
    },
    skills: { label: '사용 기술', description: ['Redux-saga', 'Rest API'] },
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
      description: ['프론트엔드'],
    },
    responsive: { label: '반응형 유무', description: '반응형 페이지' },
    description: {
      label: '프로젝트 설명',
      description: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    },
    achieve: { label: '성과', description: '~~~~~~~~~~~~~~~~~~~~~~~~~' },
    function: {
      label: '기능',
      description: ['~~~~~~~', '~~~~~~~~~~', '~~~~~~~'],
    },
    clientView: {
      label: '프로젝트 사용자 화면',
      description: ['src1', 'src2'],
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
