import React from 'react';
import {useState, useEffect} from 'react';

import {View, Text, StyleSheet, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Api_Url} from '../config/services';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}></View>
);

const ScanQRScreen = ({route, navigation}) => {
  const [count, setCount] = useState(1);
  const barcodeScreen = route.params.barcodeScreen;

  const getItem = barcode => {
    fetch(`${Api_Url}items/${barcode}`).then(res => {
      res
        .json()
        .then(json => {
          if (json.data.length > 0) {
            navigation.navigate('ViewAssetScreen', json.data[0]);
          } else {
            Alert.alert('Error', 'No data found');
            navigation.navigate('AssetScreen');
          }
        })
        .catch(error => {
          console.log('Api call error');
          alert(error.message);
        });
    });
  };

  const onRead = barcode => {
    if (count === 1) {
      if (barcodeScreen == 'assets') {
        getItem(barcode.data);
      } else {
        alert(barcode.data);
      }
    }
    setCount(count + 1);
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <RNCamera
        style={{width: '100%', height: '100%', position: 'absolute'}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        // onBarCodeRead={barcode => {
        //   Navigation.navigate('NewsDetailScreen', {
        //     barcode: barcode.data,
        //     id: 16,
        //     judul:
        //       ' Dimas drajat selamatkan penalti, Timans U-23 kalahkan Brunei',
        //   });
        // }}
        onBarCodeRead={onRead}>
        {({status}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}></View>
          );
        }}
      </RNCamera>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'whitesmoke',
          width: 260,
          height: 260,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ScanQRScreen;
