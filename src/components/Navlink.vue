<template slot='navlinkcomp'>
  <li class="nav-item active">
    <a class="nav-link" :href="address">{{title}}</a>
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
