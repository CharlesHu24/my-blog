<template>
  <div class="col-md-9 col-sm-7">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="single-blog blog-details two-column">
          <div class="post-thumb">
            <!--            博客图片-->
            <!--                    <a href="#">-->
            <img src="../../../../public/images/blog/7.jpg" class="img-responsive" alt="">
            <!--                    </a>-->
            <div class="post-overlay">
              <!--              博客日期-->
              <span class="uppercase"><a href="#">14<br><small>Feb</small><small>2013</small></a></span>
            </div>
          </div>
          <div class="post-content overflow">
            <!--            博客标题-->
            <h2 class="post-title bold"><a href="#">Advanced business cards design</a></h2>
            <!--            博客作者-->
            <h3 class="post-author"><a href="#">Posted by micron News</a></h3>
            <!--            博客内容-->
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
                here', making it look like readable English. </p>
            </div>
            <div class="post-bottom overflow">
              <ul class="nav navbar-nav post-nav">
<!--                博客所属标签-->
                <li><a href="#"><i class="fa fa-tag"></i>Creative</a></li>
<!--                点赞数-->
                <li><a href="#"><i class="fa fa-heart"></i>32 Love</a></li>
<!--                留言数-->
                <li><a href="#"><i class="fa fa-comments"></i>3 Comments</a></li>
              </ul>
            </div>

<!--            分割线-->
<!--            分割线-->
<!--            分割线-->
<!--            分割线-->




            <div class="blog-share">
              <span class='st_facebook_hcount'></span>
              <span class='st_twitter_hcount'></span>
              <span class='st_linkedin_hcount'></span>
              <span class='st_pinterest_hcount'></span>
              <span class='st_email_hcount'></span>
            </div>
            <div class="author-profile padding">
              <div class="row">
                <div class="col-sm-2">
                  <img src="../../../../public/images/blogdetails/1.png" alt="">
                </div>
                <div class="col-sm-10">
                  <h3>Rodrix Hasel</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi</p>
                  <span>Website:<a href="www.jooomshaper.com"> www.jooomshaper.com</a></span>
                </div>
              </div>
            </div>
            <div class="response-area">
              <h2 class="bold">Comments</h2>
              <ul class="media-list">
                <li class="media">
                  <div class="post-comment">
                    <a class="pull-left" href="#">
                      <img class="media-object" src="../../../../public/images/blogdetails/2.png" alt="">
                    </a>
                    <div class="media-body">
                      <span><i class="fa fa-user"></i>Posted by <a href="#">Endure</a></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.</p>
                      <ul class="nav navbar-nav post-nav">
                        <li><a href="#"><i class="fa fa-clock-o"></i>February 11,2014</a></li>
                        <li><a href="#"><i class="fa fa-reply"></i>Reply</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="parrent">
                    <ul class="media-list">
                      <li class="post-comment reply">
                        <a class="pull-left" href="#">
                          <img class="media-object" src="../../../../public/images/blogdetails/3.png" alt="">
                        </a>
                        <div class="media-body">
                          <span><i class="fa fa-user"></i>Posted by <a href="#">Endure</a></span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut </p>
                          <ul class="nav navbar-nav post-nav">
                            <li><a href="#"><i class="fa fa-clock-o"></i>February 11,2014</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="media">
                  <div class="post-comment">
                    <a class="pull-left" href="#">
                      <img class="media-object" src="../../../../public/images/blogdetails/4.png" alt="">
                    </a>
                    <div class="media-body">
                      <span><i class="fa fa-user"></i>Posted by <a href="#">Endure</a></span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi.</p>
                      <ul class="nav navbar-nav post-nav">
                        <li><a href="#"><i class="fa fa-clock-o"></i>February 11,2014</a></li>
                        <li><a href="#"><i class="fa fa-reply"></i>Reply</a></li>
                      </ul>
                    </div>
                  </div>
                </li>

              </ul>
            </div><!--/Response-area-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailContentLeft"
}
</script>

<style scoped>
.post-content p {
  margin-bottom: 20px;
}
</style>