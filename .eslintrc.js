module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript', 'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: 'off',
        '@typescript-eslint/indent': [2, 4],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'react/button-has-type': 'warn',
        'i18next/no-literal-string': ['error', { markupOnly: true, onlyAttribute: ['fallback'] }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        semi: ['error', 'always'],
        '@typescript-eslint/semi': 'off'
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};
