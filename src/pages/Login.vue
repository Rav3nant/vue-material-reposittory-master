<template>
  <form>
    <div class="tech-girls-logo">
      <img :src="logo" />
    </div>
    <md-card class="md-card-plain">
      <md-card-header data-background-color="teal">
        <h4 class="title">Introduce los Datos de tu Cuenta</h4>
        <p class="category"></p>
      </md-card-header>
    </md-card>
    <div class="md-layout-item md-small-size-100 md-size-33">
      <md-field>
        <label>Nombre de Usuario</label>
        <md-input type="text" required></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field>
        <label>Contraseña</label>
        <md-input type="password" required></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-100 text-left">
      <router-link to="dashboard">
        <md-button class="md-raised md-success">Login</md-button>
      </router-link>
      <router-link to="forgotPassword">
        <md-button class="md-raised md-warning">Olvidé mi contraseña</md-button>
      </router-link>
    </div>
    <br />
    <div class="md-layout-item md-small-size-100 md-size-50">
      <h4>¿No tienes una cuenta?</h4>
      <router-link to="signIn">
        <md-button class="md-raised md-success">Registrar</md-button>
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
