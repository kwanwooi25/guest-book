import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.filter('formatDate', date => {
  const year = date.getFullYear();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
});

new Vue({
  render: h => h(App)
}).$mount('#app')