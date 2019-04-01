import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ImageTextHorizontal from './parts/ImageTextHorizontal'
import DoubleText from './parts/DoubleText'
import FullImage from './parts/FullImage'
import DoubleImage from './parts/DoubleImage'

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('content-imgtext-horizontal', ImageTextHorizontal);
Vue.component('content-doubletext', DoubleText);
Vue.component('content-fullimage', FullImage);
Vue.component('content-doubleimage', DoubleImage);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
