<template>
  <header id="header">
    <div class="header__wrapper">
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
          <li>
            <nuxt-link
              class="header__link-service noto-sans-jp"
              :to="{ path: '/', hash: '#service' }"
              @click.native="closeMenu">
              Service
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__link-works noto-sans-jp"
              :to="{ path: '/', hash: '#works' }"
              @click.native="closeMenu">
              Works
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__link-about noto-sans-jp"
              :to="{ path: '/', hash: '#about' }"
              @click.native="closeMenu">
              About
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="header__link-contact noto-sans-jp"
              :to="{ path: '/', hash: '#contact' }"
              @click.native="closeMenu">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
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
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped></style>