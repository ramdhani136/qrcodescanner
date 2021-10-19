import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {
  BarMenu,
  HomeBanners,
  HomeGopay,
  HomeInformation,
  HomeMain,
  HomeNews,
  HomeSearchBar,
  NearByRestourantScroll,
} from '../components/organisms';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          vertical
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <HomeSearchBar />
          <HomeGopay />
          <HomeMain />
          <View
            style={{
              height: 17,
              backgroundColor: '#F2F2F4',
              marginTop: 15,
            }}></View>
          <HomeNews />
          <HomeInformation />
          <HomeBanners />
          <NearByRestourantScroll />
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#E8E9ED',
              marginTop: 16,
            }}></View>
        </ScrollView>
        <BarMenu />
      </View>
    );
  }
}

export default HomeScreen;
