<template>
<!--  <div>-->
<!--    <input ref="textRef"-->
<!--           type="text"-->
<!--           v-model="state.name">-->
<!--    <div>{{state.name}}</div>-->
<!--    <el-button @click="handleAdd()" type="primary">add</el-button>-->
<!--  </div>-->
  <el-container style="height: 100%">
    <el-aside :width="isActive ? '200px' : '64px'">
      <menu-tree></menu-tree>
    </el-aside>
    <el-container>
      <el-header>
        <div class="el-header-svg" @click="handleAdd">
          <svg
              :class="{'is-active':isActive}"
              class="hamburger"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
          >
            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
          </svg>
        </div>
        <div class="el-header-avatar">
          <el-dropdown :show-timeout="0">
            <div class="demo-type">
              <div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>{{ isActive }}</el-main>
    </el-container>
  </el-container>
</template>
<script>
import { reactive, ref } from 'vue'
import MenuTree from '../components/MenuTree'
export default {
  components: {
    MenuTree
  },

  setup () {
    const state = reactive({
      name: ''
    })
    const isActive = ref(true)
    const textRef = ref('ss')
    const handleAdd = () => {
      isActive.value=!isActive.value
      console.log(textRef.value+'---'+isActive.value)
    }
    return {
      state,
      handleAdd,
      textRef,
      isActive
    }
  }

}
</script>
<style scoped>
.el-header-svg{
  height: 100%;
  width: 60px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-header-svg:hover{
  background-color: rgb(249,249,249);

}

.el-header-avatar{
  height: 100%;
  width: 60px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-aside{
  background-color: rgb(48,65,86);
  transition: all 0.3s;
}
.el-header{
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  background-color: rgb(255,255,255);
}
.el-main{
  background-color: rgb(240,242,245);
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
