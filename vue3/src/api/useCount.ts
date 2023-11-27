import {ref} from "vue"
export function useCount(){

    const count = ref<number>(666666)
    
    return{count}
}