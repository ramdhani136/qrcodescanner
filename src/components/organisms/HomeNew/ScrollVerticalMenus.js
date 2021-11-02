import React from 'react';
import {ScrollView} from 'react-native';
import {ScrollVerticalItem} from '../../moleculs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ScrollVerticalMenus = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        marginLeft: 16,
        zIndex: 1000,
        flexDirection: 'row',
        marginRight: 16,
      }}>
      <ScrollVerticalItem
        onPress={() => navigation.navigate('AssetScreen')}
        Icon={FontAwesome5}
        IconName="clipboard-list"
        IconSize={25}
        IconColor="#dffbff"
        title="Assets"
        qty="3027"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        onPress={() => navigation.navigate('CategoriesScreen')}
        Icon={Entypo}
        IconName="book"
        IconSize={25}
        IconColor="#dffbff"
        title="Categories"
        qty="43"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        onPress={() => navigation.navigate('LocationScreen')}
        Icon={Entypo}
        IconName="location"
        IconSize={25}
        IconColor="#dffbff"
        title="Locations"
        qty="11"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={FontAwesome5}
        IconName="cart-arrow-down"
        IconSize={25}
        IconColor="#dffbff"
        title="Purchase Request"
        qty="3"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={MaterialCommunityIcons}
        IconName="file-send"
        IconSize={25}
        IconColor="#dffbff"
        title="Transfer Assets"
        qty="0"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={FontAwesome}
        IconName="truck"
        IconSize={25}
        IconColor="#dffbff"
        title="Vehicles"
        qty="7"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={Entypo}
        IconName="users"
        IconSize={25}
        IconColor="#dffbff"
        title="Users"
        qty="83"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={MaterialIcons}
        IconName="group-work"
        IconSize={25}
        IconColor="#dffbff"
        title="Departments"
        qty="12"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={MaterialIcons}
        IconName="admin-panel-settings"
        IconSize={25}
        IconColor="#dffbff"
        title="Role Permissions"
        qty="132"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={MaterialIcons}
        IconName="rule-folder"
        IconSize={25}
        IconColor="#dffbff"
        title="Workflows"
        qty="12"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={FontAwesome}
        IconName="legal"
        IconSize={25}
        IconColor="#dffbff"
        title="Legality"
        qty="13"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={MaterialCommunityIcons}
        IconName="office-building"
        IconSize={25}
        IconColor="#dffbff"
        title="Company"
        qty="1"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={Entypo}
        IconName="shopping-bag"
        IconSize={25}
        IconColor="#dffbff"
        title="Purchase order"
        qty="2"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={MaterialIcons}
        IconName="report"
        IconSize={25}
        IconColor="#dffbff"
        title="Reports"
        qty="23"
        bg="#01b1ea"
        qtyColor="white"
        titleColor="#dffbff"
      />
      <ScrollVerticalItem
        Icon={Ionicons}
        IconName="settings"
        IconSize={25}
        IconColor="#dffbff"
        title="Troubleshoots"
        qty="3"
        bg="#0081f8"
        qtyColor="white"
        titleColor="#dffbff"
      />
    </ScrollView>
  );
};

export default ScrollVerticalMenus;
