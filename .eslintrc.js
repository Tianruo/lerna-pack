module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier'],
    parserOptions: {
        // 把ts结合到es中，可一套识别，对js外层文件也能生效
        project: './tsconfig.json',    },
    rules: {
        // import语法默认给禁用了，需要手动开启
        'import/no-unresolved': 'error',
    },
    settings: {
        // 扩展后缀，但不生效，实际生效的是’plugin:import/typescript‘
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    },
    // extends: ['airbnb-typescript/base', 'prettier', 'plugin:import/recommended'],
    // parserOptions: {
    //     project: './tsconfig.eslint.json',
    // },
    // rules: {
    //     'max-len': [
    //         'error',
    //         {
    //             code: 180,
    //             tabWidth: 4,
    //         },
    //     ],
    //     'max-classes-per-file': 'off',
    //     'no-plusplus': 'off',
    //     'import/prefer-default-export': 'off',
    //     'class-method': 'off',
    //     'class-methods-use-this': 'off',
    // },
    // ignorePatterns: ['packages/courseware/test/**/*', 'packages/ntp/src/cef.d.ts', 'packages/rtc/src/module.d.ts'],
}
