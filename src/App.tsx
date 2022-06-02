import React,{Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Achieve from './page/Achieve';
import Home from './page/Home';
import MyInfo from './page/MyInfo';
import Project from './page/Project';
import WhyMe from './page/WhyMe';

const App= () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/information' element={<MyInfo />} />
            <Route path='/achieve' element={<Achieve />} />
            <Route path='/project' element={<Project />} />
            <Route path='/why' element={<WhyMe />} />
            <Route path='*' element={<>Not Found</>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;