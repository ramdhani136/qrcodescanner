import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {List, MainMenu, TitleScreen} from '../../components/organisms';
import {Api_Url} from '../../config/services';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import axios from 'axios';

const UomScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [filter, setFilter] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const getUom = () => {
    setIsloading(true);
    axios
      .get(`${Api_Url}uom`)
      .then(res => {
        setData(res.data.data);
        setIsloading(false);
      })
      .catch(err => {
        throw err;
      });
  };

  useEffect(() => {
    getUom();
  }, []);

  const handleSearch = e => {
    setFilter({...filter, search: e});
  };

  const getDelete = e => {
    axios
      .delete(`${Api_Url}uom/${e}`)
      .then(res => {
        Alert.alert('Deleted', 'Data success to delete');
        getUom();
      })
      .catch(err => {
        Alert.alert('Error', 'Cannot delete this Location!');
      });
  };

  const handleDelete = e => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getUom(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete(e)},
    ]);
  };

  const handleSubmit = () => {
    navigation.navigate('CreateUomScreen');
  };

  const filterdata = data => {
    return _.filter(data, function (query) {
      var name = filter.search
          ? query.name.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        status = filter.search
          ? query.status.toLowerCase().includes(filter.search.toLowerCase())
          : true;

      return name || status;
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={{flex: 1}}>
        <TitleScreen title="Categories" search={true} qrcode={false} />
        <List
          isFilter={false}
          isLoading={isLoading}
          data={{
            api: filterdata(data),
            viewScreen: 'CreateUomScreen',
          }}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleData={getUom}
          doc="Uom"
        />
      </View>
      <MainMenu />
    </View>
  );
};

export default UomScreen;
