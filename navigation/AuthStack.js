import React from 'react'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import JoinFaceBook from '../screens/JoinFaceBook'
import DateofBirth from '../screens/DateofBirth'
import Gender from '../screens/Gender'
import MobileNumber from '../screens/MobileNumber'
import { createStackNavigator } from '@react-navigation/stack'
import NameAuth from '../screens/NameAuth'
const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{
      // headerStyle: {
      //   backgroundColor:'green'
      // },
      // headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }

    }}>
      <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name='join-facebook'
        component={JoinFaceBook}
        options={{ headerTitle: 'Create account', headerBackTitleVisible: false }} />
      <Stack.Screen
        name='nameAuth'
        component={NameAuth}
        options={{ headerTitle: 'Name', headerBackTitleVisible: false }} />
      <Stack.Screen
        name='date-of-birth'
        component={DateofBirth}
        options={{ headerTitle: 'Date of Birth', headerBackTitleVisible: false }} />
      <Stack.Screen
        name='gender'
        component={Gender}
        options={{ headerTitle: 'Gender', headerBackTitleVisible: false }} />
      <Stack.Screen
        name='mobile-number'
        component={MobileNumber}
        options={{ headerTitle: 'Mobile Number', headerBackTitleVisible: false }} />

      <Stack.Screen name='signUp' component={SignUp} />

    </Stack.Navigator>
  )
}

export default AuthStack