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
            <span>千葉県在住のフリーランスWebデザイナーです。</span>
            <span>ポートフォリオをご覧いただきありがとうございます。</span>
            <span>Web制作のお仕事承ります。</span>
          </p>
        </div>
      </section>
      <!-- #introduction ここまで -->
      <!-- #service ここから -->
      <section id="service" class="scroll-target">
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
                  Webデザイン
                </h3>
                <p class="service__content-text sp_only noto-sans-jp">
                  <span>Webサイトのデザイン</span>
                </p>
                <p class="service__content-text pc_only noto-sans-jp">
                  <span>Webサイトのデザイン</span>
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
            </div>
          </div>
        </div>
      </section>
      <!-- #service ここまで -->
      <!-- #works ここから-->
      <section id="works" class="scroll-target">
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
                <a class="works__link" href="https://webcreatorrin.com/portfolio/sugutabe" target="_blank" rel="noopener noreferrer">
                  <img class="sp_only works__photo" src="~/assets/image/top/work_1_sp.png" alt="">
                  <img class="pc_only works__photo" src="~/assets/image/top/work_1_pc.png" alt="">
                </a>
              </div>
              <!--
              <div class="works__content">
                <a class="works__link" href="https://webcreatorrin.com/portfolio/sugutabe" target="_blank" rel="noopener noreferrer">
                  <img class="sp_only works__photo" src="~/assets/image/top/work_2_sp.png" alt="">
                  <img class="pc_only works__photo" src="~/assets/image/top/work_2_pc.png" alt="">
                </a>
              </div>-->
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
      <section id="about" class="scroll-target">
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
      <!-- #contact ここから-->
      <section id="contact">
        <div class="contact__wrapper">
          <div class="contact__container">
            <h2 class="contact__title">
              <span class="contact__title-english noto-sans-jp">
                Contact
              </span>
              <span class="contact__title-japanese noto-sans-jp">
                お問い合わせ
              </span>
            </h2>
            <div class="contact__text-wrapper">
              <p class="sp_only contact__text noto-sans-jp">
                <span>Web制作のお仕事のご依頼・その他のご相談な</span>
                <span>どございましたら、お気軽に下記フォームより</span>
                <span>お問い合わせください。</span>
              </p>
              <p class="pc_only contact__text noto-sans-jp">
                <span>Web制作のお仕事のご依頼・その他のご相談などございましたら、お気軽に下記フォームよりお問い合わせください。</span>
              </p>
              <p class="contact__text-required-item noto-sans-jp">
                <span class="contact__text-red">*</span>は必須項目です。
              </p>
            </div>
            <form
              id="contact__form"
              action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSd3bx6dVjbPLvllh62CrC04zVsCMCu83ZT5bRb4bSbYv9rt6w/formResponse"
              method="POST"
              target="hidden_iframe"
              @submit="onSubmit">
              <div class="contact__form-wrapper">
                <div class="contact__form-group-name">
                  <label for="name" class="contact__name-label noto-sans-jp">Name<span class="contact__text-red">*</span></label>
                  <input type="text" id="name" class="contact__name-input" name="entry.51272466" required>
                </div>
                <div class="contact__form-group-email">
                  <label for="email" class="contact__email-label noto-sans-jp">EMail<span class="contact__text-red">*</span></label>
                  <input type="text" id="email" class="contact__email-input" name="entry.2141206940" required>
                </div>
              </div>
              <div class="contact__form-group-message">
                <label for="message" class="contact__message-label noto-sans-jp">Message<span class="contact__text-red">*</span></label>
                <textarea id="message" class="contact__message-textarea" name="entry.1714098188" cols="41" rows="11" required></textarea>
              </div>
              <button type="submit" class="contact__submit-button">送信</button>
            </form>
            <div id="contact__form-message" class="form__message noto-sans-jp"></div>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
          </div>
        </div>
      </section>
      <!-- #contact ここまで-->
      <Footer>
      </Footer>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      setTimeout(() => {
        document.getElementById('contact__form-message').textContent = '送信が完了しました。';
        document.getElementById('contact__form').reset();
        this.submitted = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* ページ固有のスタイルがあればここに記述します */
</style>
