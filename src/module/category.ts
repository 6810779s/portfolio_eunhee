type categoryProps = {
    menu: string,
    category:string[]
}

const category: categoryProps[] = [
    {menu:"My Info",category:["GET/프로필","POST/기술스택","POST/경력"]},
    {menu:"Project",category:["프로젝트 소개"]},
    {menu: "Why me?", category: ["why?"] },
    {menu:"View all",category:["한눈에 보기"]}
];

export const currentMenu = (menuName: string): string[] => {
    const menuArr:string[] = category.find(v => v.menu === menuName)!.category;
    return menuArr;
}

export default category;