<template>
  <div class="card">
    <h1>Корзина</h1>

    <router-link :to="{name: 'catalog'}">
      <div class="catalog_link_to_cart">Вернутся назад</div>
    </router-link>

    <h2 v-if="!cart_data.length">Вы не выбрали товары..</h2>

    <card-item v-for="(cart, id) in cart_data"
               :key="cart.article"
               :item="cart"
               @deleteFromCart="deleteFromCart(id)"
    />
  </div>
</template>

<script>

import CardItem from './card_item'
import {mapActions} from 'vuex';
export default {
  name: "card",
  components: {
     CardItem
  },
  props: {
    cart_data: {
      type: Array,//Массив а внутри обьект
    }
  },
  methods: {
    ...mapActions([
        'delete_store'
    ]),

    deleteFromCart(id){
      this.delete_store(id);
    }
  }
}
</script>

<style>

</style>