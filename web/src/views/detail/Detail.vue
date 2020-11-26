<template>
  <div>
    <Breadcrumb>
      <h1 slot="blog-title" class="title">Blog Detail</h1>
      <p slot="blog-desc">每条博客记录</p>
    </Breadcrumb>
    <!--/#page-breadcrumb-->

    <section id="blog-details" class="padding-top">
      <div class="container">
        <div class="row">
          <DetailContentLeft/>
          <div class="col-md-3 col-sm-5">
            <!--          侧边栏-->
            <Sidebar/>
          </div>
        </div>
      </div>
    </section>
    <!--/#blog-->
  </div>
</template>

<script>
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import DetailContentLeft from "@/views/detail/childComps/DetailContentLeft";
import Sidebar from "../../components/content/sidebar/Sidebar";

  export default {
    name: "Detail",
    components: {
      Breadcrumb,
      DetailContentLeft,
      Sidebar
    }
  }
</script>

<style scoped>

</style>
