import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import DrawersNavigation from './navigation/DrawersNavigation'
import AuthStack from './navigation/AuthStack'
import { NativeBaseProvider } from "native-base";
import FacebookHome from './navigation/FacebookHome'
import { requestUserPermission, notificationListener } from './components/AndroidTesting';
import messaging from '@react-native-firebase/messaging'
import { Alert } from 'react-native';
import PushNotification from 'react-native-push-notification';



const App = () => {
  const createChannel = async() => {
   await PushNotification.createChannel(
      {
        channelId: 'Android Testing',
        channelName: 'Facebook Clone'
      }
    )
  }

  useEffect(() => {

    requestUserPermission()
    notificationListener()
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      PushNotification.localNotification({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
        createChannel,
      });
    });
    return unsubscribe;
  }, [])

  const isLoggedIn = true
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {isLoggedIn ?
          <FacebookHome />
          : <AuthStack />
        }
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
