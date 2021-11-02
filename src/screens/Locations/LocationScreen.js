import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {List, MainMenu, TitleScreen} from '../../components/organisms';
import {Api_Url} from '../../config/services';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import axios from 'axios';

const LocationScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [filter, setFilter] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const getLocations = () => {
    setIsloading(true);
    axios
      .get(`${Api_Url}locations`)
      .then(res => {
        setData(res.data.data);
        setIsloading(false);
      })
      .catch(err => {
        throw err;
      });
  };

  useEffect(() => {
    getLocations();
  }, []);

  const handleSearch = e => {
    setFilter({...filter, search: e});
  };

  const getDelete = e => {
    axios
      .delete(`${Api_Url}locations/${e}`)
      .then(res => {
        Alert.alert('Deleted', 'Data success to delete');
        getLocations();
      })
      .catch(err => {
        Alert.alert('Error', 'Cannot delete this Location!');
      });
  };

  const handleDelete = e => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getLocations(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete(e)},
    ]);
  };

  const handleSubmit = () => {
    navigation.navigate('CreateLocationScreen');
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
            viewScreen: 'CreateLocationScreen',
          }}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleData={getLocations}
          doc="Category"
        />
      </View>
      <MainMenu />
    </View>
  );
};

export default LocationScreen;
