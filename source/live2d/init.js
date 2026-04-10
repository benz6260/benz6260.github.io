// 最终版：100%本地模型，不用远程API
window.addEventListener('load', function() {
  initWidget({
    waifuPath: '/live2d/waifu-tips.json',
    cdnPath: '/live2d-widget-model-koharu/',
    apiPath: '',
    useCDN: true
  });
});
