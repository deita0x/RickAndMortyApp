import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native-easy-layout-view';
import { Image, Text } from 'react-native-animatable';

import { Icons } from '@assets';

export default class SearchBox extends Component {
  static propTypes = {
    onChangeText: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  state = {
    value: this.props.value || ''
  };

  onChange = event => {
    const { text } = event.nativeEvent;

    this.setState({ value: text });
  };

  renderError = () => {
    if (this.props.error) {
      return (
        <Text animation='fadeIn' style={styles.errorText}>
          {this.props.error}
        </Text>
      );
    }
    return null;
  };

  render() {
    const { ...rest } = this.props;

    return (
      <View>
        <View row height-30 style={styles.container}>
          <View width-30 center>
            <Image animation='fadeIn' source={Icons.search} style={styles.iconImage} />
          </View>
          <View flex>
            <TextInput
              {...rest}
              allowFontScaling={false}
              autoCorrect={false}
              returnKeyType='done'
              underlineColorAndroid='transparent'
              onChange={this.onChange}
              value={this.state.value}
              style={styles.input}
            />
          </View>
        </View>
        {this.renderError()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#0facf3',
    borderRadius: 10
  },
  iconImage: {
    resizeMode: 'contain',
    height: 20, width: 20
  },
  input: {
    height: 28
  },
  errorText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#DF4A69',
    marginTop: 2
  }
});
