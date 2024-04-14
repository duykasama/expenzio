const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'off',
            { allowConstantExport: true },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
    eslintPluginPrettierRecommended,
};
