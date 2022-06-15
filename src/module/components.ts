import React from 'react';

const Home = React.lazy(() => import('../page/Home'));
const Profile = React.lazy(() => import('../page/MyInfo/Profile'));
const Skills = React.lazy(() => import('../page/MyInfo/Skills'));
const History = React.lazy(() => import('../page/MyInfo/History'));
const Project = React.lazy(() => import('../page/Project/Project'));
const WhyMe = React.lazy(() => import('../page/WhyMe/WhyMe'));
const ViewAll = React.lazy(() => import('../page/ViewAll'));

export { Home, Profile, Skills, History, Project, WhyMe, ViewAll };
