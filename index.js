module.exports = function () {
  return {
    name: 'tslib-resolve-id',
    resolveId(source, importer) {
      if (source === 'tslib.js' || source === 'tslib') {
        return this.resolve(require.resolve('tslib'), importer);
      }

      return null;
    },
  };
};
