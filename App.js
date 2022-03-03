import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import "react-native-gesture-handler";
import Settings from './screens/settings';
import Home from './screens/home';
import landingScreen from './screens/landingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import About from './screens/about'
import Information from './screens/information'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OmaScreen from './screens/omaSheet';

const { width, height } = Dimensions.get("window");

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
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
        <stack.Screen name='Settings' component={Settings} />
        <stack.Screen name='Landing' component={landingScreen} options={{
          headerShown: false,
          gestureEnabled: false,
        }} />
        <stack.Screen name='About' component={About} />
        <stack.Screen name='OmaScreen' component={OmaScreen} options={{
          headerShown: false,
        }} />
        <stack.Screen name='Information' component={Information} options={{
          title: "Mehr Informationen..."
        }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

function getTabMargin() {
  if (Platform.OS === "ios") return 15;
  else 0;
}

const stackNav = () => {

  return (

    <Tab.Navigator screenOptions={{
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        fontWeight: "700",
        fontSize: 15,
        marginBottom: getTabMargin(),
      },
      tabBarIconStyle: { display: "none" },
      activeTintColor: "orange", // relevent für Top Tab Navigator
    }}
      tabBarPosition="bottom" // relevent für Top Tab Navigator
      options={{ headerShown: false }}
    >
      <Tab.Screen
        name='Heute'
        component={Home}
        initialParams={{ day: "today" }}
        options={{
          headerShown: false,
        }} />
      <Tab.Screen
        name="Morgen"
        component={Home}
        initialParams={{ day: "tomorrow" }}
        options={{
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