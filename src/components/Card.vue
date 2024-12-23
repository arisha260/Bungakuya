<script setup>
  import Button from "@/components/Button.vue";
  import IconDots from "@/components/icons/IconDots.vue";
  defineProps({
    src: String,
    title: String,
    title2: String,
    price: String,
    price1: String,
  })

  const baseUrl = import.meta.env.BASE_URL;
</script>

<template>
  <article class="card">
    <img :src="baseUrl + src" class="img card__img" alt="manga">
    <div class="card__content">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__title-en text-18">({{ title2 }})</p>
      <div class="card__prices">
        <span class="card__price card__price-after text-14">{{ price }}</span>
        <span class="card__price card__price-before text-14">{{ price1 }}</span>
      </div>
      <div class="card__actions">
        <Button />
        <IconDots />
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .card{
    width: 170px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 100%;
    &__img{
      min-height: 270px;
    }
    &__content{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
    }
    &__title{
      margin: 0;
      font-family: var(--font-family);
      font-weight: var(--fw-400);
      font-size: 1.25rem;
      line-height: 110%;
      color: var(--dark-color);
      word-break: break-word;
    }
    &__title-en{
      margin-bottom: 10px;
    }
    &__prices{
      width: 100%;
      margin-top: auto;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__price{
      &-before{
        text-decoration: line-through;
        color: var(--dark-gray);
      }
    }
    &__actions{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>