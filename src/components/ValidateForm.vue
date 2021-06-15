<template>
  <form class="validate-form-container">
    <slot name="default">

    </slot>
    <div class="submit-area" @click.prevent="submitData">
      <slot name="submit">
        <button type="submit" class="btn-primary btn" >submit</button>
      </slot>

    </div>

  </form>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'validate-form',
  emits:['form-submit'],
  setup(props, ctx){
    const submitData = () => {
      ctx.emit('form-submit', '1234')
    }
    return {
      submitData
    }

  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
