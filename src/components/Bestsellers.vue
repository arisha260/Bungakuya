<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import Card from "@/components/Card.vue";

</script>

<template>
  <section class="bestsellers section">
    <div class="container bestsellers__container">
      <h1 class="title bestsellers__title">Бестселлеры</h1>
    </div>
    <Swiper class="bestsellers__swiper swiper"
            :slides-per-view="'auto'"
            :loop="true"
            >
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/farmacevt.webp" title="Монолог фармацевта" title2="Kusuriya no Hitorigoto" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/alcemist.webp" title="Стальной алхимик" title2="Hagane no Renkinjutsushi" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/dandadan.webp" title="Дандадан" title2="Dandadan" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/berserk.webp" title="Берсерк" title2="Berserk" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/monster.webp" title="Монстр" title2="Monster" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/kingdom.webp" title="Царство" title2="Kingdom" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/dandadan.webp" title="Дандадан" title2="Dandadan" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/alcemist.webp" title="Стальной алхимик" title2="Hagane no Renkinjutsushi" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/dandadan.webp" title="Дандадан" title2="Dandadan" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/berserk.webp" title="Берсерк" title2="Berserk" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/monster.webp" title="Монстр" title2="Monster" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/kingdom.webp" title="Царство" title2="Kingdom" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/dandadan.webp" title="Дандадан" title2="Dandadan" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
    </Swiper>
  </section>
</template>

<style lang="scss">

</style>