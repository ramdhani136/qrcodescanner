import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({
  label,
  value,
  placeholder,
  name,
  editable,
  multiline,
  numberOfLines,
  invalid,
  secureTextEntry,
  handle,
}) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={e => handle(e)}
        style={[
          styles.textInput,
          {
            textAlignVertical: multiline ? 'top' : 'center',
            borderWidth: 1,
            borderColor: invalid ? '#ffc9c9' : 'whitesmoke',
          },
        ]}
        placeholder={placeholder}
        value={value}
        name={name}
        editable={editable}
        selectTextOnFocus={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

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
  containerInput: {marginBottom: 20},
});

export default Input;
