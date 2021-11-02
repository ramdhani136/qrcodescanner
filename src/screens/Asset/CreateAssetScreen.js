import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {FloatingButton, Input} from '../../components/atoms';
import {Api_Url} from '../../config/services';
import {MainMenu, TitleScreen} from './../../components/organisms/';
// import {useSelector} from 'react-redux';
// import {selectUser} from '../../config/redux/slices/UserSlices';
import {SelectDropdown} from '../../components/moleculs';
import {CheckBox} from 'react-native-elements';
import {setNumber} from '../../utils/setNomor';
import {useNavigation} from '@react-navigation/native';

const CreateAssetScreen = ({data}) => {
  const navigation = useNavigation();
  const defaultValue = {
    status: 'Good',
    merk: null,
    type: null,
    serialnumber: null,
    macaddr: null,
    description: null,
  };
  const [value, setValue] = useState(defaultValue);
  const [categorys, setCategorys] = useState([]);
  const [items, setItems] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [locations, setLocations] = useState([]);
  const [refreash, setRefreash] = useState(false);
  const [users, setUsers] = useState([]);
  const [canEdit, setCanEdit] = useState(true);
  const Validate = {
    name: false,
    uom: false,
    category: false,
    location: false,
    pic: false,
  };
  const [validasi, setValidasi] = useState({
    name: true,
    uom: true,
    category: true,
    location: true,
    pic: true,
  });

  const [checked, setChecked] = useState({good: true, bad: false});
  const defaultButton = {
    uom: false,
    category: false,
    location: false,
    pic: false,
  };
  const [modalButton, setModalButton] = useState(defaultButton);

  const handleName = e => {
    setValue({...value, name: e});
    if ((e === '') | (e === undefined)) {
      setValidasi({...validasi, name: true});
    } else {
      setValidasi({...validasi, name: false});
      checkValidate();
    }
  };
  const handleUom = e => {
    setValue({...value, id_uom: e.id});
    if ((e.id === '') | (e.id === undefined)) {
      setValidasi({...validasi, uom: true});
    } else {
      setValidasi({...validasi, uom: false});
      checkValidate();
    }
  };
  const handleMerk = e => {
    if (e === '') {
      e = null;
    }
    setValue({...value, merk: e});
  };
  const handleType = e => {
    if (e === '') {
      e = null;
    }
    setValue({...value, type: e});
  };
  const handleSn = e => {
    if (e === '') {
      e = null;
    }
    setValue({...value, serialnumber: e});
  };
  const handleCategory = e => {
    setValue({...value, id_category: e.id});
    if ((e.id === '') | (e.id === undefined)) {
      setValidasi({...validasi, category: true});
    } else {
      setValidasi({...validasi, category: false});
      checkValidate();
    }
    setRefreash(!refreash);
  };
  const handleLocation = e => {
    setValue({...value, id_location: e.id});
    if ((e.id === '') | (e.id === undefined)) {
      setValidasi({...validasi, location: true});
    } else {
      setValidasi({...validasi, location: false});
      checkValidate();
    }
  };
  const handlePIC = e => {
    setValue({...value, id_user: e.id});
    if ((e.id === '') | (e.id === undefined)) {
      setValidasi({...validasi, pic: true});
    } else {
      setValidasi({...validasi, pic: false});
      checkValidate();
    }
  };
  const handleMA = e => {
    if (e === '') {
      e = null;
    }
    setValue({...value, macaddr: e});
  };

  const handleDesc = e => {
    if (e === '') {
      e = null;
    }
    setValue({...value, description: e});
  };

  const onSubmit = async () => {
    if (checkValidate() === true) {
      const upload = await fetch(`${Api_Url}items`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(value),
      })
        .then(res => {
          Alert.alert('Success', 'Item added successfully');
          navigation.replace('AssetScreen');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      Alert.alert('Error', 'Check your form!');
    }
  };

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
      setCategorys(getCategory.data);
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      } else {
        throw error;
      }
    }
  };

  const getItems = async () => {
    try {
      const api = Api_Url + 'items';
      const resultItems = await fetch(api);
      const getItem = await resultItems.json();
      setItems(getItem.data);
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      } else {
        throw error;
      }
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

  const checkValidate = () => {
    if (
      validasi.name === false &&
      validasi.uom === false &&
      (validasi.category === false) & (validasi.pic === false) &&
      validasi.location === false
    ) {
      return true;
    } else {
      return false;
    }
  };

  const code = () => {
    getItems();
    const filterItem = items.filter(
      item => item.id_category === value.id_category,
    );
    const last = filterItem.length - 1;
    if (filterItem.length > 0) {
      const selectcode = filterItem[last].code;
      const selectNumber = selectcode.substr(selectcode.length - 4);
      const getNumber = setNumber(parseInt(selectNumber) + parseInt(1));
      const newCode = '001' + setNumber(value.id_category) + getNumber;
      setValue({...value, code: newCode});
    } else if (filterItem.length < 1 && value.id_category !== undefined) {
      setValue({
        ...value,
        code: '001' + setNumber(value.id_category) + '0001',
      });
    }
  };

  const getDelete = async e => {
    const hapus = await fetch(`${Api_Url}items/${data.id}`, {
      method: 'DELETE',
    });
    const showAlert = await Alert.alert('Delete', 'Item has been deleted ');
    const redirectScreen = await navigation.replace('AssetScreen');
    return redirectScreen;
  };

  const getEdit = async () => {
    const updateValue = {
      code: value.code,
      name: value.name,
      merk: value.merk,
      type: value.type,
      serialnumber: value.serialnumber,
      id_category: value.id_category,
      id_uom: value.id_uom,
      id_location: value.id_location,
      id_user: value.id_user,
      macaddr: value.macaddr,
      description: value.description,
      status: value.status,
      code_status: value.code_status,
    };
    const edit = await fetch(`${Api_Url}items/${data.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(updateValue),
    });
    const showAlert = await Alert.alert('Changed', 'Item has been changed  ');
    const redirectScreen = await navigation.replace('AssetScreen');
    return redirectScreen;
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getItems(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete()},
    ]);
  };

  const handleChange = () => {
    if (JSON.stringify(data) === JSON.stringify(value)) {
      Alert.alert('Error', 'No data change');
    } else {
      getEdit();
    }
  };

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  };

  useEffect(() => {
    data ? setValue(data) : null;
    getCategorys();
    getItems();
    getLocations();
    getUsers();
    checkValidate();
    getUoms();
    if (data) {
      if (data.id_category !== value.id_category) {
        code();
      }
    } else {
      code();
    }
  }, [refreash]);

  useEffect(() => {
    if (data) {
      setValidasi({
        name: false,
        uom: false,
        category: false,
        location: false,
        pic: false,
      });
      setCanEdit(false);
      if (data.status === 'Good') {
        setChecked({good: true, bad: false});
      } else {
        setChecked({good: false, bad: true});
      }
    }
    checkValidate();
  }, []);

  return (
    <>
      <View style={[styles.container, {paddingTop: data ? 16 : 0}]}>
        {data ? null : (
          <TitleScreen title="New Asset" btnSubmit={true} onSubmit={onSubmit} />
        )}
        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 16}}>
            <Input
              label="Code"
              name="code"
              editable={false}
              value={value.code}
            />

            <Input
              label="Name"
              name="name"
              value={value.name}
              invalid={validasi.name}
              handle={handleName}
              editable={canEdit}
            />
            <SelectDropdown
              editable={canEdit}
              value={value.uom}
              label="UOM"
              visible={modalButton.uom}
              onOpen={() => {
                setModalButton({
                  category: false,
                  uom: true,
                  location: false,
                  pic: false,
                });
                getUoms();
              }}
              onClose={() => setModalButton(defaultButton)}
              invalid={validasi.uom}
              data={uoms}
              handle={handleUom}
              valueShow="name"
            />
            <Input
              editable={canEdit}
              label="Merk"
              name="merk"
              handle={handleMerk}
              value={value.merk}
            />
            <Input
              editable={canEdit}
              label="Type"
              name="type"
              handle={handleType}
              value={value.type}
            />
            <Input
              editable={canEdit}
              label="Serial Number"
              name="serialnumber"
              handle={handleSn}
              value={value.serialnumber}
            />
            <SelectDropdown
              editable={canEdit}
              label="Category"
              value={value.category}
              visible={modalButton.category}
              onOpen={() => {
                setModalButton({
                  uom: false,
                  category: true,
                  location: false,
                  pic: false,
                });
                getCategorys();
              }}
              onClose={() => setModalButton(defaultButton)}
              invalid={validasi.category}
              data={categorys}
              handle={handleCategory}
              valueShow="name"
            />
            <SelectDropdown
              editable={canEdit}
              label="Location"
              value={value.location}
              visible={modalButton.location}
              onOpen={() => {
                setModalButton({
                  uom: false,
                  category: false,
                  location: true,
                  pic: false,
                });
                getCategorys();
              }}
              onClose={() => setModalButton(defaultButton)}
              invalid={validasi.location}
              data={locations}
              handle={handleLocation}
              valueShow="name"
            />
            <SelectDropdown
              editable={canEdit}
              label="PIC"
              value={value.user}
              visible={modalButton.pic}
              onOpen={() => {
                setModalButton({
                  uom: false,
                  category: false,
                  location: false,
                  pic: true,
                });
                getUsers();
              }}
              onClose={() => setModalButton(defaultButton)}
              invalid={validasi.pic}
              data={users}
              handle={handlePIC}
              valueShow="fullName"
            />
            <Input
              editable={canEdit}
              label="Mac Address"
              name="macaddr"
              handle={handleMA}
              value={value.macaddr}
            />
            <View>
              <Text style={{color: '#bdbdbd', fontSize: 15, marginVertical: 5}}>
                Condition
              </Text>
              <View style={{flexDirection: 'row', marginLeft: -11}}>
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  title="Good"
                  checkedColor="gray"
                  checked={checked.good}
                  onPress={() => {
                    if (canEdit) {
                      setChecked({good: true, bad: false});
                      setValue({...value, status: 'Good', code_status: 1});
                    } else {
                      null;
                    }
                  }}
                />
                <CheckBox
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  title="Bad"
                  checkedColor="gray"
                  checked={checked.bad}
                  onPress={() => {
                    if (canEdit) {
                      setChecked({good: false, bad: true});
                      setValue({...value, status: 'Bad', code_status: 2});
                    } else {
                      null;
                    }
                  }}
                />
              </View>
            </View>
            <Input
              editable={canEdit}
              label="Description"
              value={value.description}
              multiline={true}
              numberOfLines={7}
              handle={handleDesc}
            />
            <TouchableOpacity
              onPress={() => setRefreash(!refreash)}></TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {data ? (
        <FloatingButton
          btnEdit={true}
          btnDelete={true}
          style={{bottom: 25}}
          handleDelete={handleDelete}
          handleChange={handleChange}
          toggleEdit={toggleEdit}
          canEdit={canEdit}
        />
      ) : null}

      {data ? null : <MainMenu active="Assets" />}
    </>
  );
};

export default CreateAssetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {color: '#ccc', fontSize: 16, marginVertical: 5},
  textInput: {
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 5,
    borderColor: 'whitesmoke',
    fontSize: 16,
    padding: 8,
    color: '#666',
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  containerInput: {marginVertical: 5},
});
