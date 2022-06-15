interface skillsNameProps {
  level: string;
  skills: string[];
}

export const skill: skillsNameProps[] = [
  {
    level: '익숙함',
    skills: [
      'HTML',
      'CSS',
      'Sass',
      'JavaScript',
      'ReactJs',
      'Redux',
      'RESTful API',
    ],
  },
  {
    level: '익숙해지는 중',
    skills: ['Typescript', 'NextJs', 'NodeJs', 'Mssql'],
  },
  {
    level: '노력중',
    skills: ['docker', 'nginx', 'Jenkins'],
  },
];

export const tools: skillsNameProps[] = [
  {
    level: '익숙함',
    skills: ['GitHub', 'Confluence', 'Jira', 'Bitbucket', 'MUI', 'bootstrap'],
  },
];

export const level: string[] = ['익숙함', '익숙해지는 중', '노력중'];
