import React from 'react';
import {View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {GopayFeature} from '../../moleculs';

const Gopay = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 17, marginTop: 8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#2C5FB8',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          padding: 14,
        }}>
        <Image source={require('../../../assets/icon/gopay.png')} />
        <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
          Rp.52.330.000
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 14,
          backgroundColor: '#2F65BD',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}>
        <GopayFeature
          onPress={() => navigation.navigate('ScanQRScreen')}
          img={require('../../../assets/icon/pay.png')}
          title="Pay"
        />

        <GopayFeature
          onPress={() => navigation.navigate('ItemScreen')}
          img={require('../../../assets/icon/nearby.png')}
          title="Nearby"
        />

        <GopayFeature
          img={require('../../../assets/icon/topup.png')}
          title="Top Up"
        />

        <GopayFeature
          img={require('../../../assets/icon/more.png')}
          title="More"
        />
      </View>
    </View>
  );
};

export default Gopay;
