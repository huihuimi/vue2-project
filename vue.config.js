const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_ENV === "product" ? "./" : "/",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:7788/", //目标地址 请求的后台接口
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          //路径重写
          "^/api": "",
        },
      },
    },
  },
});
