<template>
  <div style="display: flex; margin: 10px">
    <div v-for="home in homesArray" :key="home.objectID">
      <HomeCard :home="home" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import homes from "~/data/homes";

const homesArray = ref(homes.slice(0, 3));
const title = ref("My Awesome Nuxt App");

useHead({
  title: title.value,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "My custom description",
    },
  ],
});
</script>
