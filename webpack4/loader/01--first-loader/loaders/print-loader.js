//w我的第一个loader

/**  将  
 *   print: hello world注释中的print:后的输出 
 *   仅限于开发环境
 */

function print(source) {
    // console.log('print the source content!')
    // console.log(source);
    return source.replace(/\/\/ *print: *(.*)/g, `console.log("$1")`);
}

module.exports = function (content) {
    return print(content);
}