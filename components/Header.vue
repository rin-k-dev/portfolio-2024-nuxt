<template>
  <header id="header">
    <div class="header__container">
      <nuxt-link class="header__logo-link" to="/">
        <img class="sp_only header__logo" src="~/assets/image/common/logo_sp.svg" alt="Rin's Portfolio">
        <img class="pc_only header__logo" src="~/assets/image/common/logo_pc.svg" alt="Rin's Portfolio">
      </nuxt-link>
      <button class="sp_only header__hamburger-menu noto-sans-jp" @click="toggleMenu">
        {{ isMenuOpen ? 'close' : 'menu' }}
      </button>
    </div>
    <nav class="header__nav" :class="{ open: isMenuOpen }">
      <ul>
        <li><a class="header__link-service noto-sans-jp" href="#service">Service</a></li>
        <li><a class="header__link-works noto-sans-jp" href="#works">Works</a></li>
        <li><a class="header__link-about noto-sans-jp" href="#about">About</a></li>
        <li><a class="header__link-contact noto-sans-jp" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped></style>