import { createSlice} from '@reduxjs/toolkit';
import { RootState } from './store';

type Modes = 'light'|'dark';

type InitialStateType = {
    mode: Modes,
}
const initialState: InitialStateType = {
   mode:'light'
}

const themeSlice = createSlice({
    initialState,
    name:'theme',
    reducers:{
       toggleMode: (state, action)=>{
         state.mode = state.mode === 'dark' ? 'light':'dark';
       }
    } 
});

export const {reducer : themeReducer} = themeSlice;
export const {toggleMode} = themeSlice.actions;

export const selectThemeMode = (state: RootState)=> state.theme.mode;