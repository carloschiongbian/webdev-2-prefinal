<template>
  <div class="home">
    <SearchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "./SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
  },
};
</script>

<style>
  @import '../public/css/HomePage/home.css';
</style>