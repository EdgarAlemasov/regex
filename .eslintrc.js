module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
            ],
        'no-console': 'off',
    }
}
