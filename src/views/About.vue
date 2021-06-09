<template>
  <div class="about">
    <h1 :style="{background: data.red}">This is an about page</h1>
    <p>{{data.red}}</p>
    <p>{{data.msg}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs
} from 'vue';

export default defineComponent({
  name: 'about',
  setup() {
    const data = ref({red: '', msg: ''})
    onMounted(() => {
      setTimeout(() => {
        console.log(1);
        data.value = {red: 'rgb(0,0,0)', msg: 'success'}
      }, 3000);
    })
    // const rdata =  data
    return {
      data
    }
  }
})
</script>

