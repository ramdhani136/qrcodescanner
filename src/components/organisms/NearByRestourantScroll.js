import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

export class NearByRestourantScroll extends Component {
  render() {
    return (
      <View style={{paddingHorizontal: 16}}>
        <View
          style={{
            height: 15,
            width: 55,
          }}>
          <Image
            source={require('../../assets/logo/go-food.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{flexDirection: 'row'}}>
          {/* Produk */}
          <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150}}>
              <Image
                source={require('../../assets/dummy/go-food-kfc.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1C1C1C',
                marginTop: 12,
              }}>
              KFC Aeon Mall
            </Text>
          </View>
          {/* End Produk */}
          {/* Produk */}
          <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150}}>
              <Image
                source={require('../../assets/dummy/go-food-gm.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1C1C1C',
                marginTop: 12,
              }}>
              Bakmi GM Aeon Mall
            </Text>
          </View>
          {/* End Produk */}
          {/* Produk */}
          <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150}}>
              <Image
                source={require('../../assets/dummy/go-food-orins.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1C1C1C',
                marginTop: 12,
              }}>
              Martabak Orins
            </Text>
          </View>
          {/* End Produk */}
          {/* Produk */}
          <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150}}>
              <Image
                source={require('../../assets/dummy/go-food-banka.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1C1C1C',
                marginTop: 12,
              }}>
              Martabak Banka
            </Text>
          </View>
          {/* End Produk */}
          {/* Produk */}
          <View style={{marginRight: 16}}>
            <View style={{width: 150, height: 150}}>
              <Image
                source={require('../../assets/dummy/go-food-pak-boss.jpg')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'cover',
                  flex: 1,
                  borderRadius: 10,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#1C1C1C',
                marginTop: 12,
              }}>
              Ayam Bakar Pak Boss
            </Text>
          </View>
          {/* End Produk */}
        </ScrollView>
      </View>
    );
  }
}

export default NearByRestourantScroll;
