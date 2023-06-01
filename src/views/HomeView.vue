<script setup>
import MacButtons from "../components/Design/MacButtons.vue";
import TerminalIcon from "../components/Icons/TerminalIcon.vue";



</script>

<template>
  <main class="lstda-main-container">
    <section class="lstda-header-section">
      <div class="lstda-header-title-container">
        <TerminalIcon />
        <h1 class="lstda-header-title">Line Sheet todo app</h1>
      </div>
      <h2 class="lstda-header-sub-title"><span class="lstda-header-sub-title-dollarsign">$</span> just write to do</h2>
      <MacButtons />
    </section>
  </main>
</template>
