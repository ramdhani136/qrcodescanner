import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {SelectDropdown} from '../../moleculs';
import Entypo from 'react-native-vector-icons/Entypo';
import {Api_Url} from '../../../config/services';
import {useDispatch} from 'react-redux';
import {getValue, selectValue} from '../../../config/redux/slices/valueSlice';
import {useSelector} from 'react-redux';
import {filter} from 'lodash';

const AssetsFilter = ({toggleFilter, handleFilter}) => {
  const dispatch = useDispatch();
  const [uoms, setUoms] = useState([]);
  const [category, setCategory] = useState([]);
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  const defaultModal = {
    category: false,
    uom: false,
    location: false,
    user: false,
    condition: false,
  };
  const [toggleModal, setToggleModal] = useState(defaultModal);
  const [filterValue, setFilterValue] = useState({});

  const getUoms = async () => {
    try {
      const api = Api_Url + 'uom';
      const resultUom = await fetch(api);
      const getUom = await resultUom.json();
      setUoms(getUom.data);
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      } else {
        throw error;
      }
    }
  };

  const getCategorys = async () => {
    try {
      const api = Api_Url + 'categorys';
      const resultCategory = await fetch(api);
      const getCategory = await resultCategory.json();
      setCategory(getCategory.data);
    } catch (error) {
      throw error;
    }
  };

  const getLocations = async () => {
    try {
      const api = Api_Url + 'locations';
      const resultLocation = await fetch(api);
      const getLocation = await resultLocation.json();
      setLocations(getLocation.data);
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      } else {
        throw error;
      }
    }
  };

  const getUsers = async () => {
    try {
      const api = Api_Url + 'users';
      const resultUsers = await fetch(api);
      const getUser = await resultUsers.json();
      setUsers(getUser);
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      } else {
        throw error;
      }
    }
  };
  const publiValue = useSelector(selectValue);

  const handleUom = e => {
    setFilterValue({...filterValue, uom: e.name});
  };

  const handleCategory = e => {
    setFilterValue({...filterValue, category: e.name});
  };

  const handleLocation = e => {
    setFilterValue({...filterValue, location: e.name});
  };

  const handleUser = e => {
    setFilterValue({...filterValue, user: e.name});
  };

  const handleCondition = e => {
    setFilterValue({...filterValue, condition: e.name});
  };

  const condition = [
    {id: 1, name: 'Good'},
    {id: 2, name: 'Bad'},
  ];

  useEffect(() => {
    getCategorys();
    getUoms();
    getLocations();
    getUsers();
    dispatch(
      getValue({
        ...publiValue.value,
        uom: filterValue.uom,
        category: filterValue.category,
        location: filterValue.location,
        user: filterValue.user,
        condition: filterValue.condition,
      }),
    );
  }, [filterValue]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={toggleFilter}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: 'bold',
                color: '#595a5a',
                marginLeft: 20,
              }}>
              Filter Data
            </Text>
            <TouchableOpacity
              onPress={handleFilter}
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo name="cross" style={{fontSize: 30, color: '#ccc'}} />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{
              paddingHorizontal: 20,
              height: '80%',
            }}>
            <SelectDropdown
              value={filterValue.category}
              editable={true}
              label="Category"
              visible={toggleModal.category}
              onOpen={() => {
                setToggleModal({
                  category: true,
                  uom: false,
                  location: false,
                  user: false,
                  condition: false,
                });
              }}
              onClose={() => setToggleModal(defaultModal)}
              data={category}
              handle={handleCategory}
              valueShow="Category"
            />
            <SelectDropdown
              value={filterValue.uom}
              editable={true}
              label="Uom"
              visible={toggleModal.uom}
              onOpen={() => {
                setToggleModal({
                  category: false,
                  uom: true,
                  location: false,
                  user: false,
                  condition: false,
                });
              }}
              onClose={() => setToggleModal(defaultModal)}
              data={uoms}
              handle={handleUom}
              valueShow="Uom"
            />
            <SelectDropdown
              value={filterValue.location}
              editable={true}
              label="Location"
              visible={toggleModal.location}
              onOpen={() => {
                setToggleModal({
                  category: false,
                  uom: false,
                  location: true,
                  user: false,
                  condition: false,
                });
              }}
              onClose={() => setToggleModal(defaultModal)}
              data={locations}
              handle={handleLocation}
              valueShow="Uom"
            />
            <SelectDropdown
              value={filterValue.user}
              editable={true}
              label="PIC"
              visible={toggleModal.user}
              onOpen={() => {
                setToggleModal({
                  category: false,
                  uom: false,
                  location: false,
                  user: true,
                  condition: false,
                });
              }}
              onClose={() => setToggleModal(defaultModal)}
              data={users}
              handle={handleUser}
              valueShow="User"
            />
            <SelectDropdown
              value={filterValue.condition}
              editable={true}
              label="Condition"
              visible={toggleModal.condition}
              onOpen={() => {
                setToggleModal({
                  category: false,
                  uom: false,
                  location: false,
                  user: false,
                  condition: true,
                });
              }}
              onClose={() => setToggleModal(defaultModal)}
              data={condition}
              handle={handleCondition}
              valueShow="Condition"
            />
          </ScrollView>
          <TouchableOpacity
            onPress={handleFilter}
            style={{
              marginVertical: 10,
              borderWidth: 1,
              marginHorizontal: 20,
              borderColor: '#3b807b',
              padding: 13,
              borderRadius: 3,
              backgroundColor: '#428f89',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: 16,
              }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default AssetsFilter;

const styles = StyleSheet.create({});
