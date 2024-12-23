<script setup>
  import Header from "@/components/Header.vue";
  import Top10 from "@/components/Top10.vue";
  import Bestsellers from "@/components/Bestsellers.vue";
  import Delivery from "@/components/Delivery.vue";
  import Footer from "@/components/Footer.vue";
  import { useRoute, useRouter, RouterView } from 'vue-router';
</script>

<template>
  <Header></Header>
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
