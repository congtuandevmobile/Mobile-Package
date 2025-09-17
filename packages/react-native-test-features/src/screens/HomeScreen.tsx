import { ScrollView, StyleSheet, Button } from 'react-native';
import type { RootStackScreenProp } from '../navigation';

type ScreenProps = RootStackScreenProp<'Home'>;

export const HomeScreen: React.FC<ScreenProps> = function HomeScreen({
  navigation,
}) {
  const testRNMath = () => {
    navigation.navigate('RnMathTest');
  };

  // IGNITE_GENERATE_BUTTON_FUNCTION_TEST
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Button title="Test RN Math" onPress={testRNMath} />
      {/* IGNITE_GENERATE_BUTTON_COMPONENT_TEST */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    gap: 16,
  },
  root: { flex: 1 },
});
