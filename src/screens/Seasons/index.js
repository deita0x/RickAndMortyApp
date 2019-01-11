import React from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import { Query } from "react-apollo";
import { EPISODES_LIST } from '@graphql/episodes.query';
import Container from './Container';

const seasonCode = 'S01E';

const Seasons = () => {
  return (
    <Query query={EPISODES_LIST} variables={{ seasonCode }}>
      {({ loading, error, data }) => {
        if (loading) return <ActivityIndicator />;
        if (error) {
          Alert.alert('Error', `${error}`);
          return null;
        }

        const episodes = data.episodes.results;

        return <Container episodes={episodes} />;
      }}
    </Query>
  );
};

export default Seasons;
