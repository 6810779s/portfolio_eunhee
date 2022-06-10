import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from '../../styles/page/MyInfo.module.scss';
const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <header>
                <div className={styles.wrap}>
                    <div className={styles.apiType}><p>GET</p><KeyboardArrowDownIcon/></div>
                    <div className={styles.contents}><span>{`{{IP}}`}</span>/profile?name=eunhee</div>
                </div>
                <div className={styles.sendBtn}>Send</div>
            </header>
            <div className={styles.requestWrap}>
                <p>Request</p>
                <div className={styles.codeBox}>
                    <p>Information</p>
                </div>
                {/* This request does not have a body */}
            </div>
            <div className={styles.responseWrap}>
                <p>Response</p>
                <div className={styles.codeBox}>
                    <p>{`{ `}</p>
                    <p>&emsp;&emsp;<span>"이름"</span>: "장은희",</p>
                    <p>&emsp;&emsp;<span>"학력"</span>: "북경대학교졸업 (중국)",</p>
                    <p>&emsp;&emsp;<span>"생년월일"</span>: "1997.07.22",</p>
                    <p>&emsp;&emsp;<span>"블로그"</span>: <a href='https://eunhee-programming.tistory.com/'>"https://eunhee-programming.tistory.com/"</a>,</p>
                    <p>{`}`}</p>
                </div>
            </div>

        </div>
    );
};

export default Profile;