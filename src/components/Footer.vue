<script setup>
  import IconTg from "@/components/icons/IconTg.vue";
  import IconVK from "@/components/icons/IconVK.vue";
  import IconYoutube from "@/components/icons/IconYoutube.vue";
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__left">
        <router-link :to="{name: 'home'}" class="logo logo-white footer__logo">Bungakuya</router-link>
        <p class="text-16 footer__text">8 800 555-35-35</p>
        <p class="text-16 footer__text">bungakuyaSupport@mail.ru -<br>
служба поддержки</p>
        <ul class="footer-social list-reset">
          <li class="footer-social__item link">
            <IconTg />
          </li>
          <li class="footer-social__item link">
            <IconVK />
          </li>
          <li class="footer-social__item link">
            <IconYoutube />
          </li>
        </ul>
      </div>
      <div class="footer__right">
        <ul class="footer-list list-reset">
          <li class="footer-list__item">
            <h4 class="footer-list__title text-18 footer__text">О нас</h4>
            <a href="#" class="footer-list__link text-16 footer__text link">Вопросы и ответы</a>
            <a href="#" class="footer-list__link text-16 footer__text link">Условия доставки</a>
            <router-link :to="{name: 'about'}" class="footer-list__link text-16 footer__text link">О компании</router-link>
          </li>
          <li class="footer-list__item">
            <h4 class="footer-list__title text-18 footer__text">Партнерам</h4>
            <a href="#" class="footer-list__link text-16 footer__text link">Партнерская программа</a>
            <a href="#" class="footer-list__link text-16 footer__text link">Для бизнеса</a>
          </li>
          <li class="footer-list__item">
            <h4 class="footer-list__title text-18 footer__text">Правовая информация</h4>
            <a href="#" class="footer-list__link text-16 footer__text link">Пользовательское соглашение</a>
            <a href="#" class="footer-list__link text-16 footer__text link">Политика конфиденциальности</a>
          </li>
        </ul>
      </div>
      <span class="text-16 footer__text footer__copy">© 2024 ООО «Bungakuya»</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer{
    padding: 2.1875rem 0 1.25rem 0;
    background-color: var(--dark-color);
    &__container{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 2.125rem;
    }
    &__left{
      display: flex;
      flex-direction: column;
      gap: 1.875rem;
      margin-right: 1.5rem;
    }
    &__text{
      color: var(--light-color);
    }
    &__right{
      margin-top: 0.9rem;
    }
    &__copy{
      width: 100%;
      margin: 1.625rem auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .footer-social{
    display: flex;
    align-items: center;
    gap: 1.25rem;
    &__item{
      color: var(--light-color);
    }
  }

  .footer-list{
    display: flex;
    flex-wrap: wrap;
    column-gap: 2.8125rem;
    row-gap: 2.125rem;
    &__item{
      max-width: 269px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__title{
      margin-bottom: 2.125rem;
      font-weight: var(--fw-400);
    }
    &__link{
      margin-bottom: 1.25rem;

    }
  }
</style>