import Vue from 'vue'
import App from './App.vue'

// SCSS files
/* the CSS from before, not scoped to correct components */
import './assets/base.scss';
import './assets/layout.scss';
import './assets/grid.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
