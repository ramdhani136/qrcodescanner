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
import {CheckBox} from 'react-native-elements';
import {setNumber} from '../../utils/setNomor';
import {useNavigation} from '@react-navigation/native';

const CreateLocationScreen = ({route}) => {
  const doc = route.params;
  const navigation = useNavigation();
  const defaultValue = {
    status: 'Active',
    name: '',
    code_status: 1,
    description: null,
  };

  const [locations, setLocations] = useState([]);
  const [validasi, setValidasi] = useState({
    name: true,
  });
  const [value, setValue] = useState(defaultValue);
  const [checked, setChecked] = useState({active: true, disabled: false});
  const [canEdit, setCanEdit] = useState(true);
  const [isDup, setIsDup] = useState(0);

  const getLocations = () => {
    fetch(`${Api_Url}locations`)
      .then(res => {
        res.json().then(json => {
          setLocations(json.data);
        });
      })
      .catch(err => {
        throw err;
      });
  };

  const checkValidate = () => {
    if (
      (value.name === '') |
      (value.name === undefined) |
      (value.name === null)
    ) {
      setValidasi({...validasi, name: true});
    } else {
      setValidasi({...validasi, name: false});
    }
  };

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  };

  const handleName = e => {
    setValue({...value, name: e});
  };

  const handleDesc = e => {
    if (e === '') {
      e = null;
    }
    setValue({...value, description: e});
  };

  const onSubmit = async () => {
    if (validasi.name) {
      Alert.alert('Error', 'Check your form!');
    } else {
      const upload = await fetch(`${Api_Url}locations`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(value),
      })
        .then(res => {
          Alert.alert('Success', 'Location added successfully');
          navigation.replace('LocationScreen');
        })
        .catch(err => {
          throw err;
        });
    }
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure?', [
      {text: 'NO', onPress: () => getLocations(), style: 'cancel'},
      {text: 'YES', onPress: () => getDelete()},
    ]);
  };

  const handleChange = () => {
    if (JSON.stringify(doc) === JSON.stringify(value)) {
      Alert.alert('Error', 'No data change');
    } else {
      getEdit();
    }
  };

  const getDelete = async e => {
    const hapus = await fetch(`${Api_Url}locations/${doc.id}`, {
      method: 'DELETE',
    });
    const showAlert = await Alert.alert('Delete', 'data has been deleted ');
    const redirectScreen = await navigation.replace('LocationScreen');
    return redirectScreen;
  };

  const getEdit = async () => {
    const updateValue = {
      name: value.name,
      description: value.description,
      status: value.status,
      code_status: value.code_status,
    };
    const edit = await fetch(`${Api_Url}locations/${doc.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(updateValue),
    });
    const showAlert = await Alert.alert('Changed', 'Data has been changed  ');
    const redirectScreen = await navigation.replace('LocationScreen');
    return redirectScreen;
  };

  useEffect(() => {
    getLocations();
    const isThere = locations.filter(
      item => item.name.toLowerCase() == value.name.toLowerCase(),
    );
    isThere ? setIsDup(isThere.length) : 0;
    if (
      (value.name === '') |
      (value.name === undefined) |
      (value.name === null) |
      (doc
        ? value.name.toLowerCase() == doc.name.toLowerCase()
          ? isDup === 2
          : isDup === 1
        : isDup === 1)
    ) {
      setValidasi({...validasi, name: true});
    } else {
      setValidasi({...validasi, name: false});
    }
  }, [locations]);

  useEffect(() => {
    doc ? setValue(doc) : null;
    if (doc) {
      if (doc.status === 'Active') {
        setChecked({active: true, disabled: false});
      } else {
        setChecked({active: false, disabled: true});
      }
      setCanEdit(false);
      checkValidate();
    }
  }, []);

  return (
    <>
      <View style={[styles.container, {paddingTop: doc ? 16 : 0}]}>
        {doc ? null : (
          <TitleScreen
            title="New Location"
            btnSubmit={true}
            onSubmit={onSubmit}
          />
        )}
        <ScrollView>
          <View style={{flex: 1, marginHorizontal: 16}}>
            <Input
              label="Name"
              name="name"
              value={value.name}
              invalid={validasi.name}
              handle={handleName}
              editable={canEdit}
            />
            <Input
              editable={canEdit}
              label="Description"
              value={value.description}
              multiline={true}
              numberOfLines={7}
              handle={handleDesc}
            />
            <View style={{flexDirection: 'row', marginLeft: -11}}>
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Active"
                checkedColor="gray"
                checked={checked.active}
                onPress={() => {
                  if (canEdit) {
                    setChecked({active: true, disabled: false});
                    setValue({...value, status: 'Active', code_status: 1});
                  } else {
                    null;
                  }
                }}
              />
              {console.log(doc)}
              <CheckBox
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Disabled"
                checkedColor="gray"
                checked={checked.disabled}
                onPress={() => {
                  if (canEdit) {
                    setChecked({active: false, disabled: true});
                    setValue({...value, status: 'Disabled', code_status: 2});
                  } else {
                    null;
                  }
                }}
              />
            </View>
          </View>
        </ScrollView>
        {doc ? (
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
      </View>
      <MainMenu />
    </>
  );
};

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

export default CreateLocationScreen;
