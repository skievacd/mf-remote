const { override, addWebpackPlugin } = require('customize-cra');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require('./package.json').dependencies

module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
        name: 'remote',
        filename: 'remoteEntry.js', // Archivo de entrada para la federación
        exposes: {
            './Button': './src/components/Button', // Exponemos el componente
        },
        shared: {
            ...deps,
            react: { singleton: true, requiredVersion: deps.react, eager: false  },
            'react-dom': { singleton: true, requiredVersion: deps['react-dom'], eager: false  }
        },
    })
  )
);