import React from 'react';
import {View, Text} from 'react-native';

const NewsDetailScreen = ({route}) => {
  return (
    <View>
      <Text>Barcode : {route.params.barcode}</Text>
      <Text>id : {route.params.id}</Text>
      <Text>judul : {route.params.judul}</Text>
    </View>
  );
};

export default NewsDetailScreen;
