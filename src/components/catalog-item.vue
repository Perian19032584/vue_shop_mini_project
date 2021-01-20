<template>
  <div class="catalog-item">
    <img :src="require('../assets/images/' + product_data.image)" alt="Картинки нету"><!-- Загрузка картинок только через require(особеность vue)  -->
    <p>{{ product_data.name }}</p>
    <p>Сумма: {{ product_data.price }} ГРН</p>
    <button @click="send_to_parent_cart">Добавить в корзину</button>

  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object
    }
  },
  methods: {
    send_to_parent_cart(){
      this.$emit('send_to_parent_cart', this.product_data);
    }
  }
}
</script>

<style>
  .catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
  }
  .catalog-item img{
    width: 100px;
  }
</style>