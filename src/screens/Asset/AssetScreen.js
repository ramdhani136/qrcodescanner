import React, {useEffect, useState, memo} from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../../config/redux/slices/UserSlices';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {List, MainMenu, TitleScreen} from '../../components/organisms';
import {Api_Url} from '../../config/services';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {selectValue} from '../../config/redux/slices/valueSlice';

const AssetScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [filter, setFilter] = useState({});
  const [toggleFilter, setToggleFilter] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const publicFilter = useSelector(selectValue);
  const [isReload, setIsReload] = useState(false);

  const getItem = () => {
    setIsloading(true);
    fetch(`${Api_Url}items`)
      .then(res => {
        res.json().then(json => {
          setData(json.data);
          setIsloading(false);
        });
      })
      .catch(err => {
        throw err;
      });
  };

  const getDelete = async e => {
    const hapus = await fetch(`${Api_Url}items/${e}`, {
      method: 'DELETE',
    });
    const refreshItem = await getItem();
    return refreshItem;
  };

  const handleDelete = e => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getItem(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete(e)},
    ]);
  };

  const handleFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  const handleSubmit = () => {
    navigation.navigate('CreateAssetScreen');
  };

  const user = useSelector(selectUser);

  const handleSearch = e => {
    setFilter({...filter, search: e});
  };

  const toggleReload = e => {
    setIsReload(e);
  };

  const filterdata = data => {
    return _.filter(data, function (query) {
      var name = filter.search
          ? query.name.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        code = filter.search
          ? query.code.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        // serialnumber = filter.search
        //   ? query.serialnumber
        //       .toLowerCase()
        //       .includes(filter.search.toLowerCase())
        //   : true,
        locationval = filter.search
          ? query.location.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        userval = filter.search
          ? query.user.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        categoryval = filter.search
          ? query.category.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        // type = filter.search
        //   ? query.type.toLowerCase().includes(filter.search.toLowerCase())
        //   : true,
        status = filter.search
          ? query.status.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        uom = publicFilter.value.uom
          ? query.uom
              .toLowerCase()
              .includes(publicFilter.value.uom.toLowerCase())
          : true,
        category = publicFilter.value.category
          ? query.category
              .toLowerCase()
              .includes(publicFilter.value.category.toLowerCase())
          : true,
        location = publicFilter.value.location
          ? query.location
              .toLowerCase()
              .includes(publicFilter.value.location.toLowerCase())
          : true,
        user = publicFilter.value.user
          ? query.user
              .toLowerCase()
              .includes(publicFilter.value.user.toLowerCase())
          : true,
        condition = publicFilter.value.condition
          ? query.status
              .toLowerCase()
              .includes(publicFilter.value.condition.toLowerCase())
          : true;

      return (
        uom &&
        category &&
        location &&
        user &&
        condition &&
        (name || code || locationval || status || userval || categoryval)
      );
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getItem();
    }, 30000);

    if (!isReload) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isReload]);

  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={{flex: 1}}>
        <TitleScreen
          title="Assets"
          search={true}
          qrcode={true}
          barcodeScreen="assets"
        />
        <List
          isLoading={isLoading}
          handleFilter={handleFilter}
          toggleFilter={toggleFilter}
          data={{
            api: filterdata(data),
            viewScreen: 'ViewAssetScreen',
          }}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleData={getItem}
          doc="Assets"
          toggleReload={toggleReload}
        />
      </View>

      <MainMenu active="Assets" />
    </View>
  );
};

export default AssetScreen;
