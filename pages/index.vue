<template>
  <div>
    <Header>
    </Header>
    <main id="top">
      <!-- #main-visual ここから -->
      <section id="main-visual">
        <div class="main-visual__container">
          <p class="main-visual__text noto-sans-jp">
            Hello
          </p>
        </div>
      </section>
      <!-- #main-visual ここまで -->
      <!-- #introduction ここから -->
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
      <!-- #introduction ここまで -->
      <!-- #service ここから -->
      <section id="service">
        <div class="service__wrapper">
          <div class="service__container">
            <h2 class="service__title">
              <span class="service__title-english noto-sans-jp">
                Service
              </span>
              <span class="service__title-japanese noto-sans-jp">
                できること
              </span>
            </h2>
            <div class="service__content-wrapper">
              <div class="service__content">
                <h3 class="service__content-title noto-sans-jp">
                  HTML/CSSコーディング
                </h3>
                <p class="service__content-text sp_only noto-sans-jp">
                  <span>デザインカンプをもとにHTML/CSSでコー</span>
                  <span>ディングを行います。</span>
                </p>
                <p class="service__content-text pc_only noto-sans-jp">
                  <span>デザインカンプをもとにHTML/CSSでコーディングを行います。</span>
                </p>
                <ul class="service__content-list noto-sans-jp sp_only">
                  <li><span>・最新のHTML/CSSに基づいたコーディング</span></li>
                  <li><span>・BEM、FLOCSSなどのCSS設計に柔軟に対応可能</span></li>
                  <li><span>・JavaScriptライブラリのサイトへの導入</span></li>
                </ul>
                <ul class="service__content-list noto-sans-jp pc_only">
                  <li><span>・最新のHTML/CSSに基づいたコーディング</span></li>
                  <li><span>・BEM、FLOCSSなどのCSS設計に柔軟に対応可能</span></li>
                  <li><span>・JavaScriptライブラリのサイトへの導入</span></li>
                </ul>
              </div>
              <div class="service__content">
                <h3 class="service__content-title noto-sans-jp">
                  Webデザイン
                </h3>
                <p class="service__content-text sp_only noto-sans-jp">
                  <span>Webサイトのデザインも可能です。</span>
                </p>
                <p class="service__content-text pc_only noto-sans-jp">
                  <span>Webサイトのデザインも可能です。</span>
                </p>
                <ul class="service__content-list noto-sans-jp sp_only">
                  <li><span>・Photoshop,XD,Figmaを用いたデザイン</span><span>カンプの作成</span></li>
                  <li><span>・Webサイトのデザイン</span></li>
                  <li><span>・LPのデザイン</span></li>
                </ul>
                <ul class="service__content-list noto-sans-jp pc_only">
                  <li><span>・Photoshop,XD,Figmaを用いたデザインカンプの作成</span></li>
                  <li><span>・Webサイトのデザイン</span></li>
                  <li><span>・LPのデザイン</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- #service ここまで -->
      <!-- #works ここから-->
      <section id="works">
        <div class="works__wrapper">
          <div class="works__container">
            <h2 class="works__title">
              <span class="works__title-english noto-sans-jp">
                Works
              </span>
              <span class="works__title-japanese noto-sans-jp">
                制作実績
              </span>
            </h2>
            <div class="works__content-wrapper-1">
              <div class="works__content">
                <a class="works__link" href="https://webcreatorrin.com/sugutabe" target="_blank" rel="noopener noreferrer">
                  <img class="sp_only works__photo" src="~/assets/image/top/work_1_sp.png" alt="">
                  <img class="pc_only works__photo" src="~/assets/image/top/work_1_pc.png" alt="">
                </a>
              </div>
              <div class="works__content">
                <a class="works__link" href="https://webcreatorrin.com/sugutabe" target="_blank" rel="noopener noreferrer">
                  <img class="sp_only works__photo" src="~/assets/image/top/work_2_sp.png" alt="">
                  <img class="pc_only works__photo" src="~/assets/image/top/work_2_pc.png" alt="">
                </a>
              </div>
            </div>
            <div class="works__more-link-container">
              <nuxt-link to="/works" class="more-link noto-sans-jp">
                もっと見る
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <!-- #works ここまで-->
      <!-- #about ここから-->
      <section id="about">
        <div class="about__wrapper">
          <div class="about__container">
            <h2 class="about__title">
              <span class="about__title-english noto-sans-jp">
                About
              </span>
              <span class="about__title-japanese noto-sans-jp">
                私について
              </span>
            </h2>
            <div class="about__photo-container">
              <img class="sp_only about__photo" src="~/assets/image/top/about_img_sp.png" alt="">
              <img class="pc_only about__photo" src="~/assets/image/top/about_img_pc.png" alt="">
            </div>
            <div class="about__text-container">
              <p class="sp_only about__text noto-sans-jp">
                <span>Name: Rin K</span>
                <span>千葉県船橋市出身。大学院修了後、契約社員と</span>
                <span>して都内のIT系企業にてアプリテスターとして5</span>
                <span>年間勤務。主にスマホゲームや証券系アプリの</span>
                <span>テスト経験あり。</span>
                <span>自分でもWebサイトを作ってみたいと思い、</span>
                <span>2021年12月からWebデザインのスクールである</span>
                <span>デジタルハリウッド by LIGでWebデザインの基</span>
                <span>礎を習得。2022年12月卒業。</span>
              </p>
              <p class="pc_only about__text noto-sans-jp">
                <span>Name: Rin K</span>
                <span>千葉県船橋市出身。大学院修了後、契約社員として都内のIT系企業にてアプリテスターとして5年間勤務。</span>
                <span>主にスマホゲームや証券系アプリのテスト経験あり。自分でもWebサイトを作ってみたいと思い、</span>
                <span>2021年12月からWebデザインのスクールであるデジタルハリウッド by LIGでWebデザインの基礎を習得。</span>
                <span>2022年12月卒業。</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- #about ここまで-->
    </main>
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
