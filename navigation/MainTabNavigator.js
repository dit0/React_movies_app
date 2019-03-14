import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NowScreen from '../screens/NowPlayingScreen';
import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';

const NowStack = createStackNavigator({
  Now: NowScreen,
});

NowStack.navigationOptions = {
  tabBarLabel: 'Now Playing',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-tv'} 
  
      
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-search'}
    />
  ),
};

const ListStack = createStackNavigator({
  List: ListScreen,
});

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-list'}
    />
  ),
};

export default createBottomTabNavigator({
  NowStack,
  SearchStack,
  ListStack,
});
