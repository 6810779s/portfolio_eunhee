import { WifiTetheringErrorRoundedTwoTone } from '@mui/icons-material';
import React, { Suspense } from 'react';
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
  const { currentMenuName, currentSubMenuName } = useSelector(
    (state: RootState) => state.category
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/project/:projectNum" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
