<template>
  <div>
    <Header></Header>
    <main id="works-list">
      <section class="works-list__title">
        <div class="works-list__title-container">
          <h2 class="works-list__title-text">
            <span class="works-list__title-english noto-sans-jp">Works</span>
            <span class="works-list__title-japanese noto-sans-jp">制作実績</span>
          </h2>
        </div>
      </section>
      <section class="works-list__contents">
        <div class="works-list-contents-container">
          <div class="works-list__content">
            <a class="works__link" href="https://webcreatorrin.com/sugutabe">
              <img class="sp_only works-list__photo" src="~/assets/image/works/sugutabe_img_sp.png" alt="">
              <img class="pc_only works-list__photo" src="~/assets/image/works/sugutabe_img_pc.png" alt="">
            </a>
          </div>
          <div class="works-list__content">
            <a class="works__link" href="https://webcreatorrin.com/sugutabe">
              <img class="sp_only works-list__photo" src="~/assets/image/works/works_img_sp.png" alt="">
              <img class="pc_only works-list__photo" src="~/assets/image/works/works_img_pc.png" alt="">
            </a>
          </div>
          <div class="works-list__content">
            <a class="works__link" href="https://webcreatorrin.com/sugutabe">
              <img class="sp_only works-list__photo" src="~/assets/image/works/works_img_sp.png" alt="">
              <img class="pc_only works-list__photo" src="~/assets/image/works/works_img_pc.png" alt="">
            </a>
          </div>
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
