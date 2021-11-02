import React, {useEffect, memo, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Animated} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ListItem = ({
  data,
  handleDelete,
  isLoading,
  handleData,
  toggleReload,
}) => {
  const [swipeRef, setSwipeRef] = useState([]);
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [itemChecked, setItemChecked] = useState([]);

  // useEffect(() => {
  //   setItems(
  //     data.api.map(item => {
  //       return {
  //         ...item,
  //         checked: false,
  //       };
  //     }),
  //   );
  // }, [data.api]);

  // const onChangeItems = e => {
  //   setItems(
  //     items.map(d => {
  //       if (d.id === e) {
  //         if (d.checked) {
  //           d.checked = false;
  //         } else {
  //           d.checked = true;
  //         }
  //       }
  //       return d;
  //     }),
  //   );

  //   setIsChange(!isChange);
  // };

  // useEffect(() => {
  //   toggleReload(false);

  //   const filter = items.filter(item => item.checked === true);
  //   setItemChecked(filter);

  //   if (filter.length > 0) {
  //     toggleReload(false);
  //   } else {
  //     toggleReload(true);
  //   }
  // }, [isChange]);

  // useEffect(() => {
  //   const filter = items.filter(item => item.checked === true);
  //   setItemChecked(filter);
  // }, [items]);

  const navigation = useNavigation();
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });

    return (
      <RectButton
        style={{
          flex: 1,
          backgroundColor: '#e57474',
          marginTop: 1,
          marginBottom: 17,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginRight: -5,
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <Animated.Text
          ref={swipeRef}
          style={{
            transform: [{translateX: trans}],
            textAlign: 'left',
            color: 'white',
          }}>
          <MaterialCommunityIcons name="delete-empty" style={{fontSize: 30}} />
        </Animated.Text>
      </RectButton>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
    });

    return (
      <RectButton
        style={{
          flex: 1,
          backgroundColor: '#e57474',
          marginTop: 1,
          marginBottom: 17,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginRight: -5,
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: 'row',
        }}>
        <Animated.Text
          ref={swipeRef}
          style={{
            transform: [{translateX: trans}],
            textAlign: 'right',
            color: 'white',
          }}>
          <MaterialCommunityIcons name="delete-empty" style={{fontSize: 30}} />
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <FlatList
      style={{paddingTop: 16}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={data.api}
      refreshing={isLoading}
      onRefresh={handleData}
      renderItem={({item}) => {
        return (
          <Swipeable
            ref={ref => {
              swipeRef[item.id] = ref;
            }}
            // overshootLeft={false}
            onSwipeableLeftOpen={() => {
              handleDelete(item.id);
              swipeRef[item.id].close();
            }}
            onSwipeableRightOpen={() => {
              handleDelete(item.id);
              swipeRef[item.id].close();
            }}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(data.viewScreen, item);
              }}
              // onPress={() => {
              //   itemChecked.length > 0
              //     ? onChangeItems(item.id)
              //     : navigation.navigate(data.viewScreen, item);
              // }}
              // onLongPress={() => onChangeItems(item.id)}
              style={{
                // opacity: item.checked ? 0.6 : 1,
                borderRadius: 7,
                marginBottom: 16,
                backgroundColor: 'white',
                borderLeftWidth: 5,
                borderLeftColor:
                  item.code_status == 1
                    ? '#3ac2ba'
                    : item.code_status == 2
                    ? '#ffba03'
                    : '#757074',
                borderWidth: 1,
                borderTopColor: '#e7e7e7',
                borderBottomColor: '#e7e7e7',
                borderRightColor: '#e7e7e7',
                paddingHorizontal: 10,
                paddingVertical: 16,
              }}>
              {item.checked ? (
                <AntDesign
                  name="checkcircle"
                  style={{
                    fontSize: 30,
                    color: 'red',
                    position: 'absolute',
                    right: 10,
                    top: 40,
                  }}
                />
              ) : null}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#b0b0b0',
                      marginLeft: 7,
                      marginTop: -1,
                    }}>
                    {item.code}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Entypo
                    name="controller-record"
                    style={{
                      fontSize: 10,
                      marginTop: 1,
                      color:
                        item.code_status == 1
                          ? '#3ac2ba'
                          : item.code_status == 2
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
                    {item.status}
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  marginVertical: 10,
                  color: '#666',
                  fontWeight: 'bold',
                  marginLeft: 4.5,
                  fontSize: 18,
                }}>
                {item.name}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 5,
                      color: '#b0b0b0',
                    }}>
                    {item.category ? item.category : null}
                  </Text>
                </View>
                <Text style={{color: '#b0b0b0', fontSize: 12}}>
                  {item.location}
                </Text>
              </View>
            </TouchableOpacity>
            {/* {console.log(itemChecked)} */}
          </Swipeable>
        );
      }}
    />
  );
};

export default memo(ListItem);
