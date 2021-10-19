import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScanQRScreen from '../../screens/ScanQRScreen';
import NewsDetailScreen from '../../screens/News/NewsDetailScreen';
import {
  AssetScreen,
  CreateAssetScreen,
  HomeScreenNew,
  LoginScreen,
  ViewAssetScreen,
} from '../../screens';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}options={{title: 'Lets Login'}}
        />
        <Stack.Screen
          name="HomeScreenNew"
          component={HomeScreenNew}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScanQRScreen"
          component={ScanQRScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewsDetailScreen"
          component={NewsDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AssetScreen"
          component={AssetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewAssetScreen"
          component={ViewAssetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAssetScreen"
          component={CreateAssetScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
