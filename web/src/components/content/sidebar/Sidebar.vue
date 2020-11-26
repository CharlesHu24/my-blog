<template>
  <div class="sidebar blog-sidebar">
    <div class="sidebar-item">
      <!--              使用element-ui第三方日历组件-->
      <div class="calendar-wrap">
        <el-calendar :first-day-of-week=7>
        </el-calendar>
      </div>
    </div>
    <div class="sidebar-item categories">
      <h3>Categories</h3>
      <ul class="nav navbar-stacked">
        <li><a href="#">Lorem ipsum<span class="pull-right">(1)</span></a></li>
        <li class="active"><a href="#">Dolor sit amet<span class="pull-right">(8)</span></a></li>
        <li><a href="#">Adipisicing elit<span class="pull-right">(4)</span></a></li>
        <li><a href="#">Sed do<span class="pull-right">(9)</span></a></li>
        <li><a href="#">Eiusmod<span class="pull-right">(3)</span></a></li>
        <li><a href="#">Mockup<span class="pull-right">(4)</span></a></li>
        <li><a href="#">Ut enim ad minim <span class="pull-right">(2)</span></a></li>
        <li><a href="#">Veniam, quis nostrud <span class="pull-right">(8)</span></a></li>
      </ul>
    </div>
    <div class="sidebar-item popular">
      <h3>Latest Photos</h3>
      <ul class="gallery">
        <li><a href="#"><img src="images/portfolio/popular1.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/portfolio/popular2.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/portfolio/popular3.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/portfolio/popular4.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/portfolio/popular5.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/portfolio/popular1.jpg" alt=""></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped>
  .calendar-wrap /deep/ .el-calendar__header {
    display: block;
    text-align: center;
    padding: 10px;
  }

  .calendar-wrap /deep/ .el-calendar__body {
    text-align: center;
    padding: 0;
  }

  .calendar-wrap /deep/ .el-calendar-table thead th {
    text-align: center;
  }

  .calendar-wrap /deep/ .el-calendar-table .el-calendar-day {
    height: 100%;
  }

  .calendar-wrap /deep/ .el-calendar-table tr td:first-child,
  .calendar-wrap /deep/ .el-calendar-table tr td:last-child {
    background-color: #f9f8fe;
  }

</style>
