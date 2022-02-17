
import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: Configuration = {
    //direccion de entrada
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
     // New rules to load css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    //path de salida dinamico, lleva a la carpeta static general.
    path: path.resolve(__dirname, "compilados"),
    filename: "bundle.js",
  },

};

export default config;




/*
const path = require('path');

module.exports = {
  //directorio de frontend, ya compilado y funcional
  //entry: './frontend/src/app.js',
  //directorio de frontend, prueba entrada de datos
  entry: './pages/generar_orden_despacho.js',

  output: {
    //path de salida dinamico, lleva a la carpeta static general.
    path: path.join(__dirname, 'compilados'),

    filename: 'generar_orden_despacho.js'
  },
   module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // New rules to load css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};*/
