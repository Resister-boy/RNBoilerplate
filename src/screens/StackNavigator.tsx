import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from '@/types/routes';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from 'App';
import { useCallback, useEffect } from 'react';
import { SET_THEME } from '@/redux/slice/appSlice';
import { getAuthState } from '@/redux/slice/authSlice';
import { ROUTES } from '@/constant/routes';
import ErrorScreen from '@/screens/screen/ErrorScreen';
import { getError } from '@/redux/slice/errorSlice';
import LoadingScreen from '@/screens/screen/LoadingScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const theme = storage.getString('theme');
  const { isError, code } = useSelector(getError);
  const { isSignIn, isSigningIn, isSigningUp } = useSelector(getAuthState);

  const renderScreen = useCallback(() => {
    if (isError) {
      return (
        <Stack.Screen
          name={ROUTES.SCREEN.ERROR}
          component={ErrorScreen}
        />
      )
    }
    if (!isSignIn && isSigningIn && isSigningUp) {
      return (
        <Stack.Screen
          name={ROUTES.SCREEN.LOADING}
          component={LoadingScreen}
        />
      );
    } else if (!isSignIn && !isSigningIn && !isSigningUp) {
    } else {}
  }, [isSignIn, isSigningIn, isSigningUp]);


  useEffect(() => {
    if (theme !== undefined) {
      dispatch(
        SET_THEME({
          theme: theme,
        }),
      );
    }
  }, [theme]);

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'none',
        headerShown: false,
      }}
    >
      {renderScreen()}
    </Stack.Navigator>
  );
};

export default StackNavigator;
