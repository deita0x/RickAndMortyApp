import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native-animatable';
import { View } from 'react-native-easy-layout-view';

import { BgRickMorty } from '@assets';

const HomeImage = () => {
  return (
    <View height-300 width-300>
      <Image
        animation='fadeIn'
        delay={500}
        duration={3000}
        source={BgRickMorty}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});

export default HomeImage;
