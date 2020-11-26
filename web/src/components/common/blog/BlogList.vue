<template>
  <div class="col-md-9 col-sm-7">
    <div class="row">
      <slot></slot>
    </div>
    <div class="blog-pagination">
      <ul class="pagination">
        <li><a href="#">left</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li class="active"><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">right</a></li>
      </ul>
    </div>
  </div>

</template>

<script>

export default {
  name: "BlogList"
}
</script>

<style scoped>

</style>