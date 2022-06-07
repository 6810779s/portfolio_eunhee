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

const cx = classNames.bind(styles);
type AppLayoutProps = {
    children: React.ReactNode;

}

const AppLayout = ({ children }: AppLayoutProps) => {
    const {currentMenuName,currentSubMenuName} = useSelector((state:RootState) => state.category);
    const category = useCallback((): JSX.Element[]  => {
        let categoryArr: JSX.Element[]  = [];
        currentMenu(currentMenuName).map(v => categoryArr.push(
            <li className={styles.subMenuList} key={v}>
                <span className={cx(
                    { getStyle: v.split("/")[0] === "GET" },
                    { postStyle: v.split("/")[0] === "POST" }
                )}>
                    {v.split("/").length > 1 ? v.split("/")[0] : ""}
                </span>
                {v.split("/")[1] ? ` / ${v.split("/")[1]}` : v}
            </li>))
        return categoryArr;
    },[])
 
    return (
        <div style={{height:"100%"}}>
            <header className={styles.headerContainer}>Eunhee's Portfolio</header>
            <div className={styles.contentsContainer}>
                <div className={styles.workSpaceWrap}>
                    <div className={styles.barTitle}>
                        <PersonIcon />
                        <p>My workspace</p>
                    </div>
                    <div className={styles.categoryWrap}>
                        <nav className={styles.menuNav}>
                            <ul className={styles.menuWrap}>
                                <li className={cx({currrentMenuStyle:currentMenuName==="My Info"})}><InfoIcon /><p>My Info</p></li>
                                {/* <li><BookmarksIcon /><p>Achieve</p></li> */}
                                <li className={cx({currrentMenuStyle:currentMenuName==="Project"})}><AutoGraphIcon /><p>Project</p></li>
                                <li className={cx({currrentMenuStyle:currentMenuName==="Why me?"})}><QuizIcon /><p>Why me?</p></li>
                                <li className={cx({currrentMenuStyle:currentMenuName==="View all"})}><PreviewIcon/><p>View all</p></li>
                            </ul>
                        </nav>
                        <aside>
                            <ul>
                                {category()}
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className={styles.contentsWrap}>
                    <div className={styles.tabBar}>
                        {/* <p>{`${currentMenuName} > ${currentSubMenuName}`}</p> */}
                       <p>{currentMenuName}</p><ArrowRightIcon/><p> {currentSubMenuName}</p>
                    </div>
                     <section>
                        {children}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AppLayout;