import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.js", // Point d'entrée principal
  output: [
    {
      file: pkg.main, // Format CommonJS (Node.js)
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module, // Format ES Module (ES6 import/export)
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclut les peer dependencies
    resolve({ extensions: [".js", ".jsx"]}), // Résout les modules dans node_modules
    commonjs(), // Convertit les modules CommonJS en ES6
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }), // Utilise Babel pour transpiler
    postcss(), // Permet l'import de CSS
  ],
  external: ["react", "react-dom"], // Empêche React d'être inclus dans le bundle
};