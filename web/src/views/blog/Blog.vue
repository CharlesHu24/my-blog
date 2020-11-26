<template>
  <div>
    <Breadcrumb>
      <h1 slot="blog-title" class="title">Blog</h1>
      <p slot="blog-desc">博客记录</p>
    </Breadcrumb>
    <!--/#page-breadcrumb-->

    <section id="blog" class="padding-top">
      <div class="container">
        <div class="row">
          <!--          每条博客-->
          <MainBlog/>
          <!--          侧边栏-->
          <div class="col-md-3 col-sm-5">
            <Sidebar/>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--/#blog-->
</template>

<script>
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import MainBlog from "@/components/content/mainBlog/MainBlog";
import Sidebar from "../../components/content/sidebar/Sidebar";

export default {
  name: "Blog",
  components: {
    Breadcrumb,
    MainBlog,
    Sidebar
  }
}
</script>

<style scoped>

</style>
