import { View, Text, StyleSheet } from 'react-native';
import {multiply} from "@tuannc2/react-native-math";

export const MathScreen: React.FC = () => {

  const result = multiply(3, 4);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});