import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: [
      'www/source/js/script.js'
    ],
    output: [
      {
        dir: 'www/js',
        format: 'system'
      }
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];
