import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OpenListItem = ({status, onPress, title, user, date, type}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 7,
        marginBottom: 16,
        backgroundColor: 'white',
        borderLeftWidth: 5,
        borderLeftColor:
          status === 'Open'
            ? '#3ac2ba'
            : status === 'In Progress'
            ? '#ffba03'
            : '#757074',
        borderWidth: 1,
        borderTopColor: '#f5f5f5',
        borderBottomColor: '#f5f5f5',
        borderRightColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingVertical: 16,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          {type === 'Purchase Request' ? (
            <FontAwesome5
              name="layer-group"
              style={{fontSize: 11, color: '#b0b0b0'}}
            />
          ) : null}

          {type === 'Troubleshoot' ? (
            <Octicons name="tools" style={{fontSize: 11, color: '#b0b0b0'}} />
          ) : null}

          {type === 'Transfer Asset' ? (
            <AntDesign name="swap" style={{fontSize: 11, color: '#b0b0b0'}} />
          ) : null}

          <Text
            style={{
              fontSize: 10,
              color: '#b0b0b0',
              marginLeft: 7,
              marginTop: -1,
            }}>
            {type.toUpperCase()}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Entypo
            name="controller-record"
            style={{
              fontSize: 10,
              marginTop: 1,
              color:
                status === 'Open'
                  ? '#3ac2ba'
                  : status === 'In Progress'
                  ? '#ffba03'
                  : '#757074',
            }}
          />
          <Text
            style={{
              fontSize: 10,
              color: '#b0b0b0',
              marginLeft: 2,
              marginTop: -1.5,
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginVertical: 10,
          color: '#666',
          fontWeight: 'bold',
          fontSize: 14,
        }}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#b0b0b0', fontSize: 12}}>From</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginLeft: 5,
              color: '#8c8c8c',
            }}>
            {user}
          </Text>
        </View>
        <Text style={{color: '#b0b0b0', fontSize: 12}}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OpenListItem;
