import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface IErrorState {
  isError: boolean;
  code: null | number;
}

const initialState: IErrorState = {
  isError: false,
  code: null,
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    SET_ERROR: (state, action) => {
      const { code } = action.payload;

      state.isError = true;
      state.code = code;
    },
    RESOLVE_ERROR: (state) => {
      state.isError = false;
      state.code = null;
    }
  }
})

export const  { SET_ERROR, RESOLVE_ERROR } = errorSlice.actions;

export const getErrorCode = (state: RootState) => state.error.code
export const getError = (state: RootState) => state.error

export default errorSlice.reducer;