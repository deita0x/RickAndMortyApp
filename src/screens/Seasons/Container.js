import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native-easy-layout-view';
import { EpisodesList } from '@components';

export default class SeasonsContainer extends Component {
  render() {
    const { episodes } = this.props;

    return (
      <View>
        <View paddingV-10 marginL-20>
          <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 25, color: '#3c4859' }}>
            Episodes season 1
        </Text>
        </View>

        <EpisodesList episodes={episodes} />
      </View>
    );
  }
}
