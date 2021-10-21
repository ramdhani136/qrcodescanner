import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../../config/redux/slices/UserSlices';
import {Alert, View, Text} from 'react-native';
import {List, MainMenu, TitleScreen} from '../../components/organisms';
import {Api_Url} from '../../config/services';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {selectValue} from '../../config/redux/slices/valueSlice';

const CategoriesScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [filter, setFilter] = useState({});
  const [toggleFilter, setToggleFilter] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const publicFilter = useSelector(selectValue);
  const [isReload, setIsReload] = useState(false);

  const getCategorys = () => {
    setIsloading(true);
    fetch(`${Api_Url}categorys`)
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

  useEffect(() => {
    getCategorys();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getCategorys();
    }, 30000);

    if (!isReload) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isReload]);

  const handleSearch = e => {
    setFilter({...filter, search: e});
  };

  const toggleReload = e => {
    setIsReload(e);
  };

  const getDelete = async e => {
    const hapus = await fetch(`${Api_Url}categorys/${e}`, {
      method: 'DELETE',
    });
    const refreshItem = await getCategorys();
    return refreshItem;
  };

  const handleDelete = e => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getCategorys(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete(e)},
    ]);
  };

  const handleFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  const handleSubmit = () => {
    navigation.navigate('CreateCategoriesScreen');
  };

  const filterdata = data => {
    return _.filter(data, function (query) {
      var name = filter.search
          ? query.name.toLowerCase().includes(filter.search.toLowerCase())
          : true,
        description = filter.search
          ? query.description
              .toLowerCase()
              .includes(filter.search.toLowerCase())
          : true,
        status = filter.search
          ? query.status.toLowerCase().includes(filter.search.toLowerCase())
          : true;

      return name || description || status;
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={{flex: 1}}>
        <TitleScreen title="Categories" search={true} qrcode={false} />
        <List
          isLoading={isLoading}
          handleFilter={handleFilter}
          data={{
            api: filterdata(data),
            viewScreen: 'ViewAssetScreen',
          }}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleData={getCategorys}
          toggleReload={toggleReload}
        />
      </View>
      <MainMenu />
    </View>
  );
};

export default CategoriesScreen;
