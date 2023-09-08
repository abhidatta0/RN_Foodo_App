import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import AllMenu from './src/pages/AllMenu';
import FoodDetail from './src/pages/FoodDetail';

const App = () => {
  return (
    <SafeAreaView>
      <AllMenu />
      {/* <FoodDetail /> */}
    </SafeAreaView>
  );
};

export default App;