type categoryProps = {
    menu: string,
    category:string[]
}

const category: categoryProps[] = [
    {menu:"My Info",category:["GET/프로필","POST/기술스택","POST/경력"]},
    {menu:"Project",category:["15분 전화상담 예약 프로그램","방송통신고 검사 실시 프로그램","회사 메인 관리자 페이지"]},
    {menu: "Why me?", category: ["why?"] },
    {menu:"View all",category:["한눈에 보기"]}
];

export const currentMenu = (menuName: string): string[] => {
    const menuArr:string[] = category.find(v => v.menu === menuName)!.category;
    return menuArr;
}

export default category;