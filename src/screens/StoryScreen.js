import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

const StoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: '#000'}}>StoryScreen</Text>
    </SafeAreaView>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
