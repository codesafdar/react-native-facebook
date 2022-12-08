import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken')
  if (fcmToken) {
    console.log('It is old token>>', fcmToken);
  }
  else {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('new token::>', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken)
      }
    }
    catch (error) {
      console.log('error is:::>>', error);
    }
  }
};

export const notificationListener = async () => {
  
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging().onMessage(remoteMessage => {
    console.log(
      'Received in foreground>>::',
      remoteMessage.notification
    )
  })

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
}