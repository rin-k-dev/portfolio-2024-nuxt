<template>
  <div>
    <Header></Header>
    <main id="work-page">
      <section class="work-page__title">
        <div class="work-page__title-container">
          <h2 class="work-page__title-text">
            <span class="work-page__title-english noto-sans-jp">Works</span>
            <span class="work-page__title-japanese noto-sans-jp">制作実績</span>
          </h2>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
/* ページ固有のスタイル */
</style>
