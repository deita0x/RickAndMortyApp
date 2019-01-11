import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native-animatable';

const Avatar = ({ uri, height }) => {
  return (
    <Image
      animation='fadeIn'
      delay={500}
      duration={2000}
      source={{ uri }}
      resizeMode='cover'
      style={{ height, width: height, borderRadius: height / 2 }}
    />
  );
};

Avatar.proptypes = {
  uri: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default Avatar;
