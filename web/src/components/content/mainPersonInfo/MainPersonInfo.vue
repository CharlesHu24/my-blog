<template>
  <PersonInfoList>
<!--  一个item为一组，一组里面显示4个  -->
    <div class="item active">
      <PersonInfoListItem>
<!--        头像-->
        <img slot="person-img" src="../../../../public/images/aboutus/head.jpg" class="img-responsive" alt="">
<!--        名字-->
        <h2 slot="person-name">CharlesHu</h2>
<!--        职位-->
        <p slot="person-status">student</p>
      </PersonInfoListItem>
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/1.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">CharlesHu</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/1.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">CharlesHu</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/1.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">CharlesHu</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
    </div>
    <div class="item">
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/2.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">hcl</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/2.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">hcl</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/2.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">hcl</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
    </div>
    <div class="item">
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/1.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">CharlesHu</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
      <PersonInfoListItem>
        <img slot="person-img" src="../../../../public/images/aboutus/1.jpg" class="img-responsive" alt="">
        <h2 slot="person-name">CharlesHu</h2>
        <p slot="person-status">student</p>
      </PersonInfoListItem>
    </div>
  </PersonInfoList>
</template>

<script>
import PersonInfoList from "@/components/common/personInfo/PersonInfoList";
import PersonInfoListItem from "@/components/common/personInfo/PersonInfoListItem";

export default {
  name: "MainPersonInfo",
  components: {
    PersonInfoList,
    PersonInfoListItem
  }
}
</script>

<style scoped>

</style>