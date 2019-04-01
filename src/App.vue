<template>
  <main id="app">
    <app-header></app-header>
    <app-introduction></app-introduction>
    <app-about></app-about>
    <app-projet></app-projet>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </main>
</template>

<script>
import Introduction from './components/Introduction.vue'
import About from './components/About.vue'
import Projet from './components/Projet.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    "app-introduction": Introduction,
    "app-about": About,
    "app-projet": Projet,
    "app-contact": Contact
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_general.scss';

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 85vw;
  margin: 0 auto;
  position: relative;
}
</style>
