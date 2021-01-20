import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
   state: {
       products: [],
       cart: []
   },
   mutations: {//Не очень синтаксис, а еще можно поменять данные только тут
       set_products: (state, products) => {
            state.products = products;
       },
       set_cart: (state, product) => {
           if(state.cart.length){
               let is_exist;
                state.cart.map(function (item){//Цикл в которой сверка всех продуктов и моего
                    if(item.article == product.article){
                        is_exist = true;
                        item.quantify++;
                    }
                });
                if(!is_exist){
                    state.cart.push(product)
                }
           }
           else{
               state.cart.push(product);
           }
       },
       remove_from_card: (state, index) => {
           console.log(state.cart);
           state.cart.splice(index, 1);//Удаляет 1 элемент по индексу(index)
       },
   },
   actions: {
       get_products_from_api({commit}){
           return axios.get('http://localhost:3000/products').then(res => {
               commit('set_products', res.data);//Отправка в мутацию
               return res.data;
           });
       },
       add_to_cart({commit}, product){
           //console.log(product);
           commit('set_cart', product);
       },
       delete_store({commit}, index){
          commit('remove_from_card', index);
       }
   },
   getters: {
       products(state){
           return state.products;
       },
       cart(state){
           return state.cart;
       }
   },
});

export default store;