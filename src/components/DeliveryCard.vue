<script setup>
  defineProps({
    src: String,
    text: String,
  })

  const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
  <li class="delivery-list__item">
    <img :src="baseUrl + src" alt="delivery icon">
    <p class="delivery-list__text text-18">
      {{ text }}
    </p>
  </li>
</template>

<style lang="scss">

</style>