import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../components/common/Header';
import Home from '../components/Home';
import ReviewDetails from '../components/ReviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='3Lives' navigation={navigation} />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

const HomeStackNavigation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStackNavigation;