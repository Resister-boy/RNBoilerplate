import { ROUTES } from '@/constant/routes';
import { StackCodeParams } from '@/types';

export type StackParamList = {
  // Screen
  [ROUTES.SCREEN.HOME]: undefined,
  [ROUTES.SCREEN.LOADING]: StackCodeParams,
  [ROUTES.SCREEN.ERROR]: StackCodeParams,

  // Modal
  [ROUTES.MODAL.ERROR]: StackCodeParams,
  [ROUTES.MODAL.LOADING]: StackCodeParams
};
