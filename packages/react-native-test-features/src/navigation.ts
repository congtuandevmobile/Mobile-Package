import { createNativeStackNavigator,} from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  RnMathTest: undefined;
  // IGNITE_GENERATE_DEFINE_NAVIGATION
};

export type RootStackScreenProp<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export const RootStack = createNativeStackNavigator<RootStackParamList>();
