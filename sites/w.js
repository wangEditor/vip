// 域名，时间有效期
try {
  window.wangEditorRegisterSite([
    // wangEditor 官网
    {
      domain: 'wangeditor.com',
      expire: '2023-8-15 23:59:59'
    },
    
    // 其他网站
  ])
} catch(err) {
  console.warn('wangEditorRegisterSite error', err)
}
