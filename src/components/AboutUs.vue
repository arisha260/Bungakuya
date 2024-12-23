<script setup>

</script>

<template>
  <section class="about">
    <div class="container about__container">
      <div class="about__content">
        <h1 class="title">Bungakuya – О нас</h1>
        <p class="text-18 about__text">Bungakuya (文学屋) — это онлайн-библиотека и магазин, посвященные японской культуре и литературе. Наше название переводится как «Дом литературы», и именно этим мы стремимся быть для вас — уютным местом, где каждая история оживает.</p>
        <p class="text-18 about__text">Мы создали Bungakuya, чтобы объединить всех любителей японской литературы, от поклонников манги и ранобэ до тех, кто ищет редкие издания классической японской прозы. Мы стремимся сделать японские книги доступными для всех, кто хочет погрузиться в этот удивительный мир.</p>
      </div>
      <div class="about__content">
        <h1 class="title">Bungakuya предлагает</h1>
        <p class="text-18 about__text"><span class="bold-text">Широкий ассортимент: </span><br>От популярных тайтлов до малоизвестных жемчужин — наша библиотека постоянно пополняется новыми произведениями.</p>
        <p class="text-18 about__text"><span class="bold-text">Персональные рекомендации: </span><br>Мы помогаем вам находить книги, которые соответствуют вашим интересам, будь то захватывающее фэнтези или глубокая драма.</p>
        <p class="text-18 about__text"><span class="bold-text">Эксклюзивные коллекции: </span><br>Особые издания, артбуки и подарочные наборы доступны для наших подписчиков и коллекционеров.</p>
        <p class="text-18 about__text"><span class="bold-text">Сообщество: </span><br>Общайтесь с единомышленниками, обсуждайте любимые произведения и делитесь своими впечатлениями.</p>
      </div>
      <div class="about__content">
        <h1 class="title">Наша философия</h1>
        <p class="text-18 about__text">Мы вдохновляемся японским принципом <span class="bold-text">“wabi-sabi”</span> — красотой в простоте и уникальности каждого момента. Поэтому на Bungakuya каждая книга — это не просто история, а часть культуры, которую мы ценим и хотим поделиться с вами.</p>
        <p class="text-18 about__text">Добро пожаловать в Bungakuya — дом, где литература соединяет сердца и умы.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .about{
    margin-top: 1.4375rem;
    margin-bottom: 1.875rem;
    @media (min-width: 48rem){
      margin-top: 1.875rem;
    }
    @media (min-width: 64rem){
      margin-top: 3.25rem;
    }
    &__text{
      margin-bottom: .625rem;
      @media (min-width: 64rem){
        margin-bottom: 1.875rem;
      }
    }
  }
</style>