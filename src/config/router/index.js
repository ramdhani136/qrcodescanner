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
  CategoriesScreen,
  CreateCategorieScreen,
  LocationScreen,
  CreateLocationScreen,
  UomScreen,
  CreateUomScreen,
} from '../../screens';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
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
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateCategoriesScreen"
          component={CreateCategorieScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateLocationScreen"
          component={CreateLocationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UomScreen"
          component={UomScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateUomScreen"
          component={CreateUomScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
