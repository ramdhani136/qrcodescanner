import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../atoms';

const HomeInformation = () => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View
        style={{
          height: 15,
          width: 55,
        }}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 17,
          color: '#1C1C1C',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete your profile
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../../../assets/dummy/facebook-connect.png')} />
        <View style={{marginLeft: 16, flex: 1, marginBottom: 16}}>
          <Text style={{fontSize: 15, color: '#4A4A4A', fontWeight: 'bold'}}>
            Connect with Facebook
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '#4A4A4A',
              width: '70%',
            }}>
            Login faster without verification code
          </Text>
        </View>
      </View>
      <Button label="CONNECT" alignSelf="flex-end" />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#E8E9ED',
          marginTop: 16,
        }}></View>
    </View>
  );
};

export default HomeInformation;
