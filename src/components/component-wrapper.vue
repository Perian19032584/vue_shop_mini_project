<template>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: 'component-wrapper',
  computed: {
     ...mapGetters([
        'cart'
     ]),
  }
}
</script>

<style>
  .main-wrapper {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
