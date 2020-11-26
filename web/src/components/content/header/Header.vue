<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 overflow">
          <div class="social-icons pull-right">
            <ul v-if="false" class="nav nav-pills">
              <li><a href="">登录</a></li>
              <li><a href="">注册</a></li>
            </ul>
            <ul v-else class="nav nav-pills">
              <li><img src="~assets/img/ming.jpg" alt="..." class="img-circle person-head"></li>
              <li><span>hcl</span></li>
              <li><a class="exit" href="">退出</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-inverse" role="banner">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" @click="homeClick">
            <h1><img src="../../../../public/images/logo.png" alt="logo"></h1>
          </a>
        </div>
        <!--        导航-->
        <MainNavList/>
      </div>
    </div>
  </header>
</template>

<script>
  import MainNavList from "../mainNav/MainNavList";

  export default {
    name: "Header",
    components: {
      MainNavList
    },

    methods: {
      homeClick() {
        this.$router.replace('/home').catch(() => {
        })
      }
    }
  }
</script>

<style scoped>
  .exit {
    color: #d9534f;
  }

  .person-head {
    width: 24px;
    height: 24px;
  }
</style>
