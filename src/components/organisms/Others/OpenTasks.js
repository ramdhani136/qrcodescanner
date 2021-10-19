import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {OpenListItem} from '../../moleculs';

const OpenTasks = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <Text style={{fontSize: 13, color: '#797979'}}>Open Task</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 13, color: '#797979', marginRight: 5}}>
            Sort By
          </Text>
          <MaterialCommunityIcons
            name="sort"
            style={{fontSize: 14, color: '#797979', marginTop: 3}}
          />
        </View>
      </View>
      {/* OpenTask List */}
      <OpenListItem
        status="Open"
        title="(PR-2021-08-0001) Request for a new Apple Macbook Pro"
        user="Ilham Ramdhani"
        date="30 Agustus 2021"
        type="Purchase Request"
      />
      <OpenListItem
        status="In Progress"
        title="(TRB-2021-08-0023) Macbook is not shutting down property!"
        user="Ryan Hadi Dermawan"
        date="29 Agustus 2021"
        type="Troubleshoot"
      />
      <OpenListItem
        status="In Progress"
        title="(MTS-2021-08-0002) BENQ Monitor replacement request"
        user="Faisal Rahman"
        date="29 Agustus 2021"
        type="Transfer Asset"
      />
      <OpenListItem
        status="Open"
        title="(TRB-2021-08-0022) Wifi connection drops and slow internet"
        user="Biduan Dangdut"
        date="28 Agustus 2021"
        type="Troubleshoot"
      />
      <OpenListItem
        status="On Hold"
        title="(TRB-2021-08-0022) Komputer tidak mau nyala/mati total"
        user="Manja Banget"
        date="27 Agustus 2021"
        type="Troubleshoot"
      />
    </View>
  );
};

export default OpenTasks;
