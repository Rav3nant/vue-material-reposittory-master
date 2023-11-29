<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Editar Perfil</h4>
        <p class="category">Completa tu perfil</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Nombre de Usuario</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>E-Mail</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Nombre</label>
              <md-input v-model="firstname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Apellidos</label>
              <md-input v-model="lastname" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Direccion</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Ciudad</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Pais</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Codigo Postal</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Sobre Mi</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <h5>Privacidad</h5>
          </div>
          <div class="md-layout-item md-size-100">
            <label>¿Quien Puede ver tu Perfil?</label>
          </div>
          <div>
            <input
              type="radio"
              id="todo mundo"
              name="visitante"
              value="todo mundo"
            />
              <label for="todo mundo">Todo Mundo</label><br />
             
            <input
              type="radio"
              id="amigos de amigos"
              name="visitante"
              value="amigos de amigos"
            />
              <label for="amigos de amigos">Amigos de Amigos</label><br />
              <input type="radio" id="nadie" name="visitante" value="nadie" />  
            <label for="nadie">Nadie</label><br /><br />
          </div>

          <div class="md-layout-item md-size-100">
            <label>¿Quien puede mandarte solicitud de amistad?</label>
          </div>
          <div>
            <input
              type="radio"
              id="todo mundo"
              name="amigo"
              value="todo mundo"
            />
              <label for="todo mundo">Todo Mundo</label><br />
             
            <input
              type="radio"
              id="amigos de amigos"
              name="amigo"
              value="amigos de amigos"
            />
              <label for="amigos de amigos">Amigos de Amigos</label><br />
              <input type="radio" id="nadie" name="amigo" value="nadie" />  
            <label for="nadie">Nadie</label><br /><br />
          </div>

          <div class="md-layout-item md-size-100">
            <label>¿Quien puede seguirte?</label>
          </div>
          <div>
            <input
              type="radio"
              id="todo mundo"
              name="seguidor"
              value="todo mundo"
            />
              <label for="todo mundo">Todo Mundo</label><br />
             
            <input
              type="radio"
              id="amigos de amigos"
              name="seguidor"
              value="amigos de amigos"
            />
              <label for="amigos de amigos">Amigos de Amigos</label><br />
              <input type="radio" id="nadie" name="seguidor" value="nadie" />  
            <label for="nadie">Nadie</label>
          </div>

          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-primary" @click="notifyVue('bottom', 'center')"
              >Actualizar Perfil</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      username: "kirbo",
      disabled: null,
      emailadress: "kirbo64@unison.mx",
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme: "Quiero acostarme a dormir",
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
        message: "Perfil actualizado con éxito.",
        icon: "add_alert",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color],
      });
    },
  },
};
</script>
<style></style>
