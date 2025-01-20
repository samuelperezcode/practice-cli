import { defineConfig } from 'tsup';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig(({ watch = false }) => ({
  clean: true,
  dts: true,
  entry: {
    index: 'src/index.ts',
  },
  name: 'practice-cli',
  external: [],
  format: ['cjs', 'esm'],
  treeshake: isProduction,
  minify: isProduction,
  sourcemap: isProduction,
  watch,
}));