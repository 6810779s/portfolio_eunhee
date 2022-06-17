import { Button, StyledEngineProvider } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import MyInfoLayout from '../../common/MyInfoLayout';
import { historyList, historyProps } from '../../module/history';
import styles from '../../styles/page/MyInfo.module.scss';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const History = () => {
  const liElement = useRef<HTMLUListElement>(null);
  const historyContainer = useRef<HTMLDivElement>(null);
  const scrollDownBtn = useRef<HTMLButtonElement>(null);
  const scrollUpBtn = useRef<HTMLButtonElement>(null);
  const [listTag, setListTag] = useState<HTMLLIElement>();
  const [bottomNum, setBottomNum] = useState<number>(0);
  const delay = () => {
    const delayTime = 700;
    return new Promise((resolve) => setTimeout(resolve, delayTime));
  };

  const result = async (list: historyProps[]) => {
    for (const data of list) {
      await delay().then(() => {
        const timeDiv = document.createElement('div');
        timeDiv.className = styles.time;
        timeDiv.innerText = `${data.time}`;
        const imgTag = document.createElement('img');
        imgTag.setAttribute('src', `/historyImg/${data.imgSrc}.png`);
        imgTag.className = styles.historyImg;
        imgTag.setAttribute('alt', `${data.imgSrc}`);
        const imgDiv = document.createElement('div');
        imgDiv.className = styles.imgSrc;
        imgDiv.appendChild(imgTag);
        const hFontTag = document.createElement('h3');
        hFontTag.innerText = `${data.title}`;
        const pFontTag = document.createElement('p');
        pFontTag.className = styles.fontStyle;
        pFontTag.innerText = `${data.description}`;
        const titleDiv = document.createElement('div');
        titleDiv.className = styles.title;
        titleDiv.appendChild(hFontTag);
        titleDiv.appendChild(pFontTag);
        const liTag = document.createElement('li');
        liTag.appendChild(timeDiv);
        liTag.appendChild(imgDiv);
        liTag.appendChild(titleDiv);
        if (liElement.current && liTag) {
          liElement.current.appendChild(liTag);
        }
      });
    }
  };

  const scrollDown = useCallback(() => {
    if (
      historyContainer.current &&
      scrollDownBtn.current &&
      scrollUpBtn.current
    ) {
      if (bottomNum >= 0 && bottomNum <= 200) {
        const value = bottomNum + 200;
        historyContainer.current.style.transform = `translateY(-${value}px)`;
        setBottomNum(value);
      }
    }
  }, [bottomNum]);

  const scrollUp = useCallback(() => {
    if (
      historyContainer.current &&
      scrollUpBtn.current &&
      scrollDownBtn.current
    ) {
      if (bottomNum > 0 && bottomNum <= 400) {
        const value = bottomNum - 200;
        historyContainer.current.style.transform = `translateY(-${value}px)`;
        setBottomNum(value);
      }
    }
  }, [bottomNum]);

  useEffect(() => {
    result(historyList);
  }, []);

  return (
    <MyInfoLayout>
      <div className={styles.historyContainer} ref={historyContainer}>
        <ul className={styles.historyWrap} ref={liElement}></ul>
      </div>
      <div className={styles.btnContainer}>
        <Button
          className={styles.scrollBtnUp}
          ref={scrollUpBtn}
          onClick={scrollUp}
        >
          <KeyboardDoubleArrowUpIcon className={styles.upIcon} />
        </Button>
        <Button
          className={styles.scrollBtnDown}
          ref={scrollDownBtn}
          onClick={scrollDown}
        >
          <KeyboardDoubleArrowDownIcon className={styles.downIcon} />
        </Button>
      </div>
    </MyInfoLayout>
  );
};

export default History;
