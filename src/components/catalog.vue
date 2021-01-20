<template>
  <div class="catalog">
    <h1>Каталог</h1>
    <router-link :to="{name: 'cart', params: {cart_data: cart}}">
    <div class="catalog_link_to_cart">Корзина: {{ cart.length }}</div>
    </router-link>
    <spin v-if="wheel"></spin>
    <div class="catalog-list" v-else>
      <catalog-item v-for="product in products"
                    :key="product.article"
                    :product_data="product"
                    @send_to_parent_cart="add_to_cart2" />
    </div>
  </div>
</template>

<script>

import CatalogItem from './catalog-item';
import {mapActions, mapGetters} from 'vuex';
import spin from './spin'

export default {
  name: "catalog",
  components: {
    CatalogItem,
    spin,
  },
  data(){
    return {
      wheel: true
    }
  },
  methods: {

    ...mapActions([
      'get_products_from_api',
      'add_to_cart'
    ]),

    add_to_cart2(data){//Нельзя иметь одинаковые функции, при роботе с vuex
      this.add_to_cart(data);
    }

  },
  mounted() {//Когда прогрузился весь html
    this.get_products_from_api().then(res => {
      if(res){
        setTimeout(() =>{
          this.wheel = false;
        }, 300);
      }
    });
  },
  computed: {
    ...mapGetters([
        'products',
        'cart'
    ])
  }
}
</script>

<style>
.catalog{
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.catalog-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.catalog_link_to_cart{
  position: absolute;
  top: 20px;
  right: 40px;
  padding: 16px;
  border: solid 1px #aeaeae;
}
</style>