<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="nav-link"  to="/">Navbar</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <slot name="link1"></slot>
      <slot name="link2"></slot>
      <slot name="link3"></slot>
      <slot name="link4"></slot>
      <slot name="dropdown1"></slot>
    </ul>
    <slot name="search"></slot>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbarcomp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
