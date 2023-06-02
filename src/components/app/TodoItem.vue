<script setup>
import { ref } from 'vue';
import CheckBox from './utils/CheckBox.vue';
const isDone = ref(false);

function setTodoState(args){
    isDone.value = args;
}

</script>

<template>
    <div class="flex justify-start items-center gap-2 px-6 text-lg w-full">
        <CheckBox @check ="setTodoState($event)"/>
        <div :class="`flex justify-start items-center relative w-full sm:w-auto whitespace-nowrap overflow-x-auto ${(isDone?'text-zinc-300/30 select-none':'delay-200')} transition-colors duration-200`">
            <p class="pt-0.5 px-3 w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, impedit?</p>
            <span :class="`absolute top-4 bg-zinc-200/50 ${(isDone?'w-full h-[1px] delay-200':'w-0 h-0')} transition-all duration-150 ease-in`"></span>
        </div>
    </div>

</template>