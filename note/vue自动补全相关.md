## vscode 写 vue 时突然不会自动补全

- 解决方案 1：将 volar(Vue - Official)降级至 1.8.16 版本,并且取消该插件的自动更新
  - 相关链接:[vscode 写 vue 时突然不会自动补全?可能是插件失效了!](https://blog.csdn.net/wilsonwd/article/details/133711147)

## vscode 中 vue2、vue3 的核心插件说明

- vue2 使用 vetur,vue3 使用 volar(Vue - Official),二者不建议同时使用

## 使用 volar(Vue - Official) 写 vue2 的注意事项

- 如果 template 标签内使用 methods 内定义的函数没有智能提示，则需要将 data 放到最后
