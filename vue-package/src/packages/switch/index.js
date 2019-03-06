import cySwitch from './cy-switch'
cySwitch.install = Vue => Vue.component(cySwitch.name, cySwitch)


// 标签的方式引入
// const install = function (Vue, opts = {}) {
//   Vue.component(cySwitch.name, CySwitch)
// }

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }
export default cySwitch
