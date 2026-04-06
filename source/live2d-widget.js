// 看板娘配置 - 启用手机端显示，使用koharu模型
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
    show: true
  },
  react: {
    opacityDefault: 0.7,
    opacityOnHover: 1
  }
};
