/**
 * @description name w 开头的网站信息
 * @author wangfupeng
 */

try {
  window.wangEditorRegisterSite([
    // wangEditor demo
    {
      name: 'wangEditor-demo',
      domain: 'www.wangeditor.com', // location.hostname
      expire: '2023-8-15 23:59:59'  // 失效时间
    },

    // 其他网站
  ])
} catch(err) {
  console.warn('wangEditorRegisterSite error', err)
}
