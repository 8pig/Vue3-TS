<template>
  <div class="home">
    <p>x: {{x}}</p>
    <p>y: {{y}}</p>
    <!-- <p>{{loading}}</p>
    <p>{{error}}</p>
    <p>{{ result?.message }}</p> -->
    <div>
      <p>dog</p>
      <p v-if="loading"> loading...</p>
      <img :src="result.message" v-if="!loading" alt="" />
      <p>cat</p>
      <p v-if="catloading"> loading...</p>
      <img :src="catresult[0].url" v-if="!catloading" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref,
    watch,
    onMounted,
    onUnmounted
} from 'vue';
import mouse from "./useMosePosition"
import useUrl from "./useUrl";

interface DogResult {
  message: string,
  status: string
}

interface CatResult {
  id: string,
  url: string,
  width: number,
  height: number

}


export default defineComponent({
  name: 'Home',
  components: {

  },
  setup:  function () {
    const {x, y} = mouse();
    const { result, loading, error }  =  useUrl<DogResult>('https://dog.ceo/api/breeds/image/random');
    const { result: catresult, loading:catloading, error: caterror }  =  useUrl<CatResult[]>('https://api.thecatapi.com/v1/images/search');
    watch([result, catresult], () => {
      console.log(result.value?.message, 'dog');
      console.log(catresult.value?.[0].url,'cat')
    })


    return {
      x, y,
      loading, error, result,
      catloading, caterror, catresult
    }
  }
});
</script>
