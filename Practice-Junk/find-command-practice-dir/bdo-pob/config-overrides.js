const workboxPlugin = require('workbox-webpack-plugin')
const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired');
const { compose } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less'); //might not need this rewire, Create React App added guide about how to add Less support to CRA without the need of ejecting. See plugin github page.

//module.exports = {
//  webpack: function (config, env) {
//    if (env === 'production') {
//      const workboxConfigProd = {
//        swSrc: path.join(__dirname, 'public', 'custom-service-worker.js'),
//        swDest: 'custom-service-worker.js',
//        importWorkboxFrom: 'disabled'
//      }
//      config = removeSWPrecachePlugin(config)
//      config.plugins.push(new workboxPlugin.InjectManifest(workboxConfigProd))
//    }
//    return config
//  }
//}

module.exports = function override(config, env) {
  config = injectBabelPlugin(
	['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
	config,
  );
  config = rewireLess.withLoaderOptions({
	//modify below line to add primary theme color, or use styled components for the purpose
	//	modifyVars: { "@primary-color": "#1DA57A" },
	javascriptEnabled: true,
  })(config, env);
  return config;
};

//function removeSWPrecachePlugin (config) {
//  const swPrecachePluginIndex = config.plugins.findIndex((element) => {
//    return element.constructor.name === 'SWPrecacheWebpackPlugin'
//  })
//  if (swPrecachePluginIndex !== -1) {
//    config.plugins.splice(swPrecachePluginIndex, 1)
//  }
//  return config
//}
//
//const rewireWorkbox = function (config, env) {
//    if (env === 'production') {
//      const workboxConfigProd = {
//        swSrc: path.join(__dirname, 'public', 'custom-service-worker.js'),
//        swDest: 'custom-service-worker.js',
//        importWorkboxFrom: 'disabled'
//      }
//      config = removeSWPrecachePlugin(config)
//      config.plugins.push(new workboxPlugin.InjectManifest(workboxConfigProd))
//    }
//    return config
//  }
// 
//const rewireAntd = function override(config, env) {
//  config = injectBabelPlugin(
//	['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
//	config,
//  )
//  return config;
//}
