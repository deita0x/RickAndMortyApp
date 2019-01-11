import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-easy-layout-view';

const MenuItem = ({ text, onPress }) => {
  return (
    <View centerV paddingH-20 height-50>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, color: '#3c4859' }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default class SideMenu extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <View height-100 />

        <MenuItem text='Home' onPress={() => this.props.navigation.toggleDrawer()} />
        <MenuItem text='Characters' onPress={() => navigate('Characters')} />
        <MenuItem text='Seasons' onPress={() => navigate('Seasons')} />
      </View>
    );
  }
}
