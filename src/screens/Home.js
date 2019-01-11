import React, { Component } from 'react';
import { View } from 'react-native-easy-layout-view';
import { HomeImage, HeaderLeft } from '@components';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: <HeaderLeft onPress={() => navigation.toggleDrawer()} />,
    headerTitleStyle: { fontFamily: 'Montserrat-SemiBold', color: '#3c4859' }
  });

  render() {
    return (
      <View flex center style={{ backgroundColor: 'white' }}>
        <HomeImage />
      </View>
    );
  }
}
