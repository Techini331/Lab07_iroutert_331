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
    { name: 'Smoothcup  Coffee', imageSrc: 'https://image.makewebeasy.net/makeweb/m_1920x0/sEBH5Q7g0/SHOP2/WebHug2_1.jpg' },
    { name: 'Chill  Coffee', imageSrc: 'https://i.pinimg.com/564x/77/0a/1e/770a1e29215dc0a3398c3c8cf882efb1.jpg' },
    { name: 'Yensabai  Coffee', imageSrc: 'https://i.pinimg.com/564x/22/f5/1e/22f51e1e04194c4ea668b9ec05241452.jpg' },
    { name: 'Lamoon Coffee', imageSrc: 'https://i.pinimg.com/564x/58/e9/e7/58e9e710cff1fbd332ff6c85c2df4f7d.jpg' },
    { name: 'Lucky  Coffee', imageSrc: 'https://i.pinimg.com/564x/6e/c7/c3/6ec7c3c92d2b1fce462cfbdb9ceaab92.jpg' },
    { name: 'Goodmood  Coffee', imageSrc: 'https://i.pinimg.com/564x/a5/33/81/a533814d24c7c9a5c6727429b8780eee.jpg' },
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
