import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';
import { View } from 'react-native-easy-layout-view';
import Avatar from '../Avatar';

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

const Character = props => {
  const { name, image, navigate } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigate('CharactersDetail', { ...props })}>
      <Gradient>
        <View flex row>
          <View flex-1 left centerV paddingL-15>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View width-150 center>
            <Avatar uri={image} height={100} />
          </View>
        </View>
      </Gradient>
    </TouchableOpacity >
  );
};

Character.proptypes = {
  name: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    marginVertical: 10
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 25,
    color: 'white'
  }
});

export default Character;
