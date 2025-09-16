import { memo } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import type { LayoutChangeEvent } from 'react-native';

const backgroundColor = '#610B00';

//@ts-ignore
const Architecture = "New Arch"

export const DevPanel = memo(function DevPanel() {
  const translateY = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    translateY.value = -e.nativeEvent.layout.height / 2;
  };

  const animatedStyles = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [{ rotate: '-45deg' }, { translateY: translateY.value }],
    };
  });

  return (
    <View pointerEvents="none" style={styles.root}>
      <Animated.View
        style={[styles.container, animatedStyles]}
        onLayout={onLayout}
      >
        <Text style={styles.text}>{Architecture}</Text>
      </Animated.View>
    </View>
  );
});

const boxWidth = Platform.OS === 'android' ? 60 : 70;
const containerWidth = boxWidth * Math.sqrt(2);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    left: -(containerWidth - boxWidth) / 2,
    paddingVertical: 4,
    position: 'relative',
    right: 0,
    width: containerWidth,
  },
  root: {
    height: boxWidth,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: boxWidth,
  },
  text: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});
