import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import StartScreen from './src/screens/Start';

// Register Screens
Navigation.registerComponent(
  'classroom.StartScreen',
  () => StartScreen,
);

//  Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'classroom.StartScreen',
    title: 'Start',
  },
});
