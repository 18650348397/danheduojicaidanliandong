<template>
  <div class="asileLeft">
    <el-aside class="slider_container">
        <el-menu class="sub_meuns_wapper" mode="vertical" :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
          <!-- 菜单组件 -->
          <side-Meuns :menuList="menuList"></side-Meuns>
        </el-menu>
      </el-aside>
  </div>
</template>

<script>
import sideMeuns from './sideMeuns';
export default {
  name: "asileLeft",
  data(){
    return {
      menuList: []
    }
  },
  components: { sideMeuns },
  methods:{
    
  },
  created(){
    console.log('1',this.$route.path);
    this.menuList = this.$router.options.routes
  }
};
</script>

<style lang='less' scoped>
</style>


