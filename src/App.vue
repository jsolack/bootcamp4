<template>
  <div id="app">
    <navbarcomp>
      <navlinkcomp title="Home" address="/"></navlinkcomp>
      <navlinkcomp title="Reporting" address="/nope"></navlinkcomp>
      <navlinkcomp title="Search with Google" address="http://www.google.com"></navlinkcomp>
      <navdropdowncomp></navdropdowncomp>
      <navsearchcomp></navsearchcomp>
    </navbarcomp>
  </div>
</template>

<script>

import navbarcomp from './components/Navbar.vue'
import navlinkcomp from './components/Navlink.vue'
import navdropdowncomp from './components/Navdropdown.vue'
import navsearchcomp from './components/Navsearch.vue'

export default {
  name: 'app',
  components: {
    'navbarcomp': navbarcomp,
    'navlinkcomp': navlinkcomp,
    'navdropdowncomp': navdropdowncomp,
    'navsearchcomp': navsearchcomp
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
