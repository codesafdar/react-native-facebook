import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Jobs from '../screens/Jobs'
import Schedule from '../screens/Schedule'
import Notifications from '../screens/Notifications'
import Account from '../screens/Account'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'Jobs') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }
        else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications-outline'
        }
        else if (route.name === 'Schedule') {
          iconName = focused ? 'construct' : 'construct-outline'
        }
        else if (route.name === 'Account') {
          iconName = focused ? 'build' : 'build-outline'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Jobs' component={Jobs} />
    <Tab.Screen name='Notifications' component={Notifications} options={{tabBarBadge:12}} />
    <Tab.Screen name='Schedule' component={Schedule} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
  )
}

export default BottomTabsNavigation