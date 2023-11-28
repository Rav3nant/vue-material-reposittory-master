<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="teal">
            <h4 class="title">Crear Post</h4>
            <p class="category">Hablale al mundo sobre lo que piensas</p>
          </md-card-header>

          <md-card-content>
            <quill-editor />
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
import { quillEditor } from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    quillEditor
  }
};
</script>
