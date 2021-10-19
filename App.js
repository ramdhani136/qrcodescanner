import React from 'react';
import Router from './src/config/router';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/config//redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
