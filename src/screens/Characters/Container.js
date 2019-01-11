import React, { Component } from 'react';
import { View } from 'react-native-easy-layout-view';
import { CharactersList, SearchBox } from '@components';

export default class CharactersContainer extends Component {
  state = {
    characters: this.props.characters,
    searchBox: { value: '', errorMessage: '' }
  };

  onChangeText = text => {
    this.filterCharacters(text);
  };

  filterCharacters = text => {
    let filteredCharacters = [];
    const errorMessage = this.validateText(text);

    if (text && !errorMessage) {
      filteredCharacters = this.props.characters.filter(item => {
        const name = item.name.toLowerCase();
        const searchText = text.toLowerCase();

        return name.includes(searchText);
      });
    } else {
      filteredCharacters = this.props.characters;
    }

    this.setState({
      characters: filteredCharacters,
      searchBox: {
        value: text,
        errorMessage
      }
    });
  };

  validateText = text => {
    const onllyLetterPattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;

    if (text) {
      return onllyLetterPattern.test(text) ? '' : 'Special characters are not allowed.';
    } else {
      return '';
    }
  };

  render() {
    const { navigate } = this.props;
    const { characters, searchBox } = this.state;

    return (
      <View>
        <View centerV marginH-20 marginT-10>
          <SearchBox
            onChangeText={this.onChangeText}
            error={searchBox.errorMessage}
          />
        </View>
        <CharactersList characters={characters} navigate={navigate} />
      </View>
    );
  }
}
