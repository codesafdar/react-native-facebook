/**
 * @format
 */

import { AppRegistry, Alert } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification'

// Handling background notifications
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App)
