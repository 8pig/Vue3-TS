<template>
  <div class="home">
    <modal :isOpen="show" @close-modal="onModalClose" />
    <button @click="modalOpen">open modal</button>
    <p>x: {{x}}</p>
    <p>y: {{y}}</p>

    <div @click="wind(123)">
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
import Modal from '@/components/Modal.vue'
import { defineComponent,
    reactive,
    toRefs,
    watch,
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
    Modal

  },
  methods: {
    wind(num: []) {
      console.log(num);
    }
  },
  setup:  function () {
    const {x, y} = mouse();
    const { result, loading, error }  =  useUrl<DogResult>('https://dog.ceo/api/breeds/image/random');
    const { result: catresult, loading:catloading, error: caterror }  =  useUrl<CatResult[]>('https://api.thecatapi.com/v1/images/search');
    watch([result, catresult], () => {
      console.log(result.value?.message, 'dog');
      console.log(catresult.value?.[0].url,'cat')
    })

    const modalIsOpen = reactive({
      show: false
    })
    const modalOpen = () => {
      modalIsOpen.show = true;
    }
    const onModalClose = () => {
      modalIsOpen.show = false;
    }

    return {
      x, y,
      loading, error, result,
      catloading, caterror, catresult,
      ...toRefs(modalIsOpen),
      modalOpen, onModalClose
    }
  }
});
</script>
