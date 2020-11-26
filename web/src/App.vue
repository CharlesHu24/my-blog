<template>
  <div id="app">
    <Header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Footer/>
  </div>
</template>

<script>
  import Header from "components/content/header/Header";
  import Footer from "components/content/footer/Footer";

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
</style>
