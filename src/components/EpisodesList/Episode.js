import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo';
import { View } from 'react-native-easy-layout-view';

const Gradient = ({ children }) => {
  return (
    <LinearGradient
      colors={['#2980B9', '#6DD5FA']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0.0, 0.99]}
      style={{ flex: 1, borderRadius: 10 }}
    >
      {children}
    </LinearGradient>
  );
};

const Episode = props => {
  const { name, episode, air_date } = props;

  return (
    <View paddingB-15>
      <Gradient>
        <View flex margin-10>
          <Text style={styles.textBig}>{name}</Text>
          <Text style={styles.textSmall}>{episode}</Text>
          <Text style={styles.textSmall}>{air_date}</Text>
        </View>
      </Gradient>
    </View>
  );
};

Episode.proptypes = {
  name: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  air_date: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textBig: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 25,
    color: 'white'
  },
  textSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'white'
  }
});

export default Episode;
