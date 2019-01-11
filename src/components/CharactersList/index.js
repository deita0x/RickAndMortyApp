import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { View } from 'react-native-easy-layout-view';
import Character from './Character';

const CharactersList = ({ characters, navigate }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>
      {characters.map(item => <Character key={item.id} {...item} navigate={navigate} />)}

      <View height-100 />
    </ScrollView>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired
};

export default CharactersList;
