<template>
  <li class="dropdown-option drop-down-item" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent,  } from 'vue';



export default defineComponent({
  name: 'drop-down',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dropdown-option.is-disabled * {
  color: #6c757d !important;
  pointer-events: none !important;
  background-color: transparent !important;
}
</style>
