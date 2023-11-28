<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="teal">
            <h4 class="title">Lista de Amigos</h4>
            <p class="category">
              Aquí está una lista de tus amigos y datos basicos sobre ellos
            </p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="teal"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="teal">
            <h4 class="title">Lista de Seguidores</h4>
            <p class="category">
              Aquí hay una lissta de tus seguidores y datos basicos sobre ellos
            </p>
          </md-card-header>
          <md-card-content>
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable,
  },
};
</script>
