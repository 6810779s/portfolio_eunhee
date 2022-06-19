import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import styles from '../../styles/page/Project.module.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PeopleIcon from '@mui/icons-material/People';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { backAction } from '../../redux/reducer/pages/projectSlice';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate, useParams } from 'react-router-dom';
import { projects, projectsProps } from '../../module/projects';
const ProjectDetail = () => {
  const dispatch = useDispatch();
  let params = useParams();
  const navigate = useNavigate();
  const [projectInfo, setProjectInfo] = useState<projectsProps>();
  useEffect(() => {
    const idx = projects.findIndex((v) => Number(params.projectNum) === v.num);
    setProjectInfo(projects[idx]);
  }, []);
  const back = () => {
    navigate(-1);
    dispatch(backAction(true));
  };

  const simpleItems = useCallback(
    (key: string): JSX.Element[] => {
      let itemArr: JSX.Element[] = [];
      itemArr.push(
        <>
          <li>
            {key === 'label' && (
              <CalendarMonthIcon className={styles.iconStyle} />
            )}
            {projectInfo!.date[key]}
          </li>
          <li>
            {key === 'label' && <LanguageIcon className={styles.iconStyle} />}
            <div className={styles.bedgeWrap}>
              {projectInfo!.language[key].split('/').map((v) => (
                <p className={styles.bedge}>{v}</p>
              ))}
            </div>
          </li>
          <li>
            {key === 'label' && (
              <AutoFixHighIcon className={styles.iconStyle} />
            )}
            <div className={styles.bedgeWrap}>
              {projectInfo!.skills[key].split('/').map((v) => (
                <p className={styles.bedge}>{v}</p>
              ))}
            </div>
          </li>
          <li>
            {key === 'label' && <PeopleIcon className={styles.iconStyle} />}
            {projectInfo!.people[key]}
          </li>
          <li>
            {key === 'label' && (
              <AddShoppingCartIcon className={styles.iconStyle} />
            )}
            {projectInfo!.launch[key]}
          </li>
          <li>
            {key === 'label' && <LinkIcon className={styles.iconStyle} />}
            {projectInfo!.link[key]}
          </li>
          <li>
            {key === 'label' && <GitHubIcon className={styles.iconStyle} />}
            {projectInfo!.codeLink[key]}
          </li>
          <li>
            {key === 'label' && (
              <ManageAccountsIcon className={styles.iconStyle} />
            )}
            <div className={styles.bedgeWrap}>
              {projectInfo!.charge[key].split('/').map((v) => (
                <p className={styles.bedge}>{v}</p>
              ))}
            </div>
          </li>
          <li>
            {key === 'label' && (
              <MobileFriendlyIcon className={styles.iconStyle} />
            )}
            {projectInfo!.responsive[key]}
          </li>
        </>
      );
      return itemArr;
    },
    [projectInfo]
  );
  const detailItems = useCallback(
    (labelKey: string, desKey: string): JSX.Element[] => {
      let itemArr: JSX.Element[] = [];
      itemArr.push(
        <>
          <li className={styles.label}>{projectInfo!.function[labelKey]}</li>
          <li>{projectInfo!.function[desKey]}</li>
          <li className={styles.label}>{projectInfo!.description[labelKey]}</li>
          <li>{projectInfo!.description[desKey]}</li>
          <li className={styles.label}>{projectInfo!.achieve[labelKey]}</li>
          <li>{projectInfo!.achieve[desKey]}</li>
          <li className={styles.label}>{projectInfo!.clientView[labelKey]}</li>
          <li>{projectInfo!.clientView[desKey]}</li>
          <li className={styles.label}>{projectInfo!.problems[labelKey]}</li>
          <li>{projectInfo!.problems[desKey]}</li>
          <li className={styles.label}>{projectInfo!.solve[labelKey]}</li>
          <li>{projectInfo!.solve[desKey]}</li>
        </>
      );
      return itemArr;
    },
    [projectInfo]
  );
  console.log(projectInfo?.mainImgSrc.description);
  return (
    <>
      {projectInfo && (
        <div className={styles.projectDetailWrap}>
          <div className={styles.mainImg}>
            <img src={projectInfo.topImgSrc.description} />
          </div>
          <div className={styles.detailWrap}>
            <h1>{projectInfo!.name.description}</h1>
            <div className={styles.descriptionSimple}>
              <ul className={styles.detail}>{simpleItems('label')}</ul>
              <ul className={styles.detailDescription}>
                {simpleItems('description')}
              </ul>
            </div>
            <hr />
            <div className={styles.descriptionDetail}>
              <ul className={styles.detail}>
                {detailItems('label', 'description')}
              </ul>
            </div>
          </div>
          <Button className={styles.back} onClick={back}>
            <KeyboardReturnIcon />
            Back
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
