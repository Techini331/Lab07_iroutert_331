<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">This is an About page</h1>
       <br>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4" v-for="(shop, index) in coffeeShops" :key="index">
          <div class="card shadow-sm" @click="showShopInfo(index)">
            <img :src="shop.imageSrc" :alt="shop.name" width="100%" height="260" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ shop.name }}</h5>
            </div>
          </div>
        </div>
      </div>
  
      <div class="row mt-5" v-if="selectedShop !== null">
        <div class="col">
          <h3 class="text-center">{{ selectedShop.name }}</h3>
          <p>{{ selectedShop.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const coffeeShops = [
  { 
    name: 'Smoothcup Coffee', 
    imageSrc: 'src/assets/Smoothcup Coffee.jpg',
    
  },
  { 
    name: 'Chill Coffee', 
    imageSrc: 'src/assets/Chill Coffee.jpg',
    
  },
  { 
    name: 'Yensabai Coffee', 
    imageSrc: 'src/assets/Yensabai Coffee.jpg',
    
  },
  { 
    name: 'Lamoon Coffee', 
    imageSrc: 'src/assets/Lamoon Coffee.jpg',
    
  },
  { 
    name: 'Lucky Coffee', 
    imageSrc: 'src/assets/Lucky Coffee.jpg',
   
  },
  { 
    name: 'Goodmood Coffee', 
    imageSrc: 'src/assets/Goodmood Coffee.jpg',
   
  },
];

let selectedShop = null;

const showShopInfo = (index) => {

  selectedShop = coffeeShops[index];
};
</script>

<style scoped>

.about {
  padding: 30px 0;
}

.about p {
  font-size: 16px;
  line-height: 1.5;
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
