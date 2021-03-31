<template>
  <div class="mainCon">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mainCon",
  components: {},
};
</script>

<style lang='less' scoped>
  .mainCon{
    height: calc(100vh - 116px);
  }
</style>


