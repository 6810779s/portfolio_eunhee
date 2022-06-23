import { WifiTetheringErrorRoundedTwoTone } from '@mui/icons-material';
import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './common/AppLayout';
import {
  Home,
  Profile,
  Skills,
  History,
  Project,
  WhyMe,
  ViewAll,
  Container,
} from './module/components';
import ProjectDetail from './page/Project/ProjectDetail';
import { RootState } from './redux/configureStore';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/project/:projectNum" element={<ProjectDetail />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
