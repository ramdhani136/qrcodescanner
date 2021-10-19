import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Api_Url} from '../config/services';
import {Input} from '../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {inUser} from '../config/redux/slices/UserSlices';

const LoginScreen = () => {
  const [value, setValue] = useState({});
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  function handleUsername(e) {
    setValue({...value, username: e});
  }

  function handlePassword(e) {
    setValue({...value, password: e});
  }

  const getLogin = async e => {
    const ambil = await fetch(`${Api_Url}login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        username: value.username,
        password: value.password,
      }),
    });
    const jalankan = await getUser();

    return jalankan;
  };

  const getUser = async () => {
    await fetch(`${Api_Url}user`).then(res => {
      res
        .json()
        .then(json => {
          setUser(json);
          setLogin(true);
        })
        .catch(err => {
          setUser(user);
          setLogin(false);
        });
    });
  };

  // const getUser = async () => {
  //   try {
  //     const api = 'http://192.168.100.58:8000/api/user';
  //     const resultUser = await fetch(api);
  //     const getUsers = await resultUser.json();
  //     setUser(getUsers.data);
  //     setLogin(true);
  //   } catch (error) {
  //     setUser(user);
  //     setLogin(false);
  //   }
  //   return getUser();
  // };

  useEffect(() => {
    getUser();
    dispatch(inUser(user));
    if (login) {
      navigation.replace('HomeScreenNew');
    }
  }, [user, login]);

  return (
    <View style={styles.container}>
      <View style={{width: '100%', paddingHorizontal: 25}}>
        <Input label="Username" name="username" handle={handleUsername} />
        <Input
          label="Password"
          name="password"
          handle={handlePassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={getLogin}
          style={{
            borderWidth: 1,
            padding: 12,
            borderRadius: 4,
            marginTop: 20,
            backgroundColor: '#007fff',
            borderColor: '#0072e5',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              color: 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
});

export default LoginScreen;
