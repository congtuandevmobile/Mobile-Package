import { ScrollView, StyleSheet, Button } from 'react-native';
import type { RootStackScreenProp } from '../navigation';

type ScreenProps = RootStackScreenProp<'Home'>;

export const HomeScreen: React.FC<ScreenProps> = function HomeScreen({
  navigation,
}) {
  const testHome = () => {
    navigation.navigate('Home');
  };

  // IGNITE_GENERATE_BUTTON_FUNCTION_TEST
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Button title="Test Home" onPress={testHome} />
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
