import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabsNavigation from './BottomTabsNavigation'
import DrawerTest from '../screens/DrawerTest'
import AuthStack from './AuthStack'
const Drawer = createDrawerNavigator()

const DrawersNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={BottomTabsNavigation} />
      <Drawer.Screen name='Drawer' component={DrawerTest} />
    </Drawer.Navigator>
  )
}

export default DrawersNavigation