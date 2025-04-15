import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/notify-hub.umd.js",
      name: "NotifyHub",
      format: "umd",
      globals: {},
    },
    {
      file: "dist/notify-hub.ems.js",
      format: "es",
    },
  ],
  plugins: [typescript(), terser()],
  external: [],
};
