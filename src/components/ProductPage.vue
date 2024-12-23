<script setup>
  import IconHeart from "@/components/icons/IconHeart.vue";
  import {ref} from "vue";

  const isActive = ref(1);
  // const activeTab = () => {
  //   isActive.value = !isActive.value;
  // }
</script>

<template>
  <section class="product">
    <div class="container product__container">
      <img src="/bg.jpg" class="product__bg" alt="product bg">
      <div class="product__content">
        <div class="product__left">
          <img src="/dandadan.webp" class="product__img img" alt="product img">
          <div class="product__more">
            <div class="product__more-imgs">
              <img src="/product-page1.webp" class="product__more-img" alt="product img more" width="70" height="112">
              <img src="/product-page2.webp" class="product__more-img" alt="product img more" width="70" height="112">
              <img src="/product-page3.webp" class="product__more-img" alt="product img more" width="70" height="112">
            </div>
            <span class="text-16 product__more-text">Еще 12</span>
          </div>
        </div>
        <div class="product__right">
          <p class="text-16 product__limit">16+</p>
          <div class="flex product__lan">
            <button class="btn-reset text-16 product__translate product__lan-text" @click="isActive = 1" :class="{active: isActive === 1}">Перевод</button>
            <button class="btn-reset text-16 product__original product__lan-text" @click="isActive = 2" :class="{active: isActive === 2}">Оригинал</button>
          </div>
          <p class="text-16 product__author">Yukinobu Tatsu</p>
          <div class="flex product__title">
            <p class="product__name product__text">Дандадан.</p>
            <p class="product__tom">Том 1
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.86 8H4.85999L11.86 19L18.86 8Z" fill="currentColor" />
              </svg>
            </p>
          </div>
          <p class="text-16 product__descr">Призраки, монстры, инопланетяне, подростковая романтика, сражения!.. В этой серии есть все! Такакура, одержимый оккультизмом, но не верящий в призраков, и Аясэ, девушка, не верящая в пришельцев, пытаются преодолеть свои разногласия, когда сталкиваются с паранормальными явлениями! Эта манга не от мира сего!</p>
          <div class="button product__btn btn-reset">
            Добавить в корзину
          </div>
          <div class="flex product__cost">
            <p class="text-14 product__price">840₽</p>
            <p class="text-14 product__previous-price">1100₽</p>
          </div>
          <a href="#" class="product__favourites text-16 icon"><IconHeart />В избранное</a>
          <div class="product__params">
            <p class="text-16 product__params-text">Параметры продукта</p>
            <table class="table product__params-table">
              <thead>
                <tr>
                  <th scope="col" class="text-14 table__text table__title">Объем (стр.)</th>
                  <th scope="col" class="text-14 table__text table__title">Размер</th>
                  <th scope="col" class="text-14 table__text table__title">Вес (г.)</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-14 table__text table__text">100</td>
                <td class="text-14 table__text table__text">191 x 127 x 13 мм.</td>
                <td class="text-14 table__text table__text">300</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .product{
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
    &__container{
      padding-top: 6.25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      @media (min-width: 48rem) {
        padding-top: 12.8125rem;
      }
      @media (min-width: 64rem) {
        padding-top: 11.875rem;
      }
      @media (min-width: 75rem) {
        padding-top: 14.1875rem;
      }
    }
    &__bg{
      width: 100%;
      min-height: 172px;
      position: absolute;
      top: 0;
      border-radius: 0 0 6.25rem 6.25rem;
      z-index: 1;
    }
    &__content{
      width: 100%;
      padding: 0 .9375rem 1.25rem .9375rem;
      box-shadow: 0 .125rem .625rem 0 rgba(0, 0, 0, 0.25);
      background: var(--light-color);
      border-radius: 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
      z-index: 5;
      @media (min-width: 48rem) {
        padding: 0 1.875rem 1.25rem;
        flex-direction: row;
        gap: 1.875rem;
      }
      @media (min-width: 64rem) {
        padding: 0 2.5rem 1.875rem;
        gap: 2.6875rem;
      }
      @media (min-width: 75rem) {
        padding: 0 1.875rem 3.125rem;
        gap: 2.6875rem;
      }
    }
    &__left{
      margin-top: -2.625rem;
      align-self: center;
      @media (min-width: 31.25rem) {
        align-self: flex-start;
      }
      @media (min-width: 48rem) {
        margin-top: -3.25rem;
      }
      @media (min-width: 64rem) {
        margin-top: -2.3125rem;
      }
      @media (min-width: 75rem) {
        margin-top: -2.3125rem;
      }
    }
    &__img{
      max-width: 265px;
    }
    &__more{
      margin-top: .625rem;
      &-imgs{
        margin-bottom: .625rem;
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
      }
      &-img{
        border: .125rem solid var(--dark-gray);
        border-radius: .625rem;
        @media (min-width: 64rem) {
          width: 82px;
          height: 109px;
        }
      }
    }
    &__right{
      display: flex;
      flex-direction: column;
      gap: .625rem;
      @media (min-width: 48rem) {
        padding-top: 1.875rem;
      }
      @media (min-width: 75rem) {
        padding-top: 1.25rem;
      }
    }
    &__limit{
      color: var(--bright-red);
    }
    &__lan{
      &-text{
        padding: .3125rem;
        color: var(--dark-gray);
      }
      &-text.active{
        color: var(--dark-gray);
        border-radius: .3125rem;
        background: var(--light-gray);
      }
    }
    &__title{
    }
    &__descr{
      max-width: 452.48px;
      @media (min-width: 75rem){
        max-width: 100%;
      }
    }
    &__name{
      margin: 0;
      font-family: var(--font-family);
      font-weight: var(--fw-400);
      font-size: 22px;
      color: var(--dark-color);
    }
    &__tom{
      margin: 0;
      display: flex;
      align-items: center;
      font-family: var(--font-family);
      font-weight: var(--fw-400);
      font-size: 22px;
      color: var(--dark-gray);
    }
    &__btn{
      max-width: 453px;
      padding: 1rem;
      text-align: center;
    }
    &__previous-price{
      text-decoration: line-through;
      color: var(--dark-gray);
    }
    &__favourites{
      font-weight: var(--fw-400);
    }
    &__params-text{
      margin-bottom: .625rem;
      color: var(--dark-gray);
    }
  }

  .table{
    max-width: 383px; /* Добавьте ширину, если нужно */
    border: 1px solid var(--medium-gray);
    border-collapse: separate; /* Используем separate для раздельных ячеек */
    border-spacing: 0; /* Убираем зазоры между ячейками */
    border-radius: 0.625rem; /* Закругляем таблицу */
    overflow: hidden;

    th, td {
      padding: 0.5625rem 0.5rem;
      text-align: left; /* Центрируем текст */
      color: var(--dark-gray);
      font-weight: var(--fw-300);
      border: 1px solid var(--medium-gray); /* Граница между ячейками */
      tr:first-child th {
        border-top: none; /* Убираем верхнюю границу для первой строки */
      }

      tr:last-child td {
        border-bottom: none; /* Убираем нижнюю границу для последней строки */
      }

      td:first-child, th:first-child {
        border-left: none; /* Убираем левую границу первой колонки */
      }

      td:last-child, th:last-child {
        border-right: none; /* Убираем правую границу последней колонки */
      }
    }
  }
</style>