const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    module: {
        // exclude node_modules
        rules: [
            //static resources (images)
            {
                test: /\.(png|jpe?g|gif|jp2|webp)$/,
                type: 'asset/resource'
            },
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            // `ts` and `tsx` files are parsed using `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    // Add your custom Less variables here
                                    '@image-path': `"${path.resolve(__dirname, 'assets/images/')}"`,
                                },
                            },
                        },
                    }
                ]
            }
        ]
    },
    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        alias: {
            '@images': path.resolve(__dirname, 'assets/images'),
            '@styles': path.resolve(__dirname, 'src/common/styles')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        open: true,
        port: 3000,
    }
};