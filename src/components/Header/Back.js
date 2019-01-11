import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native-easy-layout-view';

import { Icons } from '@assets';

const HeaderBack = () => {
  return (
    <View width-30 height-25>
      <Image source={Icons.back} style={{
        resizeMode: 'contain',
        height: 25, width: 30
      }} />
    </View>
  );
};

export default HeaderBack;
