<template>
  <div>
    <div class="container">
      <header class="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
        <div id="wrapper_header" class="wrapper">
          <div class="logo">
            <div class="widget-header-logo widget-header-logo-3">
              <img src="@/assets/logocoffee123.png" alt="Logo" width="100" height="150" class="me-2" /> 
              <p class="text-center logo-text logo-bold">Club Cafe</p>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center"></div>
        <ul class="nav nav-pills d-flex align-items-center">
          <li class="nav-item" @click="navigateTo('/')"> ☕ CoffeeShop</li>
          <li class="nav-item" style="margin-left: 20px;" @click="navigateTo('/review')">✍️ Review</li>
          <li class="nav-item" style="margin-left: 20px;" @click="navigateTo('/about')"> ℹ️ About</li>
        </ul>
      </header>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>

.nav-item {
  font-size: 20px; 
}

.logo-text.logo-bold {
  font-weight: bold;
  font-size: 22px; 
}


</style>

