
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss'


export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [typescript(),scss({ output: false })],
};
