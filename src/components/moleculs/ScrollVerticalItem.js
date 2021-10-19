import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ScrollVerticalItem = ({
  Icon,
  IconName,
  qty,
  title,
  bg,
  qtyColor,
  titleColor,
  onPress,
  IconBg,
  IconSize,
  IconColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 156,
        height: 140,
        marginRight: 16,
        borderRadius: 12,
        backgroundColor: bg,
        alignItems: 'flex-start',
        paddingLeft: 26,
      }}>
      <View
        style={{
          height: 30,
          width: 30,
          marginTop: 25,
        }}>
        {Icon ? (
          <Icon
            name={IconName}
            backgroundColor={IconBg}
            style={{fontSize: IconSize, color: IconColor}}
          />
        ) : null}
      </View>
      <Text style={{fontSize: 19, fontWeight: '700', color: qtyColor}}>
        {qty}
      </Text>
      <Text style={{fontSize: 16, color: titleColor, width: 120}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ScrollVerticalItem;
