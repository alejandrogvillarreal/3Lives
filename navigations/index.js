import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';

import HomeNavigation from './home-navigation';
import AboutNavigation from './about-navigation';
import Sidebar from '../components/Sidebar';

const screens = {
  Home: {
    screen: HomeNavigation,
  },
  About: {
    screen: AboutNavigation,
  },
}

const RootDrawerNavigator = createDrawerNavigator(
  screens,
  {
    contentComponent: Sidebar,
    drawerWidth: Dimensions.get('window').width - 120,
  }
);

export default createAppContainer(RootDrawerNavigator);