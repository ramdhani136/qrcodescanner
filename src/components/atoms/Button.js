import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({label, alignSelf, onPress, size}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#61A756',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: alignSelf,
        borderRadius: 4,
      }}>
      <Text
        style={{
          fontSize: size ? size : 13,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
