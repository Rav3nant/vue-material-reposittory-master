<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>Buscar</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">dashboard</i>
        <p>Tablero Principal</p></a
      >
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">notifications</i>
          <span class="notification">5</span>
          <p>Notificaciones</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li><a href="#">Jacinta respondio a tu correo</a></li>
          <li><a href="#">Tienes 5 tareas nuevas</a></li>
          <li><a href="#">Andrea y tu ahora son amigas</a></li>
          <li><a href="#">Otra notificacion</a></li>
          <li><a href="#">Otra pa que amarre</a></li>
        </ul>
      </drop-down>
    </li>
    <li>
      <a href="#" data-toggle="dropdown" class="dropdown-toggle"
        ><i class="material-icons">person</i>
        <p>Perfil</p></a
      >
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: ["Pam Beesly", "Angela Martin", "Kelly Kapoor"],
    };
  },
};
</script>
