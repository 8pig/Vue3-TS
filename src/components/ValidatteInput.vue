<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{'is-invalid': inputRefVal.error}"
      :value="inputRefVal.val"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs"
    />
    <div v-if="inputRefVal.error" class="invalid-feedback">{{inputRefVal.messaage}}</div>
  </div>

</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';

const reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[];
export default defineComponent({
  name: 'validate-input',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props, ctx){
    const inputRefVal = reactive({
      val: props.modelValue || '',
      error: false,
      messaage: ''
    })
    const validateInput = () => {
      if(props.rules){
        const allPass = props.rules.every(rule => {
          let passed = true;
          inputRefVal.messaage = rule.message;
          switch(rule.type) {
            case 'required':
              passed = (inputRefVal.val.trim() !== '')
              break;
            case 'email':
              passed = (reg.test(inputRefVal.val))
              break;
          }
          return passed;
        })
        inputRefVal.error = !allPass;
      }
    }

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRefVal.val = targetValue;
      ctx.emit('update:modelValue', targetValue)



    }
    return {
      inputRefVal,
      updateValue,
      validateInput
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
