import React, { useEffect } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import styles from '../styles/page/Home.module.scss';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {
  changeMenuName,
  changeSubMenuName,
} from '../redux/reducer/common/categorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
const Home = () => {
  const [ref, inView] = useInView();
  const { currentSubMenuName } = useSelector(
    (state: RootState) => state.category
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(changeMenuName('My Info'));
      dispatch(changeSubMenuName('첫 인사'));
    }
  }, [inView]);
  return (
    <div className={styles.container}>
      <div className={styles.myPhoto} ref={ref}>
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
