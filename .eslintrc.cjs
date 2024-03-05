module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-essential", "plugin:prettier/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["src/**/*.vue"],
      // 关闭组件名需要多个单词组成的规则
      rules: { "vue/multi-word-component-names": "off" },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    // 允许catch空着
    "no-empty": ["error", { allowEmptyCatch: true }],
  },
};
