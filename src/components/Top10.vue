<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import Card from "@/components/Card.vue";

</script>

<template>
  <section class="top-ten section">
    <div class="container top-ten__container">
      <h1 class="title top-ten__title">ТОП - 10: что сейчас читают</h1>

    </div>
    <Swiper class="top-ten__swiper swiper"
            :slides-per-view="'auto'"
            :loop="true"
            :observeParents="true"
            :observer="true"
            :lazy="{
              loadPrevNext: true,
              loadPrevNextAmount: 5
            }">
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/dandadan.webp" title="Дандадан" title2="Dandadan" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/one-punch-men.webp" title="Ванпанчмен" title2="Onepunch-Man" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/one-piece.webp" title="Ван Пис" title2="One Piece" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/farmacevt.webp" title="Монолог фармацевта" title2="Kusuriya no Hitorigoto" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/kingdom.webp" title="Царство" title2="Kingdom" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/alcemist.webp" title="Стальной алхимик" title2="Hagane no Renkinjutsushi" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/one-punch-men.webp" title="Ванпанчмен" title2="Onepunch-Man" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/one-piece.webp" title="Ван Пис" title2="One Piece" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/farmacevt.webp" title="Монолог фармацевта" title2="Kusuriya no Hitorigoto" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/kingdom.webp" title="Царство" title2="Kingdom" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/alcemist.webp" title="Стальной алхимик" title2="Hagane no Renkinjutsushi" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/farmacevt.webp" title="Монолог фармацевта" title2="Kusuriya no Hitorigoto" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/kingdom.webp" title="Царство" title2="Kingdom" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/alcemist.webp" title="Стальной алхимик" title2="Hagane no Renkinjutsushi" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/farmacevt.webp" title="Монолог фармацевта" title2="Kusuriya no Hitorigoto" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/kingdom.webp" title="Царство" title2="Kingdom" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
      <swiper-slide class="swiper__slide">
        <router-link :to="{name: 'product'}">
          <Card src="/alcemist.webp" title="Стальной алхимик" title2="Hagane no Renkinjutsushi" price="от 840₽ " price1="1100₽"/>
        </router-link>
      </swiper-slide>
    </Swiper>
  </section>
</template>

<style lang="scss">
  .top-ten{
    @media (min-width: 48rem){
      margin-top: 2.625rem;
    }
    &__container{
    }
  }


.swiper {
  padding: .625rem 0;
  max-width: 100%;
  position: relative;
  isolation: isolate;
  @media (min-width: 75rem){
    margin-left: calc((100% - (var(--content-width) + (var(--container-offset)*2))) / 2);
  }
  &::after{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    width: 20px;
    z-index: 9;
    border-radius: 3px;
    @media (min-width: 48rem){
      width: 50px;
    }
    @media (min-width: 64rem){
      width: 70px;
    }
    @media (min-width: 75rem){
      width: 100px;
    }
  }
  &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    width: 20px;
    z-index: 9;
    border-radius: 3px;
    @media (min-width: 48rem){
      width: 50px;
    }
  }
  &__slide {
    margin-right: 20px;
    max-width: 170px;
    height: auto;
    z-index: 10;
    transition: .3s;
    @media (hover: hover) {
      &:hover{
        transform: translateY(-.625rem);
      }
    }
  }
}
</style>