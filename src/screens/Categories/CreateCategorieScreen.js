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

const CreateCategorieScreen = ({data}) => {
  const navigation = useNavigation();
  const defaultValue = {
    status: 'Active',
    name: null,
    code_status: 1,
    description: null,
  };

  const [categorys, setCategorys] = useState([]);
  const [validasi, setValidasi] = useState({
    name: true,
  });
  const [value, setValue] = useState(defaultValue);
  const [checked, setChecked] = useState({active: true, disabled: false});
  const [canEdit, setCanEdit] = useState(true);
  const [isDup, setIsDup] = useState(0);

  const getCategorys = () => {
    fetch(`${Api_Url}categorys`)
      .then(res => {
        res.json().then(json => {
          setCategorys(json.data);
        });
      })
      .catch(err => {
        throw err;
      });
  };

  useEffect(() => {
    getCategorys();
    const isThere = categorys.filter(item => item.name == value.name);
    isThere ? setIsDup(isThere.length) : 0;
    if (
      (value.name === '') |
      (value.name === undefined) |
      (value.name === null) |
      (isDup === 1)
    ) {
      setValidasi({...validasi, name: true});
    } else {
      setValidasi({...validasi, name: false});
    }
  }, [categorys]);

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
      const upload = await fetch(`${Api_Url}categorys`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(value),
      })
        .then(res => {
          Alert.alert('Success', 'Category added successfully');
          navigation.replace('CategoriesScreen');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={[styles.container, {paddingTop: data ? 16 : 0}]}>
      {data ? null : (
        <TitleScreen
          title="New Category"
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
      {data ? null : <MainMenu active="Assets" />}
    </View>
  );
};

export default CreateCategorieScreen;

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
