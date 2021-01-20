import Vue from "vue";
import VueRouter from "vue-router";

import catalog from '../components/catalog';
import card from "../components/card";
Vue.use(VueRouter);

const router = new VueRouter({
   routes: [
       {
           path: '/',
           name: 'catalog',
           component: catalog
       },
       {
           path: '/cart',
           name: 'cart',
           component: card,
           props: true,//Разрешить передавать данные
       }
   ],
});

export default router;