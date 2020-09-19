import Vue from 'vue'
import App from './App.vue'
import VueAnime from 'vue-animejs';
import VideoBackground from 'vue-responsive-video-background-player'

Vue.use(VueAnime)
Vue.component('video-background', VideoBackground);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
