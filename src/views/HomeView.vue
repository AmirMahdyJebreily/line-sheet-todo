<script setup>
import MacButtons from "../components/Design/MacButtons.vue";
import TerminalIcon from "../components/Icons/TerminalIcon.vue";
import TodoItem from "../components/app/TodoItem.vue";



</script>

<template>
  <div class="lstda-window">

    <!--Header sections-->
    <header class="lstda-header-section">
      <div class="lstda-header-title-container">
        <TerminalIcon />
        <h1 class="lstda-header-title">Line Sheet todo app</h1>
      </div>
      <h2 class="lstda-header-sub-title"><span class="lstda-header-sub-title-dollarsign">$</span> just write to do</h2>
      <MacButtons />
    </header>

    <main class="h-full px-1 overflow-x-hidden overflow-y-auto z-0 mr-1.5 text-zinc-400 font-mono flex flex-col items-start gap-0">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </main>
    
  </div>
</template>
