<template>
  <div>
    <div style="display: flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        :alt="`image from ${home.title}}`"
        width="200"
        height="150"
      />
    </div>
    <h1>{{ home.title }}</h1>
    <br />
    ${{ home.pricePerNight }} / night<br />
    <img src="/images/marker.svg" width="20" height="20" />
    {{ home.location.address }} {{ home.location.city }}
    {{ home.location.state }} {{ home.location.country }} <br />
    <img src="/images/star.svg" width="20" height="20" />
    {{ home.reviewValue }} <br />
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
    {{ home.baths }} baths <br />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import homes from "~/data/homes";

const route = useRoute();
const home = homes.find((home) => home.objectID === route.params.id);

useHead({
  title: home.title,
});

onMounted(() => {
  home.value = home;

  console.log(route.params);
  console.log(home.value);
});
</script>

<style lang="scss" scoped></style>
