# Vue 3 + Vite + postcss-px-to-viewport-8-plugin 移动端项目框架

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

node 版本：20.11.1
操作命令

1. npm install
2. npm run dev
3. npm run build
4. npm run lint

vscode 客户端配置(代码规范检测，必须装)：

1. 安装 ESLint 插件
2. 安装 Prettier-Code formatter 插件
3. File-Preferences-Settings 配置一下代码

{
"security.workspace.trust.untrustedFiles": "open",
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnsave": {
"source.fixAll.eslint": "explicit"
},
//把prettier设置为vscode默认的代码格式化工具"editor.defaultformatter":"esbenp,prettier-vscode"//vue文件的默认格式化工具选择prettier"[vue]
"[vue]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
}

