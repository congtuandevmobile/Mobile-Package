import { DevPanel } from './component/DevPanel';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRoot } from './AppStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  // require('./devtools/ReactotronConfig.ts');
}

function MyAppTestFeatures() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <AppRoot />

        <DevPanel />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default MyAppTestFeatures;
