import React from 'react';
import AppContainer from '@navigation';
import { ApolloProvider } from "react-apollo";
import { Font } from 'expo';
import { Fonts } from '@assets';
import { client } from '@api';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'Montserrat-Regular': Fonts.montserratRegular,
      'Montserrat-SemiBold': Fonts.montserratSemiBold,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <ApolloProvider client={client}>
          <AppContainer />
        </ApolloProvider>
      );
    } else {
      return null;
    }
  }
}
