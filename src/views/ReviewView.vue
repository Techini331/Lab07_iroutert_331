<template>
  <div class="review">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">This is an Review page</h1>
         <br>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4" v-for="(review, index) in reviews" :key="index">
          <div class="card shadow-sm" @click="showReview(index)">
            <img :src="review.imageSrc" :alt="review.name" width="100%" height="260" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{ review.name }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reviews = [
  { name: 'Smoothcup  Coffee', imageSrc: 'src/assets/img/Smoothcup Coffee.jpg' },
  { name: 'Chill  Coffee', imageSrc: 'src/assets/img/Chill Coffee.jpg' },
  { name: 'Yensabai  Coffee', imageSrc: 'src/assets/img/Yensabai Coffee.jpg' },
  { name: 'Lamoon Coffee', imageSrc: 'src/assets/img/Lamoon Coffee.jpg' },
  { name: 'Lucky  Coffee', imageSrc: 'src/assets/img/Lucky Coffee.jpg' },
  { name: 'Goodmood  Coffee', imageSrc: 'src/assets/img/Goodmood Coffee.jpg' },
];

const showReview = (index) => {

  console.log(`Review: ${reviews[index].name}`);
};
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
