<template>
  <div class="business-details">
    <h2>{{ selectedBusiness.name }}</h2>
    <div class="details">
      <p v-if="selectedBusiness"><strong>เบอร์โทรร้าน:</strong> {{ selectedBusiness.phone }}</p>
      <p v-if="selectedBusiness"><strong>ที่อยู่:</strong> {{ selectedBusiness.address }}</p>
      <p v-if="selectedBusiness"><strong>เวลาเปิด:</strong> {{ selectedBusiness.openingHours }}</p>
      <p v-if="selectedBusiness"><strong>เมนู:</strong> {{ selectedBusiness.menuDescription }}</p>
      <p v-if="selectedBusiness"><strong>รายละเอียดเพิ่มเติม:</strong> {{ selectedBusiness.additionalDetails }}</p>
      <!-- เพิ่มข้อมูลราคาและขนาด -->
      <p v-if="selectedBusiness"><strong>ราคา:</strong> {{ selectedBusiness.price }} บาท</p>
      <p v-if="selectedBusiness"><strong>ขนาด:</strong> {{ selectedBusiness.size }}</p>
    
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();



const businesses = [
{
  
    name: 'Smoothcup  Coffee', 
    phone: '02-123-4567', 
    address: '123 ถนนสายสุข', 
    openingHours: '8:00 AM - 6:00 PM', 
    menuDescription: 'เมนูคาเฟ่คลาสสิก', 
    additionalDetails: 'ร้านคาเฟ่สบายๆ บรรยากาศดี มีเมนูคาเฟ่คลาสสิกให้เลือก',
    price: '100 ',
    size: 'แก้วเล็ก'
},

  { 
    name: 'Chill  Coffee', 
    phone: '02-987-6543', 
    address: '456 ถนนร่มเย็น', 
    openingHours: '7:00 AM - 8:00 PM', 
    menuDescription: 'เมนูกาแฟสด', 
    additionalDetails: 'ร้านคาเฟ่ที่มีกาแฟสดและบรรยากาศดี ให้บริการตลอดวัน' ,
    price: '120 ',
    size: 'แก้วใหญ่'
  },
  { 
    name: 'Yensabai  Coffee', 
    phone: '02-555-6666', 
    address: '789 ถนนรื่นฤดี', 
    openingHours: '9:00 AM - 5:00 PM', 
    menuDescription: 'เมนูกาแฟสด', 
    additionalDetails: 'ร้านคาเฟ่ริมถนนที่มีกาแฟสดและบรรยากาศเงียบสงบ' ,
    price: '105 ',
    size: 'แก้วกลาง'
  },
  { 
    name: 'Lamoon Coffee', 
    phone: '02-345-6789', 
    address: '101 ถนนหนองแขม', 
    openingHours: '7:30 AM - 7:30 PM', 
    menuDescription: 'เมนูชานม', 
    additionalDetails: 'ร้านคาเฟ่ที่มีชานมอร่อยๆ และขนมหวานหลากหลาย' ,
    price: '110 ',
    size: 'แก้วกลาง'
  },
  { 
    name: 'Lucky  Coffee', 
    phone: '02-111-2222', 
    address: '222 ถนนโชคดี', 
    openingHours: '8:30 AM - 5:00 PM', 
    menuDescription: 'เมนูกาแฟวิเบรา', 
    additionalDetails: 'ร้านคาเฟ่ที่มีเมนูกาแฟวิเบราและขนมอร่อย' ,
    price: '90 ',
    size: 'แก้วเล็ก'
  },
  { 
    name: 'Goodmood  Coffee', 
    phone: '02-333-4444', 
    address: '333 ถนนมีความสุข', 
    openingHours: '10:00 AM - 8:00 PM', 
    menuDescription: 'เมนูคาเฟ่อบราวนี่', 
    additionalDetails: 'ร้านคาเฟ่ที่มีเมนูอบราวนี่และเครื่องดื่มอร่อยๆ' ,
    price: '130 ',
    size: 'แก้วใหญ่'
  },
];



const selectedBusiness = computed(() => {
  const businessId = route.params.id;
  return businesses.find(business => business.name === businessId);
});
</script>

<style scoped>
.business-details {
  text-align: center;
  margin: 20px;
}

.business-details img {
  max-width: 100%;
  height: auto;
}


.details {
  text-align: left;
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.details p {
  margin: 10px 0;
  font-size: 25px; /* ปรับขนาดตัวหนังสือในรายละเอียดเพิ่มเติม */
  margin-bottom: 25px;
  text-align: center;

}

</style>
