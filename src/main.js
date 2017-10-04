/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/Home';
import NavBar from './components/Nav';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/nav', component: NavBar },
  ],
});

new Vue({
  router,
  template: '<App/>',
  components: { App },
}).$mount('#app');
