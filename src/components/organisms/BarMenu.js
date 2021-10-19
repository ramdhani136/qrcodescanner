import React from 'react';
import {View, Text, Image} from 'react-native';
import {AiFillHome} from 'react-icons/ai';

const BarMenu = () => {
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: 26, height: 26}}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../assets/icon/home-active.png')}
          />
        </View>
        <Text style={{fontSize: 10, color: '#34AB4A', marginTop: 4}}>Home</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 26, height: 26}}
          source={require('../../assets/icon/order.png')}
        />

        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
          Orders
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 26, height: 26}}
          source={require('../../assets/icon/help.png')}
        />
        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 26, height: 26}}
          source={require('../../assets/icon/inbox.png')}
        />

        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
          Inbox
        </Text>
      </View>
      <View
        OnPress={() => alert('tes')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 26, height: 26}}
          source={require('../../assets/icon/account.png')}
        />
        <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
          Account
        </Text>
      </View>
    </View>
  );
};

export default BarMenu;
