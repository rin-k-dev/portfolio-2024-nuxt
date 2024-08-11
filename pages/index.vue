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
