import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchBar = () => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row', marginTop: 10}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            paddingRight: 14,
            backgroundColor: 'white',
            marginRight: 15,
          }}
        />
        <Image
          style={{position: 'absolute', top: 7, left: 12}}
          source={require('../../../assets/icon/search.png')}
        />
      </View>
      <View
        style={{
          width: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchBar;
