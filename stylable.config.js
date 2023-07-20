//@ts-check
const { typedConfiguration } = require("@stylable/cli");

exports.stcConfig = typedConfiguration({
  options: {
    srcDir: "./components",
    outDir: "./st-types",
    dts: true,
  },
});
