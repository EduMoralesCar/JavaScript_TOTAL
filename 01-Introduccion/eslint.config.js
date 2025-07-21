export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
            },
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': 'warn',
            'semi': ['error', 'always'],
        },
    },
];