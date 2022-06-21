import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AppLayout from '../../common/AppLayout';
import { projects } from '../../module/projects';
import { RootState } from '../../redux/configureStore';
import {
  backAction,
  projectDetail,
} from '../../redux/reducer/pages/projectSlice';
import styles from '../../styles/page/Project.module.scss';
import ProjectDetail from './ProjectDetail';
import { useInView } from 'react-intersection-observer';
import {
  changeMenuName,
  changeSubMenuName,
} from '../../redux/reducer/common/categorySlice';
import { Link } from 'react-router-dom';
const Project = () => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const { currentSubMenuName } = useSelector(
    (state: RootState) => state.category
  );
  useEffect(() => {
    if (inView) {
      dispatch(changeMenuName('Project'));
      dispatch(changeSubMenuName('프로젝트 소개'));
      dispatch(backAction(false));
    }
  }, [inView]);

  // const projectPage = (num: number, e: React.MouseEvent<HTMLLIElement>) => {
  //   dispatch(projectDetail(num));

  // };
  const projectsList = (): JSX.Element[] => {
    let projectsArr: JSX.Element[] = [];
    projects.map((v) =>
      projectsArr.push(
        <Link to={`/project/${v.num}`}>
          <li>
            <div className={styles.projectInfo}>
              <div className={styles.title}>{v.language.label}</div>
              <div className={styles.skill}>
                {v.language.description.split('/').map((v) => (
                  <p>{v}</p>
                ))}
              </div>
              <hr />
              <div className={styles.title}>{v.tool.label}</div>
              <div className={styles.skill}>
                {v.tool.description.split('/').map((v) => (
                  <p>{v}</p>
                ))}
              </div>
              <hr />
              <div className={styles.title}>{v.skills.label}</div>
              <div className={styles.skill}>
                {v.skills.description.split('/').map((v) => (
                  <p>{v}</p>
                ))}
              </div>
            </div>
            <div className={styles.img}>
              <img src={v.mainImgSrc.description} />
            </div>
            <p className={styles.name}>{v.name.description}</p>
            <p className={styles.launch}>{v.date.description}</p>
            <p className={styles.launch}>{v.launch.description}</p>
          </li>
        </Link>
      )
    );
    return projectsArr;
  };

  return (
    <div className={styles.container}>
      <ul className={styles.projectsListWrap} ref={ref}>
        {projectsList()}
      </ul>
    </div>
  );
};

export default Project;
