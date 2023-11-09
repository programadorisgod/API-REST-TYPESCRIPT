module.exports = {
  'env': {
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'import'
  ],
  'rules': {
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-unresolved': [
      'error',
      {
        'plugins':[
          'module-resolve',
          {
            'alias': {
              '@routes': './src/routes',
              '@controllers': './src/controllers',
              '@services': './src/services',
              '@models': './src/models',
              '@config': './src/config',
              '@utils': './src/utils',
              "@interfaces": "./src/interfaces"
            }
          }
        ]
      }
    ],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
