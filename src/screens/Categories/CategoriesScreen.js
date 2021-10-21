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

  const handleSearch = e => {
    setFilter({...filter, search: e});
  };

  const toggleReload = e => {
    setIsReload(e);
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

  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View style={{flex: 1}}>
        <TitleScreen title="Categories" search={true} qrcode={false} />
        <List
          isLoading={isLoading}
          handleFilter={handleFilter}
          toggleFilter={toggleFilter}
          data={{
            api: data,
            viewScreen: 'ViewAssetScreen',
          }}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleData={getCategorys}
          doc="Assets"
          toggleReload={toggleReload}
        />
      </View>
      <MainMenu />
    </View>
  );
};

export default CategoriesScreen;
