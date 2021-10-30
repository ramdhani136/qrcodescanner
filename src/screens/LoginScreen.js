import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Api_Url} from '../config/services';
import {Input} from '../components/atoms';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {inUser} from '../config/redux/slices/UserSlices';
import {ActivityIndicator} from 'react-native';

const LoginScreen = () => {
  const [value, setValue] = useState({});
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(true);

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
          setIsloading(false);
        })
        .catch(err => {
          setLogin(false);
          setIsloading(false);
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getUser();
    dispatch(inUser(user));
    if (login) {
      navigation.replace('HomeScreenNew');
    }
  }, [user, login]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="#cccccc" size="large" />
      </View>
    );
  }
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
