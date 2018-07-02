<template slot='navlinkcomp'>
  <li class="nav-item active">
    <router-link class="nav-link"  :to="address">{{title}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'navlinkcomp',
  props: ['title', 'address'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
