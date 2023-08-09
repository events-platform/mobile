import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import WebView from 'react-native-webview';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {notificationService} from './NotificationService';
import {URL} from './URL';

function App(): JSX.Element {
  React.useEffect(() => {
    notificationService.configure();
  }, []);

  React.useEffect(() => {
    const date = new Date();
    date.setHours(17);

    notificationService.scheduleNotification(
      'Появились новые мероприятия. Проверяй, там наверняка что-то интересное!',
      date,
    );
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <WebView url={URL} />
    </SafeAreaView>
  );
}

export default App;
