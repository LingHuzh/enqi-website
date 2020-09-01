// const webpack = require('webpack');
// const path = require('path');
// const config = require('./dev.config');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const IS_PROD = process.env.NODE_ENV == 'production'
// const seen = new Set();
// const nameLength = 4;

//预渲染
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');



// let plugins = [];
// if (IS_PROD) {
//     // plugins.push(new BundleAnalyzerPlugin())
//     plugins.push(
//         new webpack.NamedChunksPlugin(chunk => {
//             if (chunk.name) {
//                 return chunk.name
//             }
//             const modules = Array.from(chunk.modulesIterable)
//             let mods = modules.map(m => m.id);
//             if (modules.length > 1) {
//                 const hash = require('hash-sum');
//                 const joinedHash = hash(mods.join('_'));
//                 let len = nameLength;
//                 while (seen.has(joinedHash.substr(0, len))) len++;
//                 seen.add(joinedHash.substr(0, len));
//                 return `${mods[mods.length - 1].id}-${joinedHash.substr(0, len)}`
//             } else {
//                 return modules[0].id
//             }
//         })
//     )
// }

module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({//这里是配置项，详见官方文档
                        rootValue: 16, // 换算的基数
                        // selectorBlackList: ['weui','mu'], // 忽略转换正则匹配项
                        propList: ['*'],
                    }),
                ]
            }
        },
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致。
                    // 下面这句话非常重要！！！
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname,'dist'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    routes: ['/', '/cityDetail','/footer','/nav','/partner','/teacher','/contact','/site','/product','/aboutus','/ingclass','/ideaTheory','/idea','/train','/childrenrecovery','/patriarch'],
                    // 这个很重要，如果没有配置这段，也不会进行预编译
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
        };
    }

    // configureWebpack: {
    //     devtool: IS_PROD ? false : 'source-map',
    //     optimization: {
    //         moduleIds: 'hashed',
    //         namedChunks: true,
    //         namedModules: true,
    //         runtimeChunk: {
    //             name: 'manifest'
    //         },
    //         splitChunks: {
    //             chunks: 'all',
    //             name: false,
    //             cacheGroups: {
    //                 libs: {
    //                     name: 'vendor-libs',
    //                     minChunks: 2,
    //                     priority: 10,
    //                     test: /[/]node_modules[/]/,
    //                     chunks: 'initial' // 只打包初始时依赖的第三方
    //                 },
    //                 commons: {
    //                     name: 'common-chunks',
    //                     test: path.resolve('src/components'), // 可自定义拓展你的规则
    //                     minChunks: 2, // 最小共用次数
    //                     priority: 5,
    //                     reuseExistingChunk: true
    //                 },
    //                 ui: {
    //                     name: 'common-ui', // 单独将 elementUI 拆包
    //                     priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
    //                     test: /[/]node_modules[/]element-ui[/]/
    //                 },
    //                 vendor: {
    //                     name: 'vendor',
    //                     test: chunks => {
    //                         return chunks.context && chunks.context.indexOf('node_modules') !== -1
    //                     },
    //                     minChunks: 1,
    //                     chunks: 'all',
    //                     priority: 1,
    //                     reuseExistingChunk: true
    //                 },
    //                 default: false
    //             }
    //         }
    //     },
    //     plugins: [...plugins],
    //     resolve: {
    //         modules: [
    //             // 指定在这些目录里寻找引用的库，提高搜索效率
    //             path.resolve(__dirname, './node_modules')
    //         ]
    //     }
    // }
};
