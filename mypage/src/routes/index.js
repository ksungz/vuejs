import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../views/Main.vue';
import menu01 from '../views/Menu01.vue';
import menu02 from '../views/Menu02.vue';
import menu03 from '../views/Menu03.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      // path: url주소
      path: '/',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: main
    },
    {
      path: '/menu01',
      component: menu01
    },
    {
      path: '/menu02',
      component: menu02
    },
    {
      path: '/menu03',
      component: menu03
    }
  ]
});