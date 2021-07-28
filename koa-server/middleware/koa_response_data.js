//处理业务逻辑的中间件，读取json数据
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async(ctx, next) => {
    //根据URL
    const url = ctx.request.url
    let filepath = url.replace('/api', '')
    filepath = '../data' + filepath + '.json'
    filepath = path.join(__dirname, filepath)
    try {
        const ret = await fileUtils.getFileJsonData(filepath);
        ctx.response.body = ret;
    } catch (error) {
        const errorMsg = {
                message: '读取失败，路径不存在',
                status: 404
            }
            //设置响应体
        ctx.response.body = JSON.stringify(errorMsg)
    }
    // const ret = await fileUtils.getFileJsonData(filePath)
    // ctx.response.body = ret
    console.log(url);
    await next()
}