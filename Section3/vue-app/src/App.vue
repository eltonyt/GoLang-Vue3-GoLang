<template>
  <header-component></header-component>
  <div>
    <router-view></router-view>
  </div>
  <footer-component></footer-component>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    HeaderComponent: AppHeader,
    FooterComponent: AppFooter,
  },
};
</script>

<style>
</style>