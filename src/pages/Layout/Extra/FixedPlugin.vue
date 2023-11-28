<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i class="fa fa-comments fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <div class="text-left text-lg">
          <h3>Chat</h3>
        </div>
        <li class="button-container">
          <span>Jacinta Perez</span>
          <div class="alert alert-info text-left">
            <span>Hiciste la tarea?</span>
          </div>
        </li>

        <li class="button-container">
          <div class="alert alert-primary text-right">
            <span>Habia tarea?!</span>
          </div>
        </li>
        <li class="button-container bottom">
          <div class="alert text-left">
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
  components: {},
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
      sidebarImages: [],
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
.fixed-plugin {
  padding: 5px 10px;
  top: unset !important;
  bottom: 50px;
}

div.main-panel > div.fixed-plugin > div > ul {
  top: unset !important;
  bottom: 20px;
}

div.main-panel > div.fixed-plugin > div > ul::before {
  top: unset !important;
  bottom: -11px;
}

div.main-panel > div.fixed-plugin > div > ul::after {
  top: unset !important;
  bottom: -10px;
}

.button-container .btn {
  margin-right: 10px;
}

.centered-buttons {
  display: flex;
  justify-content: center;
}

.bottom {
  position: absolute !important;
  bottom: 0 !important;
  width: calc(100% - 20px) !important;
}
</style>
