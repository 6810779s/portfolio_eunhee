import React, { useCallback, useEffect, useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from '../styles/common/MyInfoLayout.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
type MyInfoLayoutProps = {
  children: React.ReactNode;
};

type titleProps = {
  apiAddress: string;
  response: string;
};

const MyInfoLayout = ({ children }: MyInfoLayoutProps) => {
  const { currentMenuName, currentSubMenuName } = useSelector(
    (state: RootState) => state.category
  );
  const [title, setTitle] = useState<titleProps>({
    apiAddress: '',
    response: '',
  });
  useEffect(() => {
    if (currentSubMenuName === 'GET/프로필') {
      setTitle({ apiAddress: '/profile?name=eunhee', response: 'Information' });
    } else if (currentSubMenuName === 'PUT/히스토리') {
      setTitle({ apiAddress: '/history', response: 'My Story' });
    } else if (currentSubMenuName === 'POST/기술스택') {
      setTitle({ apiAddress: '/skills', response: 'What can I do?' });
    }
  }, [currentSubMenuName]);

  return (
    <div className={styles.myInfoContainer}>
      <header>
        <div className={styles.wrap}>
          <div className={styles.apiType}>
            <p>{currentSubMenuName.split('/')[0]}</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className={styles.contents}>
            <span>{`{{IP}}`}</span>
            {title.apiAddress}
          </div>
        </div>
        <div className={styles.sendBtn}>Send</div>
      </header>
      <div className={styles.requestWrap}>
        <p>Request</p>
        <div className={styles.codeBox}>
          <p>{title.response}</p>
        </div>
      </div>
      <div className={styles.responseWrap}>
        <p>Response</p>
        <div className={styles.codeBox}>{children}</div>
      </div>
    </div>
  );
};

export default MyInfoLayout;
