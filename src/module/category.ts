type categoryProps = {
    menu: string,
    category:string[]
}

const category: categoryProps[] = [
    {menu:"My Info",category:["profile","skills","career"]},
    {menu:"Achieve",category:["blog"]},
    {menu:"Project",category:["project1","project2"]},
    {menu:"Why me?",category:["why?"]}
];

export const currentMenu = (menuName: string): string[] => {
    const menuArr:string[] = category.find(v => v.menu === menuName)!.category;
    return menuArr;
}

export default category;