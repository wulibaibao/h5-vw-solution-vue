
module.exports = {
    devServer : {
        proxy : {
            '/h5/' : {
                target: `http://api-dev.vlightv.com` ,  
                changeOrigin:true,
            },
        },
        port : 8986,
        disableHostCheck : true,
    },
    chainWebpack: config => {
        config
            .devtool( false ) 
            .externals({
                'vue' : 'Vue',
                'vue-router' : 'VueRouter',
                'vuex' : 'Vuex',
                'better-scroll' : 'BScroll',
                'axios' : 'axios',
            })
    }
}