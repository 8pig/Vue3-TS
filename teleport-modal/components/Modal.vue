<template>
  <teleport to='#modal'>
    <div id="modal-center" v-if="isOpen">
      123
      <button @click="buttonClick">close</button>
    </div>
  </teleport>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    isOpen: Boolean,
  },
  emits: {
    'close-modal': null
  },
  setup(p,c){
    const buttonClick = () => {
      c.emit('close-modal', {type: 'close'})
    }

    return {
      buttonClick
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#modal-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
  margin-top: -150px;
  background: #ccc;
  border: 4px solid #333;
}
</style>
