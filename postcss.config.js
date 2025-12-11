module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 394, // 你的设计稿宽度
      viewportHeight: 852, // 你的设计稿高度
      unitPrecision: 3, // 小数点精度
      viewportUnit: 'rpx', // 转换为 rpx（关键修改）
      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类
      minPixelValue: 1, // 小于等于1px不转换
      mediaQuery: false,
      exclude: [/node_modules/]
    }
  }
}
