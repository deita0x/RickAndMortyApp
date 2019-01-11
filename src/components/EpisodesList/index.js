import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { View } from 'react-native-easy-layout-view';
import Episode from './Episode';

const EpisodesList = ({ episodes }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>
      {episodes.map(item => <Episode key={item.id} {...item} />)}

      <View height-100 />
    </ScrollView>
  );
};

EpisodesList.propTypes = {
  episodes: PropTypes.array.isRequired
};

export default EpisodesList;