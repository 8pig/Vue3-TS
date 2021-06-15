<template>
<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item "><a href="" class="btn btn-outline-dark">注册</a></li>
      <li class="list-inline-item"><a href="" class="btn btn-outline-dark">登录</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item ">
        <drop-down title="下拉">
          <drop-down-item :disabled="true"><a href="javascript:;" class="drropdown-item">新建文章</a></drop-down-item>
          <drop-down-item><a href="javascript:;" class="drropdown-item">编辑资料</a></drop-down-item>
          <drop-down-item><a href="javascript:;" class="drropdown-item">退出</a></drop-down-item>
        </drop-down>
      </li>
    </ul>
  </div>
</nav>

</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

import DropDown from './DropDown.vue'
import DropDownItem from './DropItem.vue'


export interface UserProps {
  isLogin: boolean,
  name?: string,
  id?: string
}

export default defineComponent({
  name: 'nav-bar',
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
