<template>
  <div>
    <ul class="row">
      <li class="col-4 mb-5"
        v-for="column in list"
        :key="column.id">
          <div class="card h-100 shadow" style="width: 18rem;">
            <div class="card-body text-center">
              <img :src="column.avatar" class="border border-light w-25 my-3" alt="">
              <h5 class="card-title">{{column.title}}</h5>
              <p class="card-text">{{column.description}}</p>
              <a href="#" class="btn btn-outline-primary ">进入专栏</a>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface ColumProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}



export default defineComponent({
  name: 'ColumList',
  props: {
    list: {
      type: Array as PropType<ColumProps []>,
      required: true
    } 
  },
  setup() {
   return {

   }
  }

})
</script>
