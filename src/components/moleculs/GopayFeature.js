import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GopayFeature = ({onPress, title, img}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image source={img} />
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 10,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GopayFeature;
