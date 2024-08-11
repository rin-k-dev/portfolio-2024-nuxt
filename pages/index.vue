<template>
  <div>
    <Header>
    </Header>
    <section id="main-visual">
      <div class="main-visual__container">
        <p class="main-visual__text noto-sans-jp">
          Hello
        </p>
      </div>
    </section>
    <section id="introduction">
      <div class="introduction__container">
        <h2 class="introduction__title noto-sans-jp">Rin K</h2>
        <p class="introduction__text noto-sans-jp">
          <span>千葉県在住のフリーランスWebコーダーです。</span>
          <span>ポートフォリオをご覧いただきありがとうございます。</span>
          <span>Web制作のお仕事承ります。</span>
        </p>
      </div>
    </section>
  </div>


</template>

<script>
import Header from '~/components/Header.vue';

export default {
  components: {
    Header
  }
};
</script>

<style scoped>
/* ページ固有のスタイルがあればここに記述します */
</style>
