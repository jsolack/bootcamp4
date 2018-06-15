<template slot='navdropdowncomp'>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" @click="toggleMenu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
</template>

<script>
export default {
  name: 'navdropdowncomp',
  methods: {
    toggleMenu: function(){
      $('.dropdown-menu').toggle()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
