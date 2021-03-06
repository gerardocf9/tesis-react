
import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: Configuration = {
    //direccion de entrada
  entry: "./src/pages/especifica.jsx",
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
    //path de salida dinamico, lleva a la carpeta compilados
    path: path.resolve(__dirname, "compilados"),
    filename: "especifica5.js",
  },

};

export default config;

