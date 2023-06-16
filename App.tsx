import {View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Chats from './components/Chats';

const App = () => {
  return (
    <View>
      <Header />
      <Stories />
      <Chats />
    </View>
  );
};

export default App;
