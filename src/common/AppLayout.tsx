import React, { useCallback } from 'react';
import styles from '../styles/common/AppLayout.module.scss';
import PersonIcon from '@mui/icons-material/Person';
import category, { currentMenu } from '../module/category';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PreviewIcon from '@mui/icons-material/Preview';

type AppLayoutProps = {
    children: React.ReactNode;

}

const AppLayout = ({ children }: AppLayoutProps) => {
    const category = useCallback((): JSX.Element[]  => {
        let categoryArr: JSX.Element[]  = [];
        currentMenu("My Info").map(v => categoryArr.push(<li key={v}>{v}</li>))
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
                                <li><InfoIcon /><p>My Info</p></li>
                                <li><BookmarksIcon /><p>Achieve</p></li>
                                <li><AutoGraphIcon /><p>Project</p></li>
                                <li><QuizIcon /><p>Why me?</p></li>
                                <li><PreviewIcon/><p>View all</p></li>
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
                    <div className={styles.tabBar}></div>
                     <section>
                        {children}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AppLayout;