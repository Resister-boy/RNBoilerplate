import { ModalType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

export interface IModalState {
  modal: ModalType | undefined;
  visibility: boolean;
}

const initialState: IModalState = { modal: undefined, visibility: false };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OPEN_MODAL: (state, action) => {
      const { modal } = action.payload;
      state.modal = modal;
      state.visibility = true;
    },
    CLOSE_MODAL: (state) => {
      state.modal = undefined;
      state.visibility = false;
    },
    CHANGE_MODAL: (state, action) => {
      const { modal } = action.payload;
      state.modal = modal;
    },
    HIDE_MODAL: (state) => {
      state.visibility = false;
    },
    SHOW_MODAL: (state) => {
      state.visibility = true;
    },
  },
});

export const { OPEN_MODAL, CLOSE_MODAL, CHANGE_MODAL, HIDE_MODAL, SHOW_MODAL } =
  modalSlice.actions;

export const getModal = (state: RootState) => state.modal.modal;
export const getVisibility = (state: RootState) => state.modal.visibility;
export const getModalState = (state: RootState) => state.modal;

export default modalSlice.reducer;
