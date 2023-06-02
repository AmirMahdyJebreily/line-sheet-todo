<script setup>
import CheckIcon from "../../Icons/CheckIcon.vue";
import { ref } from "vue";
const cheked = ref(false);

const emit = defineEmits(["check"])


function setCheck(){
    cheked.value = !cheked.value;
    emit("check",cheked.value);
}

</script>

<template>
  <span @click="setCheck()" :class="`lstda-flex-center rounded border-zinc-800/90 shadow-black/70 w-6 h-6 transition-all duration-200 ${(cheked)?'shadow-none border-0 bg-transparent':'shadow-lg border bg-zinc-950/90'}`">
    <CheckIcon :class="(cheked)?'opacity-100':'opacity-0' + ' transition-opacity duration-150'" />
  </span>
</template>
