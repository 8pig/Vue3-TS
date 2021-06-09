import {onMounted, onUnmounted, reactive, toRefs, ref} from "vue";
import axios from "axios";



const useUrl = <T>(url: string) => {
    const resultObj = reactive({
        loading: true,
        result :<T | null> (null),
        error: null,
        getData () {
            return new Promise(resolve => {
                axios.get(url).then(rawData => {
                    this.result = rawData.data
                    console.log(111);
                    resolve(true)
                }).catch(e => {
                    this.error = e;
                }).finally(() => {
                    this.loading  = false;
                })
            })
        }

    })
    // const getData = () => {
    //     axios.get(url).then(rawData => {
    //         resultObj.result = rawData.data;
    //         console.log(111);
    //     }).catch(e => {
    //         resultObj.error = e;
    //     }).finally(() => {
    //         resultObj.loading  = false;
    //     })
    // }
    onMounted(() => {
        resultObj.getData()
    })
    return {
        ...toRefs(resultObj)
    }
}
export  default useUrl;