import glob from "glob";
import resolve from "@rollup/plugin-node-resolve";
import * as path from "path";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import alias from "@rollup/plugin-alias";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const onwarn = (warning, onwarn) =>
  (warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const aliasConfig = {
  entries: [
    {
      find: "parts",
      replacement: path.resolve(__dirname, "src", "parts"),
    },
    {
      find: "components",
      replacement: path.resolve(__dirname, "src", "components"),
    },
    {
      find: "stores",
      replacement: path.resolve(__dirname, "src", "stores"),
    },
    {
      find: "lib",
      replacement: path.resolve(__dirname, "src", "lib"),
    },
  ],
};

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias(aliasConfig),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),

      svelte({
        dev,
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias(aliasConfig),
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      svelte({
        generate: "ssr",
        dev,
      }),
      resolve({
        dedupe: ["svelte"],
      }),
      commonjs(),
      {
        buildStart() {},
      },
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      alias(aliasConfig),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode),
      }),
      resolve(),

      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
};
