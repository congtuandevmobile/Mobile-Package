import { defineConfig } from 'tsup';

import type { Options } from 'tsup';

export default defineConfig((options: Options) => {
  return {
    ...options,
    entry: {
      index: 'src/index.tsx',
    },
    format: ['cjs', 'esm'],
    external: ['react', 'mobx-react-lite'],
    dts: true,
    clean: true,
  };
});
