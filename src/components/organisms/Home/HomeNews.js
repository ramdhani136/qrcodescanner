import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../atoms';

const HomeNews = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/sepak-bola.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#1C1C1C'}}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7A7A7A',
            marginBottom: 11,
          }}>
          Dimas drajat selamatkan penalti, Timans U-23 kalahkan Brunei
        </Text>
        <Button
          label="READ"
          alignSelf="flex-end"
          onPress={() =>
            navigation.navigate('NewsDetailScreen', {
              id: 16,
              judul:
                ' Dimas drajat selamatkan penalti, Timans U-23 kalahkan Brunei',
            })
          }
        />
      </View>
    </View>
  );
};

export default HomeNews;
