const { override, fixBabelImports, addLessLoader } = require("customize-cra");
//note: server needs to be restarted when changes to modifyVars are made
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#00cc90",
      "@link-color": "#00cc90", // link color
      "@success-color": "#00cc90", // success state color
      "@warning-color": "#faad14", // warning state color
      "@error-color": "#f5222d", // error state color
      "@font-size-base": "16px", // major text font size
      "@heading-color": "#4c4c4c", // heading text color
      "@text-color": "#4c4c4c", // major text color
      "@text-color-secondary": "#4c4c4c", // secondary text color
      "@disabled-color": "#4c4c4c", // disable state color
      "@border-radius-base": "4px", // major border radius
      "@border-color-base": "#ddd", // major border color
      "@box-shadow-base": "0 0 10px rgba(0, 0, 0, 0.1)" // major shadow for layers
    }
  })
);
