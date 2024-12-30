const { override, addWebpackPlugin } = require('customize-cra');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js', 
      exposes: {
        './Button': './src/components/Button',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0', eager: true },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0', eager: true }
      }
    })
  ),
  (config) => {
    config.output.publicPath = 'auto'; // 👈 Asegúrate de tener esto
   // config.output.crossOriginLoading = 'anonymous'; // 👈 Esto soluciona problemas de CORS
    return config;
  }
);
