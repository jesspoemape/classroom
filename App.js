import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import StartScreen from './src/screens/Start';
import PickClassroomAndStudentScreen from './src/screens/PickClassroomAndStudent';
import OptionListScreen from './src/screens/OptionList';
import store from './store';

// Register Screens
Navigation.registerComponent(
  'classroom.StartScreen',
  () => StartScreen,
);
Navigation.registerComponent(
  'classroom.PickClassroomAndStudentScreen',
  () => PickClassroomAndStudentScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'classroom.OptionListScreen',
  () => OptionListScreen,
  store,
  Provider
);

//  Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'classroom.StartScreen',
    title: 'Start',
  },
});
