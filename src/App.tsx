import React,{Suspense} from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './common/AppLayout';
import { Home, Profile, Skills,Career,Project, WhyMe ,ViewAll} from './module/components'
import { RootState } from './redux/configureStore';

const App = () => {
  const {currentMenuName,currentSubMenuName}=useSelector((state:RootState)=>state.category)
  return (
    <Suspense fallback={<div>loading...</div>}>
    <AppLayout>
        {currentMenuName === "My Info" && currentSubMenuName === "첫 인사" ? <Home /> : ""}
        {currentMenuName === "My Info" && currentSubMenuName === "GET/프로필" ? <Profile /> : ""}
        {currentMenuName === "My Info" && currentSubMenuName === "POST/기술스택" ? <Skills /> : ""}
        {currentMenuName === "My Info" && currentSubMenuName === "POST/경력" ? <Career /> : ""}
        {currentMenuName === "Project"? <Project /> : ""}
        {currentMenuName === "Why me?" ? <WhyMe /> : ""}
        {currentMenuName==="View all"?<ViewAll />:""}
      </AppLayout>
      </Suspense>
  );
};

export default App;