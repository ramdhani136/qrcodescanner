import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import {List, MainMenu, TitleScreen} from '../../components/organisms';
import {Api_Url} from '../../config/services';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import axios from 'axios';

const CategoriesScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [filter, setFilter] = useState({});
  const [isLoading, setIsloading] = useState(false);

  // const getCategorys = () => {
  //   setIsloading(true);
  //   fetch(`${Api_Url}categorys`)
  //     .then(res => {
  //       res.json().then(json => {
  //         setData(json.data);
  //         setIsloading(false);
  //       });
  //     })
  //     .catch(err => {
  //       throw err;
  //     });
  // };

  const getCategorys = () => {
    setIsloading(true);
    axios
      .get(`${Api_Url}categorys`)
      .then(res => {
        setData(res.data.data);
        setIsloading(false);
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

  const getDelete = e => {
    axios
      .delete(`${Api_Url}categorys/${e}`)
      .then(res => {
        Alert.alert('Deleted', 'Data success to delete');
        getCategorys();
      })
      .catch(err => {
        Alert.alert('Error', 'Cannot delete this category!');
      });
  };

  const handleDelete = e => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getCategorys(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete(e)},
    ]);
  };

  const handleSubmit = () => {
    navigation.navigate('CreateCategoriesScreen');
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
            viewScreen: 'CreateCategoriesScreen',
          }}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          handleData={getCategorys}
          doc="Category"
        />
      </View>
      <MainMenu />
    </View>
  );
};

export default CategoriesScreen;
