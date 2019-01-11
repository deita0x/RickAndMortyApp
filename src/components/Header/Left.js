import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native-easy-layout-view';

import { Icons } from '@assets';

const HeaderLeft = ({ onPress }) => {
  return (
    <View width-30 height-30 marginL-15>
      <TouchableOpacity onPress={onPress}>
        <Image source={Icons.hamburger} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
};

HeaderLeft.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  iconImage: {
    resizeMode: 'contain',
    height: 30, width: 30
  },
});

export default HeaderLeft;
