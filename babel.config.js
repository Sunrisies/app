// module.exports = {
//   presets: ['module:@react-native/babel-preset', 'nativewind/babel',
//     [
//       "babel-preset-expo",
//       {
//         jsxImportSource: "nativewind",
//       },
//     ],
//     ["@babel/preset-react", {
//       "runtime": "automatic"
//     }]],

//   plugins: ['nativewind/babel']
//   // plugins: [
//   //   ['@babel/plugin-proposal-decorators', { legacy: true, decoratorsBeforeExport: false }],
//   //   '@babel/plugin-syntax-decorators',
//   // ],
// };
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: ['react-native-reanimated/plugin'],
  };
};
