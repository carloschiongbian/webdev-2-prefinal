<template>
  <ul>
    <li><router-link to="/" @click="refreshPage()">Food Menu</router-link></li>
    <li><router-link to="/cart">Cart</router-link></li>
  </ul>
  <router-view />
</template>

<script>

export default {
  methods:{
    refreshPage: function () {
      window.location.replace("http://localhost:8080/#/");
    }
  },

  mounted: function () {
    this.refreshPage();
  }
}


</script>

<style>

@import './public/css/App/app.css';
</style>
