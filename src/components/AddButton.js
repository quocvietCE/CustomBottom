import React, {useRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const AddBottom = () => {
  const [opened, setOpened] = useState(false);
  const buttonSize = useRef(new Animated.Value(1)).current;
  const mode = useRef(new Animated.Value(0)).current;

  const handlePress = (value) => {
    setOpened(!opened);
    console.log('value: ', value);
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(mode, {
        toValue: value,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100],
  });

  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -24],
  });

  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -150],
  });

  const plusX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 50],
  });

  const plusY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          transform: [{translateX: thermometerX}, {translateY: thermometerY}],
        }}>
        <View style={styles.secondaryButton}>
          <Feather name="thermometer" size={24} color="#fff" />
        </View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          transform: [{translateX: timeX}, {translateY: timeY}],
        }}>
        <View style={styles.secondaryButton}>
          <Feather name="clock" size={24} color="#fff" />
        </View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          transform: [{translateX: plusX}, {translateY: plusY}],
        }}>
        <View style={styles.secondaryButton}>
          <Feather name="activity" size={24} color="#fff" />
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.button, {transform: [{scale: buttonSize}]}]}>
        <TouchableHighlight
          underlayColor="#7F58FF"
          onPress={() => handlePress(opened ? 1 : 0)}>
          <Animated.View style={{transform: [{rotate: rotation}]}}>
            <FontAwesome name="plus" size={24} color="#fff" />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default AddBottom;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    // borderWidth: 1,
  },
  button: {
    backgroundColor: '#7f58ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    position: 'absolute',
    top: -60,
    shadowColor: '#7f58ff',
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#fff',
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7f58ff',
  },
});
