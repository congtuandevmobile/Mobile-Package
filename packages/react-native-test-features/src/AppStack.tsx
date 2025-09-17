import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';
import * as Screens from './screens';

export function AppRoot() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Screens.HomeScreen} />
        <RootStack.Screen name="RnMathTest" component={Screens.MathScreen} />
        {/* IGNITE_GENERATE_SCREEN_TEST */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
