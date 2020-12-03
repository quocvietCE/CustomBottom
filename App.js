import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import RootRouter from './src/navigation';
import RootRouter2 from './src/navigation2';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <SafeAreaView style={styles.container}> */}
      <RootRouter2 />
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default App;
