export * from './RNMath.nitro';

import type { RNMath } from './RNMath.nitro';

import { NitroModules } from 'react-native-nitro-modules';

const mathModule = NitroModules.createHybridObject<RNMath>('RNMath');

export function multiply(...args: Parameters<typeof mathModule.multiply>) {
  return mathModule.multiply(...args);
}
