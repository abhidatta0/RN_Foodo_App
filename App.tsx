import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
    <Navigation />
    </Provider>
  );
};

export default App;