/**
 * Created by zhouhangfeng on 2019/8/29.
 */
const { override, fixBabelImports } = require('customize-cra');
 module.exports = override(
       fixBabelImports('import', {
             libraryName: 'antd',
         libraryDirectory: 'es',
         style: 'css',
       }),
 );