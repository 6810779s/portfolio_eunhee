import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppLayout from '../../common/AppLayout';
import { projects } from '../../module/projects';
import { RootState } from '../../redux/configureStore';
import { projectDetail } from '../../redux/reducer/pages/projectSlice';
import styles from '../../styles/page/Project.module.scss';
import ProjectDetail from './ProjectDetail';

const Project = () => {
  const dispatch = useDispatch();
  const { currentProjectNum, projectInfo } = useSelector(
    (state: RootState) => state.project
  );

  const projectPage = (num: number, e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(projectDetail(num));
  };
  const projectsList = (): JSX.Element[] => {
    let projectsArr: JSX.Element[] = [];
    projects.map((v) =>
      projectsArr.push(
        <li onClick={(e) => projectPage(v.num, e)}>
          {/* <img src={`/${v.mainImgSrc}`} /> */}
          <div className={styles.img}></div>
          <p className={styles.name}>{v.name.description}</p>
          <p className={styles.launch}>{v.launch.description}</p>
        </li>
      )
    );
    return projectsArr;
  };
  return (
    <>
      {currentProjectNum ? (
        <ProjectDetail />
      ) : (
        <ul className={styles.projectsListWrap}>{projectsList()}</ul>
      )}
    </>
  );
};

export default Project;
