<template>
  <section id="page-breadcrumb">
    <div class="vertical-center sun">
      <div class="container">
        <div class="row">
          <div class="action">
            <div class="col-sm-12">
              <slot name="blog-title"></slot>
              <slot name="blog-desc"></slot>
<!--              <h1 class="title">Blog</h1>-->
<!--              <p>Blog with right sidebar</p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Breadcrumb"
}
</script>

<style scoped>

</style>