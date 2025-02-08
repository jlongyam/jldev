import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

export default [
  {
    input: [
      'src/script.js'
    ],
    output: [
      {
        dir: 'out',
        format: 'system'
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      buble()
    ]
  }
];
