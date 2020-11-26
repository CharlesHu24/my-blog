<template>
  <section id="home-main-content">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-7">
          <div class="row">
            <div class="col-sm-9 blog-top5">
              <h2>推荐</h2>
              <ul>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
              </ul>
            </div>
            <div class="col-sm-9 blog-top5">
              <h2>news</h2>
              <ul>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
              </ul>
            </div>
            <div class="col-sm-9 blog-top5">
              <h2>点击最多</h2>
              <ul>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
                <li>
                  <h3><a href="">这是第一条文章</a></h3>
                  <small>2020.11.09</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-5">
<!--          侧边栏-->
          <Sidebar/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Sidebar from "../../../components/content/sidebar/Sidebar";

  export default {
    name: "HomeMainContent",
    components: {
      Sidebar
    },
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>

<style scoped>
  .blog-top5 ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .blog-top5 ul li a {
    color: #333
  }

  .blog-top5 ul li a:hover,
  .blog-top5 ul li a:focus {
    color: #dbb075;
    background: none;
  }


</style>
