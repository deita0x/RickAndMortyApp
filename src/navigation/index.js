import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import Screens from './registerScreens';

import SideMenu from '@screens/SideMenu';
import { HeaderBack } from '@components';

const AppStack = createStackNavigator(
  {
    ...Screens.common,
    ...Screens.characters
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerBackImage: <HeaderBack />
    },
  }
);

const RootNavigation = createDrawerNavigator(
  { AppStack },
  {
    contentComponent: SideMenu,
    initialRouteName: 'AppStack',
    drawerPosition: 'left',
  }
);

export default createAppContainer(RootNavigation);
