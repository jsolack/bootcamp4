<template>
  <div id="app">
    <navbarcomp>
      <navlinkcomp slot="link1" title="Home" address="/"></navlinkcomp>
      <navlinkcomp slot="link2" title="Reporting" address="/reporting"></navlinkcomp>
      <navlinkcomp slot="link3" title="About" address="/about"></navlinkcomp>
      <navlinkcomp slot="link4" title="Busted" address="/nothere"></navlinkcomp>
      <navdropdowncomp slot="dropdown1"></navdropdowncomp>
      <navsearchcomp slot='search'></navsearchcomp>
    </navbarcomp>
  <router-view/>
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
