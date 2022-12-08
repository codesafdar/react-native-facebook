import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeTab from '../screens/HomeTab'
import MarketTab from '../screens/MarketTab'
import FriendsTab from '../screens/FriendsTab'
import Schedule from '../screens/Schedule'
import Notifications from '../screens/Notifications'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialTopTabNavigator()

const FacebookTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            // tabBarPosition="bottom"
            style={{
                marginTop: -35 - 38,               
              }}
            tabBarOptions={{
                activeTintColor: 'blue',
                style: {
                    backgroundColor: 'transparent',
                    paddingHorizontal:0
                }
            }}>
            <Tab.Screen
                name='Home'
                component={HomeTab}
                options={{ tabBarLabel: 'Home' }}
            />
               <Tab.Screen
                name='Market'
                component={MarketTab}
                options={{ tabBarLabel: 'Market' }}
            />
            <Tab.Screen
                name='Friends'
                component={FriendsTab}
                options={{ tabBarLabel: 'Friends' }}
            />
            <Tab.Screen
                name='Notifications'
                component={Notifications}
                options={{ tabBarLabel: 'Notifi' }}
            />
        </Tab.Navigator>
    )
}

export default FacebookTabs


