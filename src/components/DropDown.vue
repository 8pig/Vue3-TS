<template>
    <div class="dropdown" ref="dropDownRef">
      <button
        @click="changeShow"
        type="button" class="btn btn-primary dropdown-toggle">
        {{title}}
      </button>
      <ul class="dropdown-menu" :style="{display:isShow?'block':'none'}">
        <slot></slot>
      </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue';



export default defineComponent({
  name: 'drop-down',
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup(){
    let isShow = ref(false);
    let dropDownRef = ref<null | HTMLElement>(null)
    const changeShow = () => {
      isShow.value = !isShow.value;
    }
    const handler = (e: MouseEvent) => {
      if(dropDownRef.value){
        if(!dropDownRef.value.contains(e.target as HTMLElement) && isShow.value){
          isShow.value = false;
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })

    return {
      isShow,
      changeShow,
      dropDownRef
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
