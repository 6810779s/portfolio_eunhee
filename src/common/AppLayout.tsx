import React from 'react';
import styles from '../styles/common/AppLayout.module.scss';

type AppLayoutProps = {
    children: React.ReactNode;
}

const AppLayout = ({children}:AppLayoutProps) => {
    return (
        <div>
            <div className={styles.headerContainer}>Eunhee's Portfolio</div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;