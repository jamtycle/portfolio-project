module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ["solid"],
    extends: ["eslint:recommended", "plugin:solid/recommended", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}", "*.config.cjs"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        "no-unused-vars": ["warn"],
        indent: ["off", 4, { SwitchCase: 1 }],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};
