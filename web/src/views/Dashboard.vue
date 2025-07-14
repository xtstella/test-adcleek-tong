<template>
  <div class="container">
    <h1 class="text-center mb-4">Weather Forecast</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="text-center mb-4">
          <h4>City List</h4>
        </div>
        <CityList :cities="cities" @select-city="handleSelectCity" />
      </div>
      <div class="col-md-4">
        <div class="text-center mb-4">
          <h4>2-Day Weather Forecast</h4>
          <WeatherDetails />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CityList from "../components/CityList.vue";
import WeatherDetails from "../components/WeatherDetails.vue";
import { getCities } from "../services/weatherApi";

// Mockup data for interface test
// const fakeCities = ref([
//   { insee: "75056", name: "Paris", zipcode: "75000", population: 2148000 },
//   { insee: "69001", name: "Lyon", zipcode: "69000", population: 515695 },
//   { insee: "13055", name: "Marseille", zipcode: "13000", population: 861635 },
// ]);

const cities = ref([]);
const selectedCity = ref(null);

const handleSelectCity= (city) => {
  selectedCity.value = city;
}

onMounted(async () => {
  cities.value = await getCities();
  if (cities.value.length) selectedCity.value = cities.value[0].name;
});
</script>