import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SelectDropdown = ({
  label,
  invalid,
  visible,
  onOpen,
  onClose,
  data,
  handle,
  valueShow,
  value,
  editable,
}) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    if (searchValue) {
      setItems(
        data.filter(
          item =>
            item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1,
        ),
      );
    } else {
      setItems(data);
    }
  }, [data, searchValue]);

  useEffect(() => {
    value ? setInputValue(value) : null;
    value ? setSearchValue(value) : null;
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={editable ? onOpen : null}>
        <TextInput
          value={inputValue}
          editable={false}
          style={[
            styles.textInput,
            {
              borderWidth: 1,
              borderColor: invalid ? '#ffc9c9' : 'whitesmoke',
            },
          ]}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent
        visible={visible}
        transparent={true}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.modal}></TouchableOpacity>
        <View style={styles.contentModal}>
          <TouchableOpacity onPress={onClose}>
            <Entypo
              name="squared-cross"
              style={{
                textAlign: 'center',
                marginVertical: 16,
                color: '#f77b72',
                fontSize: 25,
              }}
            />
          </TouchableOpacity>
          <TextInput
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            style={{
              borderWidth: 1,
              marginHorizontal: 13,
              paddingHorizontal: 16,
              borderRadius: 5,
              borderColor: '#ccc',
              color: '#999',
              fontSize: 16,
              backgroundColor: 'white',
            }}
            placeholder="Search "
          />
          {searchValue ? (
            <TouchableOpacity
              onPress={() => {
                setSearchValue('');
                setInputValue('');
                handle({});
              }}
              style={{
                width: 50,
                position: 'absolute',
                marginTop: 55,
                right: 25,
              }}>
              <Entypo
                name="cross"
                style={{
                  textAlign: 'center',
                  marginVertical: 16,
                  color: '#ccc',
                  fontSize: 25,
                }}
              />
            </TouchableOpacity>
          ) : null}
          {!items ? (
            <Text style={{textAlign: 'center', marginTop: 100, color: '#ccc'}}>
              No data
            </Text>
          ) : null}
          <FlatList
            style={{
              marginHorizontal: 14,
              marginBottom: 30,
              borderColor: '#ccc',
            }}
            keyExtractor={item => item.id}
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  handle(item);
                  onClose();
                  setInputValue(item.name);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: '#eee',
                  padding: 15,
                  marginVertical: 2,
                  borderRadius: 2,
                  backgroundColor: 'whitesmoke',
                }}>
                <Text style={{color: '#999', fontSize: 16}}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              marginBottom: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              padding: 10,
              marginHorizontal: 20,
            }}>
            <FontAwesome5
              name="plus"
              style={{
                textAlign: 'center',
                color: '#ddd',
                fontSize: 14,
                marginRight: 5,
                marginTop: 3,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: '#ccc',
                fontSize: 16,
              }}>
              Create a new value
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  label: {color: '#bdbdbd', fontSize: 15, marginVertical: 5},
  textInput: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 16.5,
    color: '#191919',
    paddingLeft: 13,
  },
  container: {flex: 1, marginBottom: 20},
  modal: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
  },
  contentModal: {
    width: '94%',
    height: '94%',
    backgroundColor: 'white',
    zIndex: 800000,
    position: 'absolute',
    top: 16,
    left: 11,
    borderRadius: 3,
  },
});
