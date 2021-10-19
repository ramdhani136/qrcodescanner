import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeature = ({img, title}) => {
  return (
    <View
      style={{
        width: `${100 / 4}%`,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: '#EfEFEF',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default MainFeature;
