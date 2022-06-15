import React from 'react';
import AppLayout from '../common/AppLayout';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styles from '../styles/page/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.myPhoto}>
        <p>image</p>
      </div>
      <div className={styles.greetStyle}>
        <p>안녕하세요!</p>
        <p>프론트엔드 개발자 장은희입니다!</p>
      </div>
      <div className={styles.scrollStyle}>
        <p>아래로 스크롤 해주세요</p>
        <KeyboardDoubleArrowDownIcon className={styles.arrowStyle} />
      </div>
    </div>
  );
};

export default Home;
