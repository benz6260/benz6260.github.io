// 看板娘配置 - 电脑+手机双端正常显示
window.live2dSettings = {
  model: {
    use: "https://cdn.jsdelivr.net/npm/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json"
  },
  display: {
    position: "right",
    width: 250,
    height: 300
  },
  mobile: {
    show: true,
    scale: 0.5,     // 移动端缩放比例，避免太大
    width: 120,     // 移动端宽度
    height: 200     // 移动端高度
  },
  react: {
    opacityDefault: 0.7,
    opacityOnHover: 1
  }
};