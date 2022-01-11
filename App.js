import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "react-native-gesture-handler";
import Settings from './screens/settings';
import Home_Today from './screens/home_today';
import Home_Tomorrow from './screens/home_tomorrow';
import landingScreen from './screens/landingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import About from './screens/about'
import Information from './screens/information'

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

export default function App() {

  const globalScreenOptions = {
    headerStyle: {
      // backgroundColor: '#266E73'   dunkel-pastelartig
      backgroundColor: '#328695'  // heller
    },
    headerTitleStyle: { color: 'white' },
    headerTintStyle: 'white',
    headerTintColor: 'white'
  }
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name='Home' component={stackNav} options={{
          headerShown: false,
        }} />
        <stack.Screen name='Home_Today' component={Home_Today} options={{
          headerShown: false,
        }} />
        <stack.Screen name='Settings' component={Settings} />
        <stack.Screen name='Landing' component={landingScreen} options={{
          headerShown: false,
          gestureEnabled: false,
        }} />
        <stack.Screen name='About' component={About} />
        <stack.Screen name='Information' component={Information} options={{
          title: "Mehr Informationen..."
        }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const stackNav = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        fontWeight: "700",
        fontSize: 15
      },
      tabBarIconStyle: { display: "none" },
    }}
      options={{ headerShown: false }}>
      <Tab.Screen name="Heute" component={Home_Today} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="Morgen" component={Home_Tomorrow} options={{
        headerShown: false,
      }} />
    </Tab.Navigator >
  );
};
/*
      <stack.Navigator initialRouteName="Home_Today">
        <stack.Screen name='Home_Today' component={Home_Today} options={{
          headerShown: false,
        }} />
        <stack.Screen name='Settings' component={Settings} />
      </stack.Navigator>
*/