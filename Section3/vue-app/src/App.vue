<template>
  <header-component></header-component>
  <body-component></body-component>
  <footer-component></footer-component>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"
import AppBody from "./components/AppBody.vue"
export default {
  name: "App",
  components: {
    HeaderComponent: AppHeader,
    FooterComponent: AppFooter,
    BodyComponent: AppBody,
  }
}
</script>

<style>

</style>