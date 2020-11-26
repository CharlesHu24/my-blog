<template>
  <section id="team">
    <div class="container">
      <div class="row">
        <h1 class="title text-center wow fadeInDown" data-wow-duration="500ms" data-wow-delay="300ms">Meet the Team</h1>
        <p class="text-center wow fadeInDown" data-wow-duration="400ms" data-wow-delay="400ms">Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. <br>
          Ut enim ad minim veniam, quis nostrud </p>

<!--        个人信息滚动条-->
        <Carousel/>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "@/components/common/carousel/Carousel";

export default {
  name: "AboutTeam",
  components: {
    Carousel
  }
}
</script>

<style scoped>

</style>