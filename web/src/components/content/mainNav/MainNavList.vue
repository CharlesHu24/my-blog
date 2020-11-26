<template>
  <NavList>
    <NavListItem path="/home">
      <span slot="nav-text">首页</span>
    </NavListItem>
    <NavListItem path="/blog">
      <span slot="nav-text">博客</span>
    </NavListItem>
    <NavListItem path="/about">
      <span slot="nav-text">关于我们</span>
    </NavListItem>
  </NavList>
</template>

<script>
  import NavList from "components/common/nav/NavList";
  import NavListItem from "components/common/nav/NavListItem";

  export default {
    name: "MainNavList",
    components: {
      NavList,
      NavListItem
    }
  }
</script>

<style scoped>

</style>
