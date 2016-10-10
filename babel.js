const babelConfig = {
  presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-1', 'stage-2', 'stage-3'],
  plugins: ['add-module-exports', 'transform-runtime','transform-regenerator', 'syntax-async-functions'],
};

module.exports = babelConfig;
