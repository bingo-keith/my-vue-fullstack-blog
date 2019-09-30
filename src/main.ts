import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/scss/common.scss"
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

// px2rem
window.onresize = setHtmlFontSize
function setHtmlFontSize() {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  const htmlDom = document.getElementsByTagName('html')[0]
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
}
setHtmlFontSize()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
