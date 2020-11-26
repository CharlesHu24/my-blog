<template>
  <div class="col-md-6 col-sm-12 blog-padding-right">
    <div class="single-blog two-column">
      <div class="post-thumb pointer">
        <a @click="itemClick">
          <!--        blogItem.img-->
          <slot name="blogItem-img"></slot>
          <!--        <img src="../../../../public/images/blog/timeline/1.jpg" class="img-responsive" alt="">-->
        </a>
        <div class="post-overlay">
          <!--        blogItem.date-->
          <span class="uppercase"><a>14 <br><small>Feb</small><small>2013</small></a></span>
        </div>
      </div>
      <div class="post-content overflow">
        <!--      blogItem.title-->
        <h2 class="post-title bold pointer" @click="itemClick"><a>
          <slot name="blogItem-title"></slot>
        </a></h2>
        <!--      blogItem.author-->
        <h3 class="post-author"><a>
          <slot name="blogItem-author"></slot>
        </a></h3>
        <!--      blogItem.describe-->
        <p>
          <slot name="blogItem-desc"></slot>
          [...]
        </p>
        <!--      查看详情-->
        <span class="pointer">
          <a class="read-more" @click="itemClick">View More</a>
        </span>
        <div class="post-bottom overflow">
          <ul class="nav nav-justified post-nav pointer">
            <!--          blogItem.tag-->
            <li class="blogItem-tag">
              <span><a><i class="fa fa-tag"></i></a></span>
              <slot name="blogItem-tag">
                <slot></slot>
              </slot>
            </li>
            <!--          blogItem.heart-->
            <li><a><i class="fa fa-heart"></i>
              <slot name="blogItem-heart"></slot>
              Love</a></li>
            <!--          blogItem.commentsColumn-->
            <li><a><i class="fa fa-comments"></i>
              <slot name="blogItem-comments-col"></slot>
              Comments</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogListItem",
  methods: {
    itemClick() {
      this.$router.push('/detail')
    }
  }
}
</script>

<style scoped>
.blogItem-tag a {
  display: inline-flex;
}
</style>