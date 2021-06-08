import {onMounted, onUnmounted, reactive, toRefs, ref} from "vue";


interface mousePositions {
    x: number;
    y: number;
    setXY:(e: MouseEvent) => any;
}


function mouse () {
    // const x = ref(0);
    // const y = ref(0);
    //
    // const update = (e:MouseEvent) => {
    //     x.value = e.pageX;
    //     y.value = e.pageY
    // }
    // onMounted(() => {
    //     document.addEventListener('click', update)
    // })
    //
    // onUnmounted(() => {
    //     document.removeEventListener('click', update)
    // })
    // return { x, y }

    const data = reactive({
        x: 0,
        y: 0,
        setData:  (e: MouseEvent) => {
            data.x = e.pageX;
            data.y = e.pageY;
            console.error(data);
        }
    });
    // const  setData = (e: MouseEvent) => {
    //     data.x = e.pageX;
    //     data.y = e.pageY;
    //     console.error(data);
    // }

    onMounted(() => {
        document.addEventListener('click', data.setData);
    })

    onUnmounted(() => {
        document.removeEventListener('click', data.setData);
    })


    const reactData = toRefs(data)

    return {
        ...toRefs(data)
    }
}

export default mouse;