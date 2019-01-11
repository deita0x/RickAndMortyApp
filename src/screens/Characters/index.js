import React, { Component } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Query } from "react-apollo";
import { CHARACTERS_LIST } from '@graphql/characters.query';

import CharactersContainer from './Container';

export default class Characters extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Query query={CHARACTERS_LIST}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) {
            Alert.alert('Error', `${error}`);
            return null;
          }

          // Slice to 10 elements because GraphQl API responds 20 documents per page by default.
          const characters = data.characters.results.slice(0, 10);

          return <CharactersContainer characters={characters} navigate={navigate} />;
        }}
      </Query>
    );
  }
}
