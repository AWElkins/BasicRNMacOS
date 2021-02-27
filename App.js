import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import Home from './src/screens/dashboard/home';
import Page1 from './src/screens/dashboard/page1';
import Page2 from './src/screens/dashboard/page2';
import Page3 from './src/screens/dashboard/page3';
import Page4 from './src/screens/dashboard/page4';
import {setAppScreen} from './src/redux/actions/navigator';

const Stack = createStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Page4" component={Page4} />
    </Stack.Navigator>
  );
}

function App() {
  const dispatch = useDispatch();
  const navigationRef = useRef();
  const routeNameRef = useRef();

  console.disableYellowBox = true;

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          const obj = {
            previousRouteName,
            currentRouteName,
          };
          dispatch(setAppScreen(obj));
        }

        routeNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
