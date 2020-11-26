<template>
  <li id="nav-list-item" @click="itemClick">
    <a :style="activeStyle"><slot name="nav-text"></slot></a>
  </li>
</template>

<script>
  export default {
    name: "NavListItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#d29948'
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path).catch(() => {})
      }
    },
    computed: {
      isAcitve() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isAcitve ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  #nav-list-item {
    cursor:pointer
  }
</style>
