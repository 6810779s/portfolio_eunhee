import React, { useCallback, useEffect, useState } from 'react';
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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ConstructionIcon from '@mui/icons-material/Construction';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BugReportIcon from '@mui/icons-material/BugReport';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { backAction } from '../../redux/reducer/pages/projectSlice';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate, useParams } from 'react-router-dom';
import { projects, projectsProps } from '../../module/projects';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
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

  const detailItems = useCallback(
    (labelKey: string, desKey: string): JSX.Element[] => {
      let itemArr: JSX.Element[] = [];
      itemArr.push(
        <>
          <li className={styles.label}>{projectInfo!.description[labelKey]}</li>
          <li className={styles.description}>
            {projectInfo!.description[desKey]}
          </li>
          <li className={styles.label}>{projectInfo!.function[labelKey]}</li>
          <li className={styles.description}>
            {projectInfo!.function[desKey].split('/').map((v) => (
              <p>{v}</p>
            ))}
          </li>
          <li className={styles.label}>{projectInfo!.problems[labelKey]}</li>
          <li className={styles.description}>
            {projectInfo!.problems[desKey]}
          </li>
          <li className={styles.label}>{projectInfo!.solve[labelKey]}</li>
          <li className={styles.description}>{projectInfo!.solve[desKey]}</li>
          <li className={styles.label}>{projectInfo!.achieve[labelKey]}</li>
          <li className={styles.description}>{projectInfo!.achieve[desKey]}</li>

          {/*클라이언트단 화면 보여주기 */}
          <li className={styles.label}>
            {projectInfo!.clientView[labelKey]}{' '}
            <span className={styles.helper}>*사진에 마우스를 갖다대세요!</span>
          </li>
          <li className={styles.description}>
            <div className={styles.imgContainer}>
              {projectInfo!.clientView[desKey].split(',').map((v) => (
                <img src={v} className={styles.clientView} />
              ))}
            </div>
          </li>
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
          {/* <div className={styles.mainImg}>
            <img src={projectInfo.topImgSrc.description} />
          </div> */}
          <div className={styles.detailWrap}>
            <h1>{projectInfo!.name.description}</h1>
            <div className={styles.descriptionSimple}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className={styles.tableCellHeadStyle}
                      >
                        개발기간 및 유지보수 기간
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <RocketLaunchIcon className={styles.iconStyle} />
                          <p> {projectInfo.launchingDate.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.launchingDate.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <CalendarMonthIcon className={styles.iconStyle} />
                          <p> {projectInfo.date.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.date.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <BugReportIcon className={styles.iconStyle} />
                          <p> {projectInfo.testDate.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.testDate.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <UpgradeIcon className={styles.iconStyle} />
                          <p> {projectInfo.refactoryDate.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.refactoryDate.description
                          .split('/')
                          .map((v) => (
                            <p>{v}</p>
                          ))}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        className={styles.tableCellHeadStyle}
                      >
                        프로젝트 정보
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <AddShoppingCartIcon className={styles.iconStyle} />
                          <p> {projectInfo.launch.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.launch.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <LanguageIcon className={styles.iconStyle} />
                          <p> {projectInfo.language.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.bedgeWrap}>
                          {projectInfo.language.description
                            .split('/')
                            .map((v) => (
                              <p className={styles.bedge}>{v}</p>
                            ))}
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <AutoFixHighIcon className={styles.iconStyle} />
                          <p> {projectInfo.skills.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.bedgeWrap}>
                          {projectInfo.skills.description
                            .split('/')
                            .map((v) => (
                              <p className={styles.bedge}>{v}</p>
                            ))}
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <ConstructionIcon className={styles.iconStyle} />
                          <p> {projectInfo.tool.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.bedgeWrap}>
                          {projectInfo.tool.description.split('/').map((v) => (
                            <p className={styles.bedge}>{v}</p>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <PeopleIcon className={styles.iconStyle} />
                          <p> {projectInfo.people.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.people.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <ManageAccountsIcon className={styles.iconStyle} />
                          <p> {projectInfo.charge.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.bedgeWrap}>
                          {projectInfo.charge.description
                            .split('/')
                            .map((v) => (
                              <p className={styles.bedge}>{v}</p>
                            ))}
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <LinkIcon className={styles.iconStyle} />
                          <p> {projectInfo.link.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        <a
                          href={`${projectInfo.link.description}`}
                          target={'_blank'}
                        >
                          {projectInfo.link.description}
                        </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <GitHubIcon className={styles.iconStyle} />
                          <p> {projectInfo.codeLink.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.codeLink.description}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={styles.tableCellStyle}>
                        <div className={styles.labelWrap}>
                          <MobileFriendlyIcon className={styles.iconStyle} />
                          <p> {projectInfo.responsive.label}</p>
                        </div>
                      </TableCell>
                      <TableCell className={styles.tableCellStyle}>
                        {projectInfo.responsive.description}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
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
