import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import AssetsFilter from '../organisms/Items/AssetsFilter';

const PanelList = ({handleSearch, toggleFilter, handleFilter, doc}) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    handleSearch(value);
  }, [value]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={handleFilter}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -20,
          }}>
          <MaterialCommunityIcons
            name="filter-variant"
            style={{fontSize: 30, color: '#595a5a'}}
          />
        </TouchableOpacity>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Search your data "
          style={{
            marginTop: -20,
            color: 'gray',
            fontSize: 15,
            borderColor: '#e7e7e7',
            borderWidth: 1,
            padding: 0,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 10,
            backgroundColor: 'white',
            flex: 1,
            marginLeft: 10,
          }}
        />
        {value ? (
          <TouchableOpacity
            onPress={() => setValue('')}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              right: 10,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="cross" style={{fontSize: 25, color: 'whitesmoke'}} />
          </TouchableOpacity>
        ) : null}
      </View>
      {doc === 'Assets' ? (
        <AssetsFilter toggleFilter={toggleFilter} handleFilter={handleFilter} />
      ) : null}
    </View>
  );
};

export default PanelList;
