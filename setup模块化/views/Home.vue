<template>
  <div class="home">
    <p>x: {{x}}</p>
    <p>y: {{y}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref,
    watch,
    onMounted,
    onUnmounted
} from 'vue';
import mouse from "./useMosePosition"


export default defineComponent({
  name: 'Home',
  components: {

  },
  setup: function () {
    const {x, y} = mouse();
    // const data = reactive({
    //   ...m1
    // })
    return {
      x, y
    }
  }
});
</script>
