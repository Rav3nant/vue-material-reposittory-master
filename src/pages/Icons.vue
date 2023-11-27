<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="teal">
            <h4 class="title">Crear Post</h4>
            <p class="category">
              Hablale al mundo sobre lo que piensas
            </p>
          </md-card-header>

          <md-card-content>
            <img src='@/assets/img/editor.png'>
          </md-card-content>
          <router-link to="user">
          <md-button class="md-raised md-success">Crear Post</md-button>
        </router-link> 
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
