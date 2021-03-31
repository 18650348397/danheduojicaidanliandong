<template>
  <div class="layOut">
    <el-container>
      <el-header>
        <head-top></head-top>
      </el-header>
      <el-container>
        <el-aside width="230px">
          <asile-left></asile-left>
        </el-aside>
        <el-main>
          <main-con></main-con>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headTop from "@/views/layOut/pages/headTop.vue";
import asileLeft from "@/views/layOut/pages/asileLeft.vue";
import mainCon from "@/views/layOut/pages/mainCon.vue";
export default {
  name: "layOut",
  components: {
    headTop,
    asileLeft,
    mainCon,
  },
};
</script>

<style lang='less' scoped>
/deep/ .el-header,
/deep/ .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/deep/ .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
  width: 230px !important;
}

/deep/ .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0 !important;
  line-height: calc(100vh - 116px);
}

body > .el-container {
  margin-bottom: 40px;
}

/deep/ .el-container:nth-child(5) .el-aside,
/deep/ .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

/deep/ .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

</style>
