import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DiscoverScreen</Text>
    </SafeAreaView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
