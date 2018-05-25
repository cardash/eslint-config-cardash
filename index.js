module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  globals: {
    expect: true,
    window: true,
    document: true,
    jest: true,
    test: true,
    fetch: true,
    process: true,
    localStorage: true,
    navigator: true,
    Cypress: true,
    after: true,
    afterAll: true,
    afterEach: true,
    before: true,
    beforeAll: true,
    beforeEach: true,
    context: true,
    cy: true,
    cypress: true,
    describe: true,
    from: true,
    integration: true,
    it: true,
    tests: true,
  },
  rules: {
    camelcase: [0],
    'comma-dangle': [1, {
      arrays: 'only-multiline',
      objects: 'always',
      imports: 'always',
      exports: 'always',
      functions: 'ignore',
    }],
    /* it's unfortunate that we need this rule... but Safari and mobile Safari
    are extremely limiting in what you can do with `button` components */
    'jsx-a11y/no-static-element-interactions': 0,
    // TODO this rule shouldn't be necessary, but there appears to be a bug
    // with jsx-a11y. when that's resolved, this can be removed as a rule
    'jsx-a11y/href-no-hash': 'off',
    /* package.json has been deduped, which triggers this on most packages. We
       will disable this rule for now while we figure out a good solution. */
    'import/no-extraneous-dependencies': 0,
    semi: [2, 'never'],
    'arrow-body-style': 0,
    quotes: ['error', 'single'],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'], }],
    'global-require': 0,
    'no-plusplus': 0,
    'no-param-reassign': [2, { props: false, }],
    'no-mixed-operators': 0,
    'no-continue': 0,
    'react/forbid-prop-types': 0,
  },
}
