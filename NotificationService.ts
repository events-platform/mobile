import PushNotification from 'react-native-push-notification';

class NotificationService {
  configure = () => {
    PushNotification.configure({
      onNotification: (notification: any) => {
        console.log('Notification:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };

  scheduleNotification = (message: string, date: Date) => {
    PushNotification.localNotificationSchedule({
      message: message,
      date: date,
    });
  };
}

export const notificationService = new NotificationService();
