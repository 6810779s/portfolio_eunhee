import React, { useCallback } from 'react';
import styles from '../styles/common/AppLayout.module.scss';
import PersonIcon from '@mui/icons-material/Person';
import { currentMenu } from '../module/category';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
// import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PreviewIcon from '@mui/icons-material/Preview';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import classNames from 'classnames/bind';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch } from 'react-redux';
import {
  changeMenuName,
  changeSubMenuName,
} from '../redux/reducer/common/categorySlice';

const cx = classNames.bind(styles);
interface AppLayoutProps {
  children: React.ReactNode;
}
interface menuProps {
  menuName: string;
  subMenuName: string;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useDispatch();
  const { currentMenuName, currentSubMenuName } = useSelector(
    (state: RootState) => state.category
  );
  const clickSubMenuHandler = (
    menuName: string,
    e: React.MouseEvent<HTMLLIElement>
  ) => {
    dispatch(changeSubMenuName(menuName));
  };
  // const clickHomeHandler = (
  //   menuName: string,
  //   e: React.MouseEvent<HTMLHeadElement>
  // ) => {
  //   dispatch(changeMenuName(menuName));
  // };
  const clickMenuHandler = (
    menuName: menuProps,
    e: React.MouseEvent<HTMLElement>
  ) => {
    dispatch(changeMenuName(menuName.menuName));
    dispatch(changeSubMenuName(menuName.subMenuName));
  };
  const category = useCallback((): JSX.Element[] => {
    let categoryArr: JSX.Element[] = [];
    currentMenu(currentMenuName).map((v) =>
      categoryArr.push(
        <li
          className={cx(
            { subMenuList: true },
            { currentSubMenu: currentSubMenuName === v }
          )}
          key={v}
          onClick={(e) => clickSubMenuHandler(v, e)}
        >
          <span
            className={cx(
              { getStyle: v.split('/')[0] === 'GET' },
              { postStyle: v.split('/')[0] === 'POST' },
              { putStyle: v.split('/')[0] === 'PUT' }
            )}
          >
            {v.split('/').length > 1 ? v.split('/')[0] : ''}
          </span>
          {v.split('/')[1] ? ` / ${v.split('/')[1]}` : v}
        </li>
      )
    );
    return categoryArr;
  }, [currentSubMenuName]);

  return (
    <div style={{ height: '100%' }}>
      <header
        className={styles.headerContainer}
        onClick={(e) =>
          clickMenuHandler({ menuName: 'My Info', subMenuName: '첫 인사' }, e)
        }
      >
        Eunhee's Portfolio
      </header>
      <div className={styles.contentsContainer}>
        <div className={styles.workSpaceWrap}>
          <div className={styles.barTitle}>
            <PersonIcon />
            <p>My workspace</p>
          </div>
          <div className={styles.categoryWrap}>
            <nav className={styles.menuNav}>
              <ul className={styles.menuWrap}>
                <li
                  className={cx({
                    currrentMenuStyle: currentMenuName === 'My Info',
                  })}
                  onClick={(e) =>
                    clickMenuHandler(
                      { menuName: 'My Info', subMenuName: 'GET/프로필' },
                      e
                    )
                  }
                >
                  <InfoIcon />
                  <p>My Info</p>
                </li>
                {/* <li><BookmarksIcon /><p>Achieve</p></li> */}
                <li
                  className={cx({
                    currrentMenuStyle: currentMenuName === 'Project',
                  })}
                  onClick={(e) =>
                    clickMenuHandler(
                      { menuName: 'Project', subMenuName: '프로젝트 소개' },
                      e
                    )
                  }
                >
                  <AutoGraphIcon />
                  <p>Project</p>
                </li>
                <li
                  className={cx({
                    currrentMenuStyle: currentMenuName === 'Why me?',
                  })}
                  onClick={(e) =>
                    clickMenuHandler(
                      {
                        menuName: 'Why me?',
                        subMenuName: '저를 선택하셔야 되는 이유는요..!',
                      },
                      e
                    )
                  }
                >
                  <QuizIcon />
                  <p>Why me?</p>
                </li>
                <li
                  className={cx({
                    currrentMenuStyle: currentMenuName === 'View all',
                  })}
                  onClick={(e) =>
                    clickMenuHandler(
                      { menuName: 'View all', subMenuName: '한눈에 보기' },
                      e
                    )
                  }
                >
                  <PreviewIcon />
                  <p>View all</p>
                </li>
              </ul>
            </nav>
            <aside>
              <ul>{category()}</ul>
            </aside>
          </div>
        </div>
        <div className={styles.contentsWrap}>
          <div className={styles.tabBar}>
            {/* <p>{`${currentMenuName} > ${currentSubMenuName}`}</p> */}
            <p>{currentMenuName}</p>
            <ArrowRightIcon />
            <p> {currentSubMenuName}</p>
          </div>
          <section>{children}</section>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
