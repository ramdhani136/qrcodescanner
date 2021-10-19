import React from 'react';
import {View, ScrollView} from 'react-native';
import {
  MainMenu,
  OpenTasks,
  ScrollVerticalMenu,
  TitleScreen,
} from '../components/organisms';

const HomeScreennew = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
        <TitleScreen title="Dashboard" search={true} qrcode={false} />
        <ScrollVerticalMenu />
        <OpenTasks />
      </ScrollView>
      <MainMenu active="Home" />
    </View>
  );
};

export default HomeScreennew;
