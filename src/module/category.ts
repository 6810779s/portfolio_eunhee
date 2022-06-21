interface categoryProps {
  menu: string;
  category: string[];
}

const category: categoryProps[] = [
  {
    menu: 'My Info',
    category: ['GET/프로필', 'PUT/히스토리', 'POST/기술스택'],
  },
  { menu: 'Project', category: ['프로젝트 소개'] },
  // { menu: 'Why me?', category: ['저를 선택하셔야 되는 이유는요..!'] },
  // { menu: 'View all', category: ['한눈에 보기'] },
];

export const currentMenu = (menuName: string): string[] => {
  const menuArr: string[] = category.find((v) => v.menu === menuName)!.category;
  return menuArr;
};

interface scrollProps {
  top: number;
  left: number;
  behavior: ScrollBehavior | undefined;
}
export const scrollEvent = (pageHeight: number): scrollProps => {
  return { top: pageHeight, left: 0, behavior: 'smooth' };
};

export default category;
