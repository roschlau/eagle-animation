const fs = require('fs');

module.exports = {
  input: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    // '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      extensions: [],
    },
    lngs: ['en', 'fr', 'de'],
    defaultValue: (lng, ns, key) => (lng === 'en' ? key : '__NOT_TRANSLATED__'),
    resource: {
      loadPath: 'static/i18n/{{lng}}.json',
      savePath: 'static/i18n/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    transform(file, enc, done) {
      const { parser } = this;
      const content = fs.readFileSync(file.path, enc);
      let count = 0;
      parser.parseFuncFromString(content, { list: ['t'] }, (key, options) => {
        parser.set(key, { ...options, nsSeparator: false, keySeparator: false });
        count++;
      });
      if (count) {
        console.log(`i18next-scanner: count=${count}, file=${JSON.stringify(file.relative)}`);
      }
      done();
    },
  },
};
