import {memo} from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const MemoizedApp = memo(App);

AppRegistry.registerComponent(appName, () => MemoizedApp);