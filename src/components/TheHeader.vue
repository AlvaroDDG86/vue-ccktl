<template>
  <nav class="header">
    <router-link to="/">Regimens</router-link> |
    <router-link to="/beers">Beers</router-link>
  </nav>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const items = ref([
  { text: "Regimens", name: "Regimens" },
  { text: "Beers", name: "Beers" },
]);
</script>
<style lang="scss">
.header {
  width: 100vw;
  height: 3em;
  padding: 1em;
  position: fixed;
  background: $color-black;
  top: 0;
  z-index: 9;

  a {
    font-weight: bold;
    color: $color-blue-mid-light;

    &.router-link-exact-active {
      color: $color-blue-light;
    }
  }
}
</style>
