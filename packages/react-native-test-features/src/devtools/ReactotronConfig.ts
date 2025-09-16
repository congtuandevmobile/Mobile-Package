/**
 * This file does the setup for integration with Reactotron, which is a
 * free desktop app for inspecting and debugging your React Native app.
 * @see https://github.com/infinitered/reactotron
 */
import { NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { ArgType } from 'reactotron-core-client';

import { Reactotron } from './ReactotronClient';

const reactotron = Reactotron.configure({
  name: DeviceInfo.getDeviceNameSync(),
  getClientId() {
    return Promise.resolve(DeviceInfo.getUniqueIdSync());
  },
  onConnect: () => {
    /** since this file gets hot reloaded, let's clear the past logs every time we connect */
    Reactotron.clear();
  },
  onDisconnect: () => {
    // queryClientManager.unsubscribe();
  },
});

if (Platform.OS !== 'web') {
  reactotron.useReactNative({
    networking: {
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    },
    editor: true,
    storybook: true,
    overlay: true,
    asyncStorage: false,
    errors: {
      veto: (frame) =>
        frame.fileName.indexOf('/node_modules/react-native/') >= 0,
    },
    devTools: true,
  });
}

/**
 * Reactotron allows you to define custom commands that you can run
 * from Reactotron itself, and they will run in your app.
 *
 * Define them in the section below with `onCustomCommand`. Use your
 * creativity -- this is great for development to quickly and easily
 * get your app into the state you want.
 *
 * NOTE: If you edit this file while running the app, you will need to do a full refresh
 * or else your custom commands won't be registered correctly.
 */
reactotron.onCustomCommand({
  title: 'Show Dev Menu',
  description: 'Opens the React Native dev menu',
  command: 'showDevMenu',
  handler: () => {
    Reactotron.log('Showing React Native dev menu');
    NativeModules.DevMenu.show();
  },
});

reactotron.onCustomCommand<[{ name: 'link'; type: ArgType.String }]>({
  title: 'Trigger deep link',
  description: 'Trigger web/deep link for navigate to screen specific',
  command: 'triggerDeepLink',
  handler: (arg) => {
    const { link } = arg ?? {};
    if (link) {
      Reactotron.display({ name: 'DeepLink', value: link, preview: link });
      // MyLinking.openLink(link);
    } else {
      Reactotron.display({ name: 'DeepLink', value: 'Link is null!' });
    }
  },
  args: [{ name: 'link', type: ArgType.String }],
});

reactotron.onCustomCommand({
  title: 'Reset Root Store',
  description: 'Resets the MST store',
  command: 'resetStore',
  handler: () => {
    Reactotron.log('resetting store');
  },
});

reactotron.onCustomCommand({
  title: 'Reset Navigation State',
  description: 'Resets the navigation state',
  command: 'resetNavigation',
  handler: () => {
    Reactotron.log('resetting navigation state');
    // resetRoot({ index: 0, routes: [] });
  },
});

reactotron.onCustomCommand<[{ name: 'route'; type: ArgType.String }]>({
  command: 'navigateTo',
  handler: (args) => {
    const { route } = args ?? {};
    if (route) {
      Reactotron.log(`Navigating to: ${route}`);
      // navigate(route as any); // this should be tied to the navigator, but since this is for debugging, we can navigate to illegal routes
    } else {
      Reactotron.log('Could not navigate. No route provided.');
    }
  },
  title: 'Navigate To Screen',
  description: 'Navigates to a screen by name.',
  args: [{ name: 'route', type: ArgType.String }],
});

reactotron.onCustomCommand({
  title: 'Go Back',
  description: 'Goes back',
  command: 'goBack',
  handler: () => {
    Reactotron.log('Going back');
    // goBack();
  },
});

console.tron = reactotron;

declare global {
  interface Console {
    /**
     * Reactotron client for logging, displaying, measuring performance, and more.
     * @see https://github.com/infinitered/reactotron
     * @example
     * if (__DEV__) {
     *  console.tron.display({
     *    name: 'JOKE',
     *    preview: 'What's the best thing about Switzerland?',
     *    value: 'I don't know, but the flag is a big plus!',
     *    important: true
     *  })
     * }
     */
    tron: typeof reactotron;
  }
}

/**
 * Now that we've setup all our Reactotron configuration, let's connect!
 */
// import the plugin
// tell Reactotron to use this plugin
reactotron.connect();
