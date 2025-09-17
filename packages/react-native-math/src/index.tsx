import { NitroModules } from 'react-native-nitro-modules';
import type { Math } from './Math.nitro';

const MathHybridObject =
  NitroModules.createHybridObject<Math>('Math');

export function multiply(a: number, b: number): number {
  return MathHybridObject.multiply(a, b);
}
