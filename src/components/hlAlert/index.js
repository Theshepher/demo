// index.js文件
import Vue from 'vue'
import HlAlert from './HlAlert'

let currentComponent
HlAlert.install = function (options, ensureHanlder, cancelHandler) {
  if (!ensureHanlder) {
    ensureHanlder = function () {}
  }
  if (!cancelHandler) {
    cancelHandler = function () {}
  }
  // 定义data 
  if (!options) {
    options = {}
  }
  options['message'] = options.message ? options.message : '' // 一级标题
  options['title'] = options.title ? options.title : '' // 弹窗顶部信息
  options['subMessage'] = options.subMessage ? options.subMessage : '' // 提示内容
  options['isCloseIcon'] = options.isCloseIcon || false // 弹窗顶部关闭按钮是否展示
  options['ensureBtnText'] = options.ensureBtnText ? options.ensureBtnText : '确认' // 自定义确认按钮文字
  if (!currentComponent) {
    const MyHlAlert = Vue.extend(HlAlert)
    // 创建一个vue的实例
    currentComponent = new MyHlAlert({
      data: options,
      methods: {
        ensureHanlder, // 确认按钮回调
        cancelHandler // 取消按钮回调
      }
    }).$mount()
  }
  // 页面上弹窗没有关闭时不再往页面上添加该弹窗
  if (currentComponent.isVisible) {
    return false
  }
  console.log( document.querySelector('body').appendChild(currentComponent.$el))
  document.querySelector('body').appendChild(currentComponent.$el)
   // 定义了控制显示弹窗的变量 isVisible, HlAlert.vue文件里关闭弹窗时要把该值赋值为false，
  // （HlAlert.vue文件里可以使用this.isVisible获取到该变量）下次点击展示弹窗时才能继续显示
  
  currentComponent.isVisible = true
}

export default HlAlert
