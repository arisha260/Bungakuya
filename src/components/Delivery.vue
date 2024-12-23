<script setup>
  import Card from "@/components/DeliveryCard.vue";
</script>

<template>
  <section class="delivery section">
    <div class="container delivery__container">
      <h1 class="title">Bungakuya доставит к вам домой</h1>
      <div class="delivery__content">
        <ul class="delivery-list list-reset">
          <Card src="/cart.svg" text="Покупаете понравившуюся мангу на сайте."/>
          <Card src="/car.svg" text="Бесплатно доставляем заказы от 3000₽  до 10 000 ₽ по всей России."/>
          <Card src="/books.svg" text="Добавим подарок в каждый заказ"/>
          <Card src="/continent.svg" text="Доставка в более чем 300 городов России, во многих есть пункты самовывоза."/>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .delivery-list{
    //max-width: 456px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 1.875rem;
    &__item{
      max-width: 220px;
    }
    &__text {
      margin-top: 0.625rem;
    }
  }
</style>