<template>
  <div class="my-3">
    <label>Add a city in the list by INSEE code</label>
    <div class="input-group">
      <input
        v-model="insee"
        class="form-control"
        placeholder="Entrez un code INSEE"
      />
      <button class="btn btn-primary" @click="add">Add City</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { addCity } from "../services/weatherApi";

const emit = defineEmits(["added"]);
const insee = ref("");

const add = async () => {
  if (!insee.value) return;
  try {
    await addCity(insee.value);
    emit("added");
    insee.value = "";
  } catch (e) {
    console.log("Failed to add the city");
  }
};
</script>
