<template>
  <div class="home">
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <button @click="increment"> increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue';


interface DataProps {
  count: number;
  double: number;
  increment: () => void;
}

export default defineComponent({
  name: 'Home',
  components: {

  },
  setup () {
    /*
    *  ref 给基本数据类型加上响应式
    * reactive 给对象加上 本质是递归的ref
    * */
    const data: DataProps = reactive({
      count: 0,
      increment: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });

    /*
    *  当你定义完 computed 之后 data 上会有飘红报错  类型错误
    * 这是因为 computed callback之后 类型推论的一个缺陷
    * 解决方法 1. 不管报错 2. 显示的给data指定一个 interface
    *
    * */
    return {
      /*
      * 如果直接结构导出属性  那么导出的属性将失去响应式对象 reactive  必须toRefs重新加上proxy 对象
      * */
      ...toRefs(data)
    }


  }
});
</script>
