import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { Appearance } from 'react-native';

export interface IThemeSlice {
  theme: 'DARK' | 'LIGHT';
  lang: string;
}

const initialState: IThemeSlice = {
  theme: Appearance.getColorScheme() === 'dark' ? 'DARK' : 'LIGHT',
  lang: 'en'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    SET_THEME: (state, action) => {
      const { theme } = action.payload;

      state.theme = theme;
    },
    INIT_THEME: (state) => {
      state.theme = Appearance.getColorScheme() === 'dark' ? 'DARK' : 'LIGHT';
    },
    SET_LANG: (state, action) => {
      const { lang } = action.payload

      state.lang = lang
    },

  },
});

export const { SET_THEME, INIT_THEME, SET_LANG } = themeSlice.actions;

export const getTheme = (state: RootState) => state.app.theme;
export const getLang = (state: RootState) => state.app.lang;

export default themeSlice.reducer;
