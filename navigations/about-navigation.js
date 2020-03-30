import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../components/common/Header';
import About from '../components/About';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='3Lives' navigation={navigation} />
      }
    },
  },
}

const AboutStackNavigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default AboutStackNavigation;