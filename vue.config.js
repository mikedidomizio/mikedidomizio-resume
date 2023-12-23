/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config
                .plugin('extract-css')
                .tap((args) => {
                    args[0].filename = 'resume-css.[name].[contenthash:8].css';
                    args[0].chunkFilename = 'resume-css.[name].[contenthash:8].css';
                    return args;
                })
                .end()
        }
    },
    // for js files
    assetsDir: 'resume-js',
}
