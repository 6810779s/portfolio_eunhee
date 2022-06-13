import React from 'react';
import MyInfoLayout from '../../common/MyInfoLayout';
import { historyList } from '../../module/history';
import styles from '../../styles/page/MyInfo.module.scss';
const History = () => {
  const historyArr = (): JSX.Element[] => {
    let arr: JSX.Element[] = [];
    historyList.map((v) =>
      arr.push(
        <li key={v.time}>
          <div className={styles.time}>{v.time}</div>
          <div className={styles.imgSrc}>
            <img
              src={`/historyImg/${v.imgSrc}.png`}
              className={styles.historyImg}
              alt={v.imgSrc}
            />
          </div>
          <div className={styles.title}>
            <h3>{v.title}</h3>
            <p className={styles.fontStyle}>{v.description}</p>
          </div>
        </li>
      )
    );
    return arr;
  };
  return (
    <MyInfoLayout>
      <ul className={styles.historyWrap}>{historyArr()}</ul>
    </MyInfoLayout>
  );
};

export default History;
