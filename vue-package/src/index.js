import cySwitch from './packages/switch/index'
const components = [
  cySwitch
]
const install = function (Vue, opts={}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== window && window.Vue) {
  install(window.Vue)
}

export default {
  cySwitch,
  install
}