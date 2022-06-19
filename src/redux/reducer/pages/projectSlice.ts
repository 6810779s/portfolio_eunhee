import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { projects, projectsProps } from '../../../module/projects';

interface projectStateProps {
  currentProjectNum: number;
  projectInfo: projectsProps | null;
  back: boolean;
}
const initialState: projectStateProps = {
  currentProjectNum: 0,
  projectInfo: null,
  back: false,
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    projectDetail: (state, action: PayloadAction<number>) => {
      const idx = projects.findIndex((v) => v.num === action.payload);
      state.projectInfo = projects[idx];
      state.currentProjectNum = action.payload;
    },
    backAction: (state, action: PayloadAction<boolean>) => {
      state.back = action.payload;
    },
  },
});

export const { projectDetail, backAction } = projectSlice.actions;
export default projectSlice.reducer;
