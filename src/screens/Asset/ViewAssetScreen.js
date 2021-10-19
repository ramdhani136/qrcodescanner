import React, {useContext, createContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainMenu} from '../../components/organisms';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CreateAssetScreen from './CreateAssetScreen';

const ViewAssetScreen = ({route}) => {
  const Tab = createMaterialTopTabNavigator();
  const doc = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <NetworkContext.Provider value={doc}>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 17,
                color: 'white',
                fontWeight: '700',
                textTransform: 'capitalize',
              },
              tabBarIndicatorStyle: {backgroundColor: '#ffba03'},
              upperCaseLabel: false,
              tabBarStyle: {
                backgroundColor: '#428f89',
                elevation: 0,
                shadowOpacity: 0,
                height: 50,
              },
            }}>
            <Tab.Screen
              name="Details"
              component={InfoItem}
              options={{
                tabBarLabel: 'Details',
              }}
            />

            <Tab.Screen
              name="TroubleShoot"
              component={History}
              options={{tabBarLabel: 'Maintenance'}}
            />
          </Tab.Navigator>
        </NetworkContext.Provider>
      </View>

      <MainMenu active="Assets" />
    </View>
  );
};

const InfoItem = () => {
  const network = useContext(NetworkContext);
  return (
    <>
      <CreateAssetScreen data={network} />
    </>
  );
};
const Mutasi = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Transfer</Text>
    </View>
  );
};
const History = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Maintence</Text>
    </View>
  );
};

export default ViewAssetScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, paddingHorizontal: 16},
});
export const NetworkContext = createContext(null);
