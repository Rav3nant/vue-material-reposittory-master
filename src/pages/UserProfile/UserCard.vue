<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Tu Perfil</h6>
      <h4 class="card-title">Kirbo</h4>
      <p class="card-description">
        "Poyo!"
      </p>
      <md-button class="md-round md-success">Poyo</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/kirbo.png"),
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
