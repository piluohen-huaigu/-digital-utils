import baseConfig from './rollup.config.base';
import serve from 'rollup-plugin-serve';

import { name } from '../package.json';

export default {
  ...baseConfig,
  output: [
    {
      file: `lib/${name}.js`,
      format: 'umd',
      name,
      sourcemap: true
    },
    {
      file: `lib/${name}.cjs.js`,
      format: 'cjs',
      name,
      sourcemap: 'inline'
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8090,
      contentBase: ['']
    })
  ]
};
