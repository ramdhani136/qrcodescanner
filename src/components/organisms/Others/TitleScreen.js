import React, {memo} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const TitleScreen = ({
  title,
  img,
  search,
  qrcode,
  barcodeScreen,
  btnSubmit,
  onSubmit,
  handleSearch,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 20,
      }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: 'bold',
          color: '#595a5a',
          marginTop: 1,
        }}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', width: 'auto'}}>
        {search ? (
          <TouchableOpacity style={{width: 25, height: 25, marginRight: 10}}>
            <MaterialIcons
              name="search"
              backgroundColor="black"
              style={{fontSize: 25, color: '#595a5a'}}
            />
          </TouchableOpacity>
        ) : null}
        {qrcode ? (
          <TouchableOpacity
            style={{width: 25, height: 25}}
            onPress={() =>
              navigation.navigate('ScanQRScreen', {
                barcodeScreen: barcodeScreen,
              })
            }>
            <Icon
              name="qr-code-scanner"
              backgroundColor="black"
              style={{fontSize: 25, color: '#595a5a'}}
            />
          </TouchableOpacity>
        ) : null}
        {btnSubmit ? (
          <TouchableOpacity
            onPress={onSubmit}
            style={{
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 6,
              borderRadius: 3,
              marginTop: -4,
              backgroundColor: '#428f89',
              borderColor: '#3b807b',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              Save
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default memo(TitleScreen);
