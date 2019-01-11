import React, { Component } from 'react';
import { View } from 'react-native-easy-layout-view';
import { CardDetail } from '@components';

export default class CharactersDetail extends Component {
  render() {
    const { navigation } = this.props;
    const character = {
      name: navigation.getParam('name'),
      gender: navigation.getParam('gender'),
      image: navigation.getParam('image'),
      species: navigation.getParam('species'),
      status: navigation.getParam('status'),
      origin: navigation.getParam('origin'),
    };

    return (
      <View flex style={{ backgroundColor: 'white' }}>
        <View height-20 />
        <CardDetail {...character} />
      </View>
    );
  }
}
