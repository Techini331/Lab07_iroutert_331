<template>
  
  <div>
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(business, index) in businesses" :key="index">
            <div class="card shadow-sm" @click="showBusinessDetails(business.name)">
              <img :src="business.imageSrc" :alt="business.name" width="100%" height="260" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ business.name }}</h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const businesses = ref([]);

const router = useRouter();

const showBusinessDetails = (businessId) => {
  router.push({ name: 'business-details', params: { id: businessId } });
};

onMounted(async () => {
 
  businesses.value = [
    { name: 'Smoothcup  Coffee', imageSrc: 'src/assets/Smoothcup Coffee.jpg' },
    { name: 'Chill  Coffee', imageSrc: 'src/assets/Chill Coffee.jpg' },
    { name: 'Yensabai  Coffee', imageSrc: 'src/assets/Yensabai Coffee.jpg' },
    { name: 'Lamoon Coffee', imageSrc: 'src/assets/Lamoon Coffee.jpg' },
    { name: 'Lucky  Coffee', imageSrc: 'src/assets/Lucky Coffee.jpg' },
    { name: 'Goodmood  Coffee', imageSrc: 'src/assets/Goodmood Coffee.jpg' },
  ];
  
});
</script>

<style scoped>

.review {
  padding: 30px 0;
}

.card {
  margin-bottom: 20px;
  cursor: pointer; 
}

.card-title {
  text-align: center;
}

.card:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}
</style>
