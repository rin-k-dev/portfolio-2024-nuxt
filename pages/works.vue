<template>
  <div>
    <Header></Header>
    <main id="works-list">
      <section class="works__title">
        <div class="works__title-container">
          <h2 class="works__title-text">
            <span class="works__title-english noto-sans-jp">Works</span>
            <span class="works__title-japanese noto-sans-jp">制作実績</span>
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
