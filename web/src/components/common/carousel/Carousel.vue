<template>
  <div id="team-carousel" class="carousel slide wow fadeIn" data-ride="carousel" data-wow-duration="400ms"
       data-wow-delay="400ms">
    <!-- Indicators -->
    <ol class="carousel-indicators visible-xs">
      <li data-target="#team-carousel" data-slide-to="0" class="active"></li>
      <li data-target="#team-carousel" data-slide-to="1"></li>
    </ol>
    <!-- Wrapper for slides -->
    <!--  滚动内容  -->
    <MainPersonInfo/>

    <!-- Controls -->
    <a class="left team-carousel-control hidden-xs" href="#team-carousel" data-slide="prev">left</a>
    <a class="right team-carousel-control hidden-xs" href="#team-carousel" data-slide="next">right</a>
  </div>
</template>

<script>
import MainPersonInfo from "@/components/content/mainPersonInfo/MainPersonInfo";

export default {
  name: "Carousel",
  components: {
    MainPersonInfo
  }
}
</script>

<style scoped>

</style>