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
      <section class="work-page__work-contents">
        <h3 class="work-page__work-title noto-sans-jp">
          スグ食べ
        </h3>
        <h4 class="work-page__work-outline noto-sans-jp">
          概要
        </h4>
        <div class="work-page__work-container">
          <div class="work-page__work-text noto-sans-jp">
            <span>Webデザインスクール「デジタルハリウッド by LIG」の課題。</span>
            <span>無農薬・オーガニック野菜の産地直送サービス。新規LPサイト制作を想定。</span>
            <span>ターゲットは都内在住の30代の既婚女性。夫や成長期の子供に健康的な食生活を送ってほしいと考えている。</span>
            <span>用意されたヒアリングシートを元にAdobe XDでワイヤーフレームを作成。デザインもXDを使用しました。</span>
            <span>素材はできるだけシンプルなものを選び、全体の構成がわかりやすくなるよう心がけました。</span>
            <span>CSS設計はFLOCSSを採用し、Sassを用いています。スライドショーはJavaScriptライブラリSwiperを使用。</span>
          </div>
          <div class="work-page__work-detail noto-sans-jp">
            <h5 class="work-page__work-detail-subtitle">
              サイトURL：
            </h5>
            <a class="work-page__work-detail-content-link" href="https://webcreatorrin.com/portfolio/sugutabe">https://webcreatorrin.com/portfolio/sugutabe</a>
            <h5 class="work-page__work-detail-subtitle">
              ソースコード：
            </h5>
            <a class="work-page__work-detail-content-link" href="https://github.com/rin-k-dev/sugutabe">https://github.com/rin-k-dev/sugutabe</a>
            <h5 class="work-page__work-detail-subtitle">
              使用ソフト：
            </h5>
            <span class="work-page__work-detail-content-text">Adobe XD、Visual Studio Code</span>
            <h5 class="work-page__work-detail-subtitle">
              言語：
            </h5>
            <span class="work-page__work-detail-content-text">HTML、CSS、JavaScript</span>
            <h5 class="work-page__work-detail-subtitle">
              制作期間：
            </h5>
            <span class="work-page__work-detail-content-text">1ヶ月</span>
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
