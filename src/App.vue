<script setup>
import { RouterView} from 'vue-router'
import BolgHeader from '@/views/BlogHeader.vue';
import Jumbo from  '@/views/JumboHead.vue';


</script>

<template>
   
<div class="container">
  <BolgHeader></BolgHeader>
<Jumbo title="My Title" desc="csmju Drop tomorrow"></Jumbo>
<div class="main">
  <RouterView />
</div>
<div class="footer"></div>
</div>
</template>

<style scoped></style>
