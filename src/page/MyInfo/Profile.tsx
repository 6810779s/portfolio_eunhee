import React, { useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from '../../styles/page/MyInfo.module.scss';
import MyInfoLayout from '../../common/MyInfoLayout';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import {
  changeMenuName,
  changeSubMenuName,
} from '../../redux/reducer/common/categorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';
const Profile = () => {
  const [ref, inView] = useInView();
  const dispatch = useDispatch();
  const { currentMenuName, currentSubMenuName } = useSelector(
    (state: RootState) => state.category
  );
  useEffect(() => {
    console.log('profile:', inView);
    if (inView && currentSubMenuName === 'GET/프로필') {
      dispatch(changeMenuName('My Info'));
      dispatch(changeSubMenuName('GET/프로필'));
    }
  }, [inView]);
  return (
    <MyInfoLayout>
      <div ref={ref}>
        <p>{`{ `}</p>
        <p>
          &emsp;&emsp;<span>"이름"</span>: "장은희",
        </p>
        <p>
          &emsp;&emsp;<span>"학력"</span>: "북경대학교졸업 (중국)",
        </p>
        <p>
          &emsp;&emsp;<span>"생년월일"</span>: "1997.07.22",
        </p>
        <p>
          &emsp;&emsp;<span>"블로그"</span>:{' '}
          <a href="https://eunhee-programming.tistory.com/">
            "https://eunhee-programming.tistory.com/"
          </a>
          ,
        </p>
        <p>{`}`}</p>
      </div>
    </MyInfoLayout>
  );
};

export default Profile;
