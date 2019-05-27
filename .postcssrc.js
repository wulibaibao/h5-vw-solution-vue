module.exports = {
    plugins: {
        // 解决@import引入路径问题。使用这个插件，可以让你很轻易的使用本地文件、node_modules或者web_modules的文件
        "postcss-import": {},
        // 处理文件，比如图片文件、字体文件等引用路径的处理。
        "postcss-url": {},
        // 用来处理元素容器宽高比
        "postcss-aspect-ratio-mini": {}, 
        // 用来处理移动端1px的解决方案
        "postcss-write-svg": {  
            utf8: false
        },
        "postcss-cssnext": {},
        // px单位转换为vw、vh、vmin或者vmax这样的视窗单位
        "postcss-px-to-viewport": {
            viewportWidth: 750,     // (Number) The width of the viewport.
            viewportHeight: 1334,    // (Number) The height of the viewport.
            unitPrecision: 3,       // (Number) The decimal numbers to allow the REM units to grow to.
            viewportUnit: 'vw',     // (String) Expected units.
            selectorBlackList: ['.ignore', '.hairlines'],  // (Array) The selectors to ignore and leave as px.
            minPixelValue: 1,       // (Number) Set the minimum pixel value to replace.
            mediaQuery: false       // (Boolean) Allow px to be converted in media queries.
        }, 
        // 主要是给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作
        "postcss-viewport-units":{},
        "cssnano": {
            preset: "advanced",
            autoprefixer: false,
            "postcss-zindex": false
        }
    }
}