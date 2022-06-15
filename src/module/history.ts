export interface historyProps {
  time: string;
  imgSrc: string;
  title: string;
  description: string;
}

export const historyList: historyProps[] = [
  {
    time: '2016.9',
    imgSrc: 'entrance',
    title: '북경대학교 입학',
    description: '16학번 사회학과',
  },
  {
    time: '2019.7 ~ 2019.9',
    imgSrc: 'internRetail',
    title: '삼성 제일기획 인턴',
    description: '리테일 컨설팅',
  },
  {
    time: '2019.10 ~ 2020.2',
    imgSrc: 'america',
    title: '미국',
    description: '영어공부',
  },

  {
    time: '2020.6 ~ 2020.8',
    imgSrc: 'internManage',
    title: '브릿징그룹코리아',
    description: '해외 바이어 관리',
  },
  {
    time: '2020.7',
    imgSrc: 'graduate',
    title: '북경대학교 졸업',
    description: '16학번 사회학과',
  },
  {
    time: '2020.12 ~ 2021.6',
    imgSrc: 'studyIOT',
    title: '내일배움카드',
    description: '사물인터넷 iot',
  },
  {
    time: '2021.10 ~ 현재',
    imgSrc: 'hired',
    title: '한국가이던스 입사',
    description: '프론트엔드 개발자',
  },
];
