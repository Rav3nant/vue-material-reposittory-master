<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <edit-profile-form data-background-color="teal"> </edit-profile-form>

        <div class="md-layout-item md-size-100 text-left">
          <h4>¿No es tu cuenta?</h4>
          <router-link to="login">
            <md-button class="md-raised md-success">Login</md-button>
          </router-link>
          <br />
          <h4>¿No tienes una cuenta?</h4>
          <router-link to="signIn">
            <md-button class="md-raised md-success">Registrar</md-button>
          </router-link>
        </div>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard } from "@/pages";

export default {
  components: {
    EditProfileForm,
    UserCard,
  },
};
</script>
