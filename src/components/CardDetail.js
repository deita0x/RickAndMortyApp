import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { View as AView } from 'react-native-animatable';
import { View } from 'react-native-easy-layout-view';
import { LinearGradient } from 'expo';
import Avatar from './Avatar';

const CardDetail = ({ name, gender, image, species, status, origin }) => {
  return (
    <AView animation='zoomIn' duration={2000} style={styles.container}>
      <View>
        <View height-220 center>
          <Avatar uri={image} height={170} />
        </View>

        <View marginL-20>
          <Text style={styles.textBig}>{name}</Text>
          <Text style={[styles.textSmall, { color: '#9facbd' }]}>{species}</Text>
        </View>

        <View height-10 />
      </View>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.0, 0.99]}
        style={styles.gradientBox}
      >
        <View flex marginL-20 centerV>
          <View>
            <Text style={styles.textSmall}>{gender}</Text>
            <Text style={styles.textSmall}>Is {status}</Text>
            <Text style={styles.textSmall}>Comes from {origin.name}</Text>
          </View>
        </View>

      </LinearGradient>
    </AView>
  );
};

CardDetail.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textBig: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 35,
    color: '#3c4859'
  },
  textSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'white'
  },
  gradientBox: {
    height: 70,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  }
});

export default CardDetail;
