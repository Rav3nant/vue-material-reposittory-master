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
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field>
        <label>Correo registrado</label>
        <md-input type="text" required></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-small-size-100 md-size-50">
      <md-field>
        <label>Confirmar correo</label>
        <md-input type="text" required></md-input>
      </md-field>
    </div>
    <div class="md-layout-item md-size-100 text-left">
      <md-button class="md-primary" @click="notifyVue('bottom', 'left')">Enviar</md-button>
      <router-link to="login">
        <md-button class="md-raised">Regresar a Login</md-button>
      </router-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      logo: require("@/assets/img/tech-girls.jpg"),
      type: ["", "info", "success", "warning", "danger"],
      notifications: {
        topCenter: false,
      },
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      var color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          "Se ha enviado una liga para resetear tu contraseña al correo registrado.",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
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