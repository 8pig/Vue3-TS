<template>
  <div class="home">
    <p>{{ count }}</p>
    <p>{{ double }}</p>
    <button @click="increment"> increment</button>
    <button @click="updataTitle"> updataTitle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref,
  watch
} from 'vue';


interface DataProps {
  count: number;
  double: number;
  increment: () => void;
}

export default defineComponent({
  name: 'Home',
  components: {

  },
  setup: function () {

    const data: DataProps = reactive({
      count: 0,
      increment: () => {
        data.count++;
      },
      double: computed(() => data.count * 2)
    });
    // 这样 title 是不更新的
    const title = ref('')
    const updataTitle = () => {
      title.value += 'hello'
    }
    //
    /* watch  监听一个 只需要写一个 ， 多个需要写成数组 */
    // watch(title)
    // watch([title, data.count])  // 监听数据 只能看到proxy  解决方法是 getter 方法
    watch([title, () => data.count], (newVal, oldVal) => {
      console.log(newVal, oldVal)
      document.title = title.value;
    })


    return {
      updataTitle,
      title,
      ...toRefs(data)
    }


  }
});
</script>
