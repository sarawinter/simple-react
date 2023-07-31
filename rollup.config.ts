import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postCSS from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel"

import pkg from "./package.json" assert { type: "json" };
import sucrase from "@rollup/plugin-sucrase";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "./lib/cjs/index.js",
      format: "cjs",
    },
    {
      file: "./lib/esm/index.js",
      format: "es",
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    babel({
      presets: ["@babel/preset-react"],
    }),
    nodeResolve(),
    commonjs(),
    typescript(),
    postCSS(),
    sucrase({
      exclude: ["node_modules/**"],
      transforms: ["typescript", "jsx"],
    }),
  ],
};
