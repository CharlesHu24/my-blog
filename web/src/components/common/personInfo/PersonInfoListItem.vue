<template>
  <div class="col-sm-3 col-xs-6">
    <div class="team-single-wrapper">
      <div class="team-single">
        <div class="person-thumb">
          <slot name="person-img"></slot>
<!--          <img src="../../../../public/images/aboutus/1.jpg" class="img-responsive" alt="">-->
        </div>
        <div class="social-profile">
          <ul class="nav nav-pills">
            <li><a href="https://github.com/CharlesHu24"><i class="fa fa-github"></i></a></li>
            <li><a href="#"><i class="fa fa-qq"></i></a></li>
            <li><a href="#"><i class="fa fa-weibo"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="person-info">
        <slot name="person-name"></slot>
        <slot name="person-status"></slot>
<!--        <h2>John Doe</h2>-->
<!--        <p>CEO &amp; Developer</p>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfoListItem"
}
</script>

<style scoped>

</style>