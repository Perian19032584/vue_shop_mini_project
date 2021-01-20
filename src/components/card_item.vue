<template>
  <div class="card_item">
    <img :src="require('../assets/images/' + item.image)" alt="Картинки нету">

    <div class="cart-item-info">
      <p>Название: {{ item.name }}</p>
      <p>Цена: {{ item.price }}</p>
      <p>Артикл: {{ item.article }}</p>
    </div>
    <div class="cart-item-quantity">Кол: {{ item.quantify }}</div>
      <button @click="deletes">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "card_item",
  props: {
    item: {
      type: Object
    }
  },
  mounted() {
    this.$set(this.item, 'quantify', 1);//Добавление в обьект еще одного значение
  },
  methods: {
    deletes(){
      this.$emit('deleteFromCart');
    }
  }
}
</script>

<style>
  .card_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;/* без переноса */
    flex-basis: 25%;
    box-shadow: 0 0 8px #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;

  }
  .card_item img{
    max-width: 60px;
  }
</style>