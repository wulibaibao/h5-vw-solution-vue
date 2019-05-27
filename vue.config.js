
module.exports = {
    devServer : {
        proxy : {
            '/admin/' : {
                target: `http://www.baidu.com/` ,  
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

