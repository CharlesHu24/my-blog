<template>
  <div>
    <HomeSlider/>
    <HomeMainContent/>
  </div>
</template>

<script>
  import HomeSlider from "./childComps/HomeSlider";
  import HomeMainContent from "./childComps/HomeMainContent";

  export default {
    name: 'Home',
    components: {
      HomeSlider,
      HomeMainContent
    }
  }
</script>
