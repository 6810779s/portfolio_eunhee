import React from 'react';
import AppLayout from '../common/AppLayout';
import {
  Home,
  Profile,
  Skills,
  History,
  Project,
  WhyMe,
  ViewAll,
} from '../module/components';
const Container = () => {
  return (
    <AppLayout>
      <Home />
      <Profile />
      <History />
      <Skills />
      <Project />
    </AppLayout>
  );
};

export default Container;
