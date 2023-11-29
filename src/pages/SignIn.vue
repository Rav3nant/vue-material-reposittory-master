<template>
  <form>
    <div class="tech-girls-logo">
      <img :src="logo" />
    </div>
    <md-card class="md-card-plain">
      <md-card-header data-background-color="teal">
        <h4 class="title">Introduce los Datos de tu Cuenta Nueva</h4>
        <p class="category"></p>
      </md-card-header>
    </md-card>

    <div class="md-layout-item md-small-size-100 md-size-33">
      <md-field>
        <label>Nombre de Usuario</label>
        <md-input type="text"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-33">
      <md-field>
        <label>E-Mail</label>
        <md-input type="email"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field>
        <label>Contraseña</label>
        <md-input type="password"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field>
        <label>Confirmar Contraseña</label>
        <md-input type="password"></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-100 text-left">
      <router-link to="user">
        <md-button class="md-raised md-success">Registrarse</md-button>
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/img/tech-girls.jpg"),
    };
  },
};
</script>

<style>
.tech-girls-logo {
  display: flex;
  justify-content: center;
  background-color: #55bdc9;
}

.tech-girls-logo img {
  max-width: 420px;
}
</style>
