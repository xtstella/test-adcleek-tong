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
          <h4> Weather Forecast </h4>
          <WeatherDetails
            v-if="selectedForecast"
            :forecast="selectedForecast"
          />
          <div v-else class="text-center mt-5">
            Please select a city from the table on the left to see the forecast.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CityList from "../components/CityList.vue";
import WeatherDetails from "../components/WeatherDetails.vue";
import { getCities, getForecast } from "../services/weatherApi";

const cities = ref([]);
const selectedCity = ref(null);
const selectedForecast = ref(null);

const fetchForecast = async () => {
  if (!selectedCity.value) return;
  try {
    selectedForecast.value = await getForecast(selectedCity.value.insee);
  } catch (error) {
    console.error("Error fetching forecast:", error);
    selectedForecast.value = null;
  }
};

const handleSelectCity = async (city) => {
  selectedCity.value = city;
  try {
    await fetchForecast();
  } catch (error) {
    console.error("Error fetching forecast:", error);
    selectedForecast.value = null;
  }
};

onMounted(async () => {
  cities.value = await getCities();
  if (cities.value.length) selectedCity.value = cities.value[0].name;
});
</script>
