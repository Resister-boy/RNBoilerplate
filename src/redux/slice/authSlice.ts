import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

interface IAuthState {
  isSignIn: boolean;
  email: null | string;
  nickname: null | string;
  userID: null | string;
  profile: null | string;
  bio: null | string;
  isSigningIn: boolean;
  isSigningUp: boolean;
}

const initialState: IAuthState = {
  isSignIn: false,
  email: null,
  nickname: null,
  userID: null,
  bio: null,
  profile: null,
  isSigningIn: false,
  isSigningUp: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_SIGNIN: (state, action) => {
      const { email, nickname, userID, bio, profile } = action.payload;

      state.isSignIn = true;
      state.email = email;
      state.nickname = nickname;
      state.bio = bio;
      state.userID = userID;
      state.profile = profile;
    },
    SET_SIGNOUT: (state) => {
      state.isSignIn = false;
      state.email = null;
      state.bio = null;
      state.nickname = null;
      state.userID = null;
      state.profile = null;
    },
    SET_SIGNINGIN: (state, action) => {
      const { isSigningIn } = action.payload;

      state.isSigningIn = isSigningIn;
    },
    SET_SIGNINGUP: (state, action) => {
      const { isSigningUp } = action.payload;

      state.isSigningUp = isSigningUp;
    },
  },
});

export const { SET_SIGNIN, SET_SIGNOUT, SET_SIGNINGIN, SET_SIGNINGUP } =
  authSlice.actions;

export const getSignInState = (state: RootState) => state.auth.isSignIn;
export const getEmailState = (state: RootState) => state.auth.email;
export const getNicknameState = (state: RootState) => state.auth.nickname;
export const getUserIDState = (state: RootState) => state.auth.userID;
export const getBio = (state: RootState) => state.auth.bio;
export const getProfileState = (state: RootState) => state.auth.profile;
export const getIsSignInState = (state: RootState) => state.auth.isSigningIn;
export const getIsSignUpState = (state: RootState) => state.auth.isSigningUp;
export const getAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
