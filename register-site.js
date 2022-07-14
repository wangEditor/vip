/**
 * @description vip 网站信息
 * @author wangfupeng
 */

try {
  window.__wangEditorRegisterVipSite([

    // wangEditor demo
    {
      name: 'wangEditor-demo',
      hostname: 'www.wangeditor.com', // location.hostname
      expire: '2023-8-15 23:59:59'  // 失效时间
    },

    // 其他网站
  ])
} catch(err) {
  console.warn('wangEditorRegisterVipSite error', err)
}
