/**
 * Created by Administrator on 2017/9/30.
 */
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isProdMode ? 'http://api.vnshop.cn/api/' : 'api/'
}
