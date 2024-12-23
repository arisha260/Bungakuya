<script setup>
  import {ref} from "vue";
  import IconTel from "@/components/icons/IconTel.vue";
  import IconLocation from "@/components/icons/IconLocation.vue";
  import IconHeart from "@/components/icons/IconHeart.vue";
  import IconBasket from "@/components/icons/IconBasket.vue";
  import IconLoop from "@/components/icons/IconLoop.vue";

  const inputValue = ref("")
  const isActive = ref(false);

  const toggleActive = () => {
    // Проверяем, меньше ли ширина экрана 75rem (1200px)
    if (window.matchMedia("(max-width: 75rem)").matches) {
      isActive.value = !isActive.value;
      if (isActive.value) {
        document.body.classList.add("stop-scroll");
      } else {
        document.body.classList.remove("stop-scroll");
      }
    }
  };
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <router-link :to="{name: 'home'}" class="logo logo-black header__logo" :class="{ active: isActive}">Bungakuya</router-link>
      <div class="header__search">
        <input type="text" id="search" class="header__input input-reset" v-model="inputValue">
        <label for="search" class="header__search-text" :class="{active:inputValue !== ''}">Искать на Bungakuya</label>
        <IconLoop class="header__search-icon"/>
      </div>
      <div class="header__actions">
        <a href="#" class="nav__link text-16 icon"><IconHeart />избранное</a>
        <a href="#" class="nav__link text-16 icon"><IconBasket />корзина</a>
      </div>
      <nav class="nav header__nav" :class="{ active: isActive}">
        <div class="nav__actions">
          <a href="#" class="nav__link text-16 icon"><IconHeart />избранное</a>
          <a href="#" class="nav__link text-16 icon"><IconBasket />корзина</a>
        </div>
        <div class="nav__info">
          <a href="#" class="nav__link text-16 icon"><IconLocation />Москва</a>
          <a href="#" class="nav__link text-16 icon"><IconTel />8 800 555-35-35</a>
        </div>
        <ul class="list-reset nav__list">
          <li class="nav__item"><a href="#" class="nav__link text-16 link">акции</a></li>
          <li class="nav__item"><a href="#" class="nav__link text-16 link">новинки</a></li>
          <li class="nav__item"><a href="#" class="nav__link text-16 link">бестселлеры</a></li>
          <li class="nav__item"><a href="#" class="nav__link text-16 link">рейтинги</a></li>
          <li class="nav__item"><a href="#" class="nav__link text-16 link">подборки</a></li>
          <li class="nav__item"><a href="#" class="nav__link text-16 link">скидки</a></li>
        </ul>
      </nav>
      <div class="burger header__burger" @click="toggleActive()" :class="{ active: isActive}">
        <p class="burger__text">Каталог</p>
        <span class="burger__line"></span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header{
    padding: 1.25rem 0;
    &__container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      position: relative;
    }
    &__search{
      display: none;
      @media (min-width: 48rem){
        width: 100%;
        max-width: 488px;
        position: relative;
        display: flex;
      }
      @media (min-width: 64rem){
        max-width: 593px;
      }
      @media (min-width: 75rem){
        max-width: 377px;
      }
      &-icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
      }
    }
    &__search-text{
      width: 100%;
      display: block;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      font-family: var(--font-family);
      font-weight: var(--fw-900);
      font-size: 16px;
      color: var(--medium-gray);
      transition: .2s;
    }
    &__search-text.active{
      top: 5px;
      font-size: 12px;
    }
    &__input{
      width: 100%;
      padding: 15px 20px;
      border-radius: 0.625rem;
      background-color: var(--light-gray);
      font-family: var(--font-family);
      font-weight: var(--fw-300);
      font-size: 16px;
      color: var(--dark-color);
      &:focus{
        outline: none;
      }
    }

    &__actions{
      display: none;
    }

    @media(min-width: 1200px) {
      &__burger {
        order: 1;
      }
      &__search {
        order: 2;
      }
      &__actions {
        order: 3;
        display: flex;
        gap: 20px;
      }
      &__nav {
        width: 100%;
        order: 4; /* Расположить на второй строке */
      }
    }
  }

  .header__input:focus~.header__search-text{
    top: 5px;
    font-size: 12px;
  }


</style>