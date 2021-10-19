import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';
import {Api_Url} from '../../../config/services';

const MainMenu = ({active, barcodeScreen}) => {
  const navigation = useNavigation();

  const getLogout = async () => {
    const data = await fetch(`${Api_Url}logout`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });

    const redirect = navigation.replace('LoginScreen');
    return redirect;
  };
  return (
    <View
      style={{
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'whitesmoke',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreenNew')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name="home-outline"
          backgroundColor="#cdcdcd"
          style={{
            fontSize: 25,
            color: active === 'Home' ? '#666' : '#adadad',
            marginBottom: -4,
          }}
        />
        <Text
          style={{fontSize: 12, color: active === 'Home' ? '#666' : '#adadad'}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('AssetScreen')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome5
          name="list"
          backgroundColor="#cdcdcd"
          style={{
            fontSize: 20,
            color: active === 'Assets' ? '#666' : '#adadad',
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: active === 'Assets' ? '#666' : '#adadad',
          }}>
          Assets
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign
          name="shrink"
          backgroundColor="#cdcdcd"
          style={{
            fontSize: 20,
            color: active === 'Request' ? '#666' : '#adadad',
            marginTop: 1,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: active === 'Request' ? '#666' : '#adadad',
          }}>
          Request
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Foundation
          name="clipboard-notes"
          backgroundColor="#cdcdcd"
          style={{
            fontSize: 22,
            color: active === 'Inventory' ? '#666' : '#adadad',
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: active === 'Inventory' ? '#666' : '#adadad',
          }}>
          Inventory
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={getLogout}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SimpleLineIcons
          name="user"
          backgroundColor="#cdcdcd"
          style={{
            fontSize: 20,
            color: active === 'Account' ? '#666' : '#adadad',
          }}
        />
        <Text
          style={{
            fontSize: 12,
            color: active === 'Account' ? '#666' : '#adadad',
          }}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(MainMenu);
