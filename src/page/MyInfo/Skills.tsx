import React from 'react';
import MyInfoLayout from '../../common/MyInfoLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { level, skill, tools } from '../../module/skills';
import classNames from 'classnames/bind';
import styles from '../../styles/page/MyInfo.module.scss';
import { width } from '@mui/system';

const cx = classNames.bind(styles);
const Skills = () => {
  const tableHeader = (): JSX.Element[] => {
    let headArr: JSX.Element[] = [];
    level.map((v) =>
      headArr.push(
        <TableCell align="center" key={v} className={styles.tableCellStyle}>
          <WorkspacePremiumIcon
            className={cx(
              { gold: v === '익숙함' },
              { silver: v === '익숙해지는 중' },
              { bronze: v === '노력중' }
            )}
          />
          {v}
        </TableCell>
      )
    );
    return headArr;
  };

  const tableBodySkills = (): JSX.Element[] => {
    //이부분 커스텀 훅으로 만들기
    let bodyArr: JSX.Element[] = [];
    skill.map((v) =>
      bodyArr.push(
        <TableCell
          key={v.level}
          align="center"
          className={styles.tableCellStyle}
        >
          {v.skills.map((v) => (
            <span className={styles.skillBedge}>
              <img src={`logoImg/${v}.png`} className={styles.logoImg} />
              {v}
            </span>
          ))}
          {/* <img src={`/logoImg`}/>{v.skills.join(', ')} */}
        </TableCell>
      )
    );
    return bodyArr;
  };

  const tableBodyTools = (): JSX.Element[] => {
    let bodyArr: JSX.Element[] = [];
    tools.map((v) =>
      bodyArr.push(
        <TableCell align="center" colSpan={3} className={styles.tableCellStyle}>
          {v.skills.map((v) => (
            <span className={styles.skillBedge}>
              {/* <img src={`logoImg/${v}.png`} className={styles.logoImg} /> */}
              {v}
            </span>
          ))}
        </TableCell>
      )
    );
    return bodyArr;
  };

  return (
    <MyInfoLayout>
      <TableContainer className={styles.skillTable}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                className={styles.tableCellStyle}
              ></TableCell>
              {tableHeader()}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" className={styles.tableCellTitleStyle}>
                스킬
              </TableCell>
              {tableBodySkills()}
            </TableRow>
            <TableRow>
              <TableCell align="center" className={styles.tableCellTitleStyle}>
                툴
              </TableCell>
              {tableBodyTools()}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </MyInfoLayout>
  );
};

export default Skills;
