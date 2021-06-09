<template>
  <div class="home">
    <ColumnList :list="list" />

  </div>
</template>

<script lang="ts">

import {
    defineComponent, reactive, toRefs,

} from 'vue';

import ColumnList, { ColumProps } from '@/components/ColumnList.vue'
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
]

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList

  },
  methods: {

  },
  setup:  function () {
    const list = reactive({
      list: testData
    })
    return {
      ...toRefs(list)
    }
  }
});
</script>
