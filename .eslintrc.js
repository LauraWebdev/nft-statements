module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        'plugin:vue/recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    'plugins': [
        'vue',
    ],
    'rules': {
        'indent': ['error', 4],
        'vue/html-indent': ['error', 4, { "ignores": ["VElement[name=pre].children"] }],
        'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
        'semi': [2, 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'vue/require-default-prop': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
};
