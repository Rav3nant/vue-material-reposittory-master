<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        
        <li class="centered-row">
          
          <div class="text-left text-lg">
            <h3>
            <span>Chat Placeholder</span>
            </h3>
          </div>
          
  </li>
        <li class="button-container">
          
                <div class="alert alert-info text-left">
                  <span>Hiciste la tarea?</span>
                </div>
                
        </li>
        
        <li class="button-container">
          <div class="alert alert-primary text-right">
                  <span>Habia tarea?!</span>
                </div>
        </li>
        <li class="button-container">
          <div class="alert text-right">
                  <span>Escribe Aqui</span>
                </div>
        </li>

        
      </ul>
      </div>
    </div>
  
</template>
<script>
import Vue from "vue";
import SocialSharing from "vue-social-sharing";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";

Vue.use(SocialSharing);
Vue.use(VueGitHubButtons, { useCache: true });
export default {
  components: {  },
  data() {
    return {
      documentationLink:
        "https://creativetimofficial.github.io/vue-material-dashboard/documentation",
      shareUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      buyUrl: "",
      freeUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      isOpen: false,
      sidebarColors: [
        { color: "purple", active: false },
        { color: "blue", active: false },
        { color: "teal", active: true },
        { color: "orange", active: false },
        { color: "pink", active: false },
      ],
      sidebarImages: [
        { image: require("@/assets/img/sidebar-1.jpg"), active: false },
        { image: require("@/assets/img/sidebar-2.jpg"), active: true },
        { image: require("@/assets/img/sidebar-3.jpg"), active: false },
        { image: require("@/assets/img/sidebar-4.jpg"), active: false },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    },
    toggleList(list, itemToActivate) {
      list.forEach((listItem) => {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    updateValue(name, val) {
      this.$emit(`update:${name}`, val);
    },
    changeSidebarBackground(item) {
      this.$emit("update:color", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarImage(item) {
      this.$emit("update:image", item.image);
      this.toggleList(this.sidebarImages, item);
    },
  },
};
</script>
<style>
.centered-row {
  height: 250px;
}

.button-container .btn {
  margin-right: 10px;
}

.centered-buttons {
  display: flex;
  justify-content: center;
}
</style>
