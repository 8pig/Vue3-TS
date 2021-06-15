<template>
  <div class="home">
    <NavBar :user="user" />
    <ColumnList
      :list="list"
    />

  </div>
</template>

<script lang="ts">

import {
    defineComponent, reactive, toRefs,

} from 'vue';

import ColumnList, { ColumProps } from '@/components/ColumnList.vue'
import NavBar, { UserProps } from '@/components/NavBar.vue'
const testData: ColumProps[] = [
  {
    id: 1,
    title: '专栏1',
    description: 'https://img-cdn.ainiseo.com/logo/new_logo.png',
    avatar: 'https://img-cdn.ainiseo.com/logo/new_logo.png'
  },
    {
    id: 2,
    title: '专栏2',
    description: 'https://img-cdn.ainiseo.com/logo/new_logo.png',
    avatar: 'https://img-cdn.ainiseo.com/logo/new_logo.png'
  },
    {
    id: 3,
    title: '专栏3',
    description: 'https://img-cdn.ainiseo.com/logo/new_logo.png',
    avatar: 'https://img-cdn.ainiseo.com/logo/new_logo.png'
  },
    {
    id: 4,
    title: '专栏4',
    description: 'https://img-cdn.ainiseo.com/logo/new_logo.png',
    avatar: 'https://img-cdn.ainiseo.com/logo/new_logo.png'
  },
    {
    id: 5,
    title: '专栏5',
    description: 'https://img-cdn.ainiseo.com/logo/new_logo.png',
    avatar: 'https://img-cdn.ainiseo.com/logo/new_logo.png'
  }
]

const currUserr: UserProps =  {
  isLogin: true,
  name: '赵洲',
  id: '123'
}

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    NavBar

  },
  methods: {

  },
  setup:  function () {
    const list = reactive({
      list: testData
    })
    return {
      ...toRefs(list),
      user: currUserr
    }
  }
});
</script>
