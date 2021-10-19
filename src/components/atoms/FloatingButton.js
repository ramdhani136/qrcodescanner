import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FloatingButton = ({
  style,
  handleSubmit,
  btnEdit,
  btnDelete,
  handleDelete,
  toggleEdit,
  canEdit,
  handleChange,
}) => {
  const navigation = useNavigation();

  const [animation, setAnimation] = useState(new Animated.Value(0));

  const [open, setOpen] = useState(false);
  const [toValue, setToValue] = useState(1);

  const toggleMenu = () => {
    setToValue(open ? 0 : 1);
    Animated.spring(animation, {
      toValue: toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  const pinStyle = {
    transform: [
      {scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -16],
        }),
      },
    ],
  };

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  return (
    <View style={[styles.container, style]}>
      {btnDelete ? (
        <TouchableOpacity onPress={handleDelete}>
          <Animated.View
            style={[
              styles.button,
              {opacity: 0.6, marginBottom: 16, width: 50, height: 50},
              pinStyle,
            ]}>
            <MaterialIcons
              name="delete"
              style={{fontSize: 30, color: 'white'}}
            />
          </Animated.View>
        </TouchableOpacity>
      ) : null}
      {btnEdit && !canEdit ? (
        <TouchableOpacity onPress={toggleEdit}>
          <Animated.View
            style={[
              styles.button,
              {opacity: 0.6, marginBottom: 0, width: 50, height: 50},
              pinStyle,
            ]}>
            <MaterialIcons name="edit" style={{fontSize: 30, color: 'white'}} />
          </Animated.View>
        </TouchableOpacity>
      ) : null}
      {btnEdit && canEdit ? (
        <TouchableOpacity onPress={handleChange}>
          <Animated.View
            style={[
              styles.button,
              {opacity: 0.6, marginBottom: 0, width: 50, height: 50},
              pinStyle,
            ]}>
            <MaterialIcons name="save" style={{fontSize: 30, color: 'white'}} />
          </Animated.View>
        </TouchableOpacity>
      ) : null}
      {/* <TouchableOpacity onPress={handleSubmit}> */}
      <TouchableOpacity onPress={handleSubmit ? handleSubmit : toggleMenu}>
        <Animated.View style={[styles.button, rotation]}>
          <Feather name="plus" style={[{fontSize: 30, color: 'white'}]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    right: 20,
  },
  button: {
    width: 62,
    height: 62,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
    backgroundColor: '#F02A4B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
