import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

export default [
  {
    input: 'src/num.js',
    output: { file: 'dist/num.js', format: 'system' },
    plugins: [ resolve(), commonjs(), buble() ]
  }, {
    input: 'src/mix.js',
    output: { file: 'dist/mix.js', format: 'system' },
    plugins: [ resolve(), commonjs(), buble() ]
  }
];
