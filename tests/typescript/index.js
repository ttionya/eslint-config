module.exports = {
  root: true,

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },

      plugins: [
        '@typescript-eslint',
      ],

      rules: {},
    },
  ],
}
