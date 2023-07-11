//@ts-check
const { typedConfiguration } = require("@stylable/cli");

exports.stcConfig = typedConfiguration({
  options: {
    srcDir: "./app",
    outDir: "./st-types",
    dts: true,
  },
});
