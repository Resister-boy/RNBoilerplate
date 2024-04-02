import { useCallback, useEffect, useRef, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NavigationContainer, NavigationContainerRef, Route } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from '@/redux/store';
import StackNavigator from '@/screens/StackNavigator';
import { MMKV } from 'react-native-mmkv';
import { firebase } from '@react-native-firebase/analytics';
import { StackParamList } from '@/types/routes';
import analytics from '@react-native-firebase/analytics';

export const storage = new MMKV();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
    mutations: { retry: 1 },
  },
});

GoogleSignin.configure({
  webClientId: "",
  iosClientId: ""
});

export default function App() {
  const navigationRef = useRef<NavigationContainerRef<StackParamList> | null>(null);
  const [routeNameRef, setRefNameRef] = useState<Route<string> | undefined>(undefined)

  const handleSetRoute = useCallback(async () => {
    const current = navigationRef.current?.getCurrentRoute();
    const previousRoute = routeNameRef?.name;

    const currentRoute = navigationRef.current?.getCurrentRoute()?.name;

    if (previousRoute !== currentRoute) {
      await analytics().logScreenView({});
    }
  }, [routeNameRef])



  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

  }, []);


  useEffect(() => {
    const activateAnalytics = async() => {
      await firebase.analytics().setAnalyticsCollectionEnabled(true);
    }
    activateAnalytics();
  }, [])

  return (
    <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        setRefNameRef(navigationRef.current?.getCurrentRoute());
        handleSetRoute();
      }}
      onStateChange={() => {
        handleSetRoute().then(() => {
          setRefNameRef(navigationRef.current?.getCurrentRoute())
        });
      }}
      >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
