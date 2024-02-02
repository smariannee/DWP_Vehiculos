<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div id="app">
    <header>
      <Navbar/>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
</style>
