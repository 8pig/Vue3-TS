<template>
  <div class="about">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱</label>
        <input
          type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
          >
        <div id="emailHelp" class="form-text" v-if="emailRef.errror">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">t</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <validate-input :rules="emailRules" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive
} from 'vue';
import ValidateInput, { RulesProp } from "@/components/ValidatteInput.vue";
const reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
export default defineComponent({
  name: 'about',
  components: {ValidateInput},
  setup(){
    const emailRef = reactive({
      errror: false,
      message: '',
      val: '',
    });
    const emailRules: RulesProp = [
      {type: 'required', message: 'not empty'},
      { type: 'email', message: '请输入正确邮件地址'}
    ]



    const validateEmail= () => {
      if(emailRef.val.trim() === ''){
        emailRef.message = 'not be empty'
        emailRef.errror = true;
      }else if (!reg.test(emailRef.val)) {
        emailRef.message = '无效邮箱'
        emailRef.errror = true;
      }else {
        emailRef.message = '';
        emailRef.errror = false;
      }

    }


    return {
      emailRef,
      validateEmail,
      emailRules
    }
  }

})
</script>

