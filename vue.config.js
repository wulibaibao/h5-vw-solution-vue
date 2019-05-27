
let targetUrl = 'http://cms-test.vlightv.com'; //'http://192.168.1.222',
// let targetUrl = 'http://cms.vlightv.com'

module.exports = {
    devServer : {
        proxy : {
            '/admin/' : {
                target: targetUrl ,  
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
            })
    }
}

