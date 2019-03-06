import CySwitch from './cy-switch'
CySwitch.install = Vue => Vue.component(CySwitch.name, CySwitch)


// 标签的方式引入
const install = function (Vue, opts = {}) {
  Vue.component(CySwitch.name, CySwitch)
}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  CySwitch,
  install
}
