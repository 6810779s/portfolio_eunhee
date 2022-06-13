import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from '../../styles/page/MyInfo.module.scss';
import MyInfoLayout from '../../common/MyInfoLayout';
const Profile = () => {
  return (
    <MyInfoLayout>
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
    </MyInfoLayout>
  );
};

export default Profile;
