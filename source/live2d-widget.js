// 看板娘配置 - 启用手机端显示，使用koharu模型
window.live2dSettings = {
  model: {
    use: "live2d-widget-model-koharu",
    onRuntimeChecked: true
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
