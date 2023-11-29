<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="pink">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Problemas resueltos</p>
            <h3 class="title">12</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offers</md-icon>
              Sacadas de Facebook
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Seguidores</p>
            <h3 class="title">+5</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Actualizado justo ahora
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Publicaciones recientes</h4>
            <p class="category">Mira lo que la gente está diciendo</p>
          </md-card-header>
          <md-card-content>
            <div
              v-for="index in 3"
              :key="index"
              class="md-layout-item md-small-size-100"
            >
              <h5>{{ nombreRandom() }} publicó:</h5>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100 md-size-30">
                  <img
                    :src="'https://picsum.photos/300/200?random=' + index"
                    alt=""
                    class="img-rounded img-responsive"
                  />
                </div>
                <div class="md-layout-item md-small-size-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                    augue semper porta. Mauris massa.
                  </p>
                  <div class="md-small-size-100">
                    <md-button
                      class="md-button md-primary md-theme-default-button"
                    >
                      <md-icon>comment</md-icon>
                      Comentarios (3)
                    </md-button>
                    <md-button
                      class="md-button md-success md-theme-default-button"
                    >
                      <md-icon>share</md-icon>
                      Compartir
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="teal">
            <h4 class="title">Artículos de Tecnología Recomendados</h4>
            <p class="category">Explora los últimos avances en tecnología</p>
          </md-card-header>
          <md-card-content>
            <div class="news-grid">
              <div v-for="index in 6" :key="index" class="news-grid-item">
                <div class="news-grid-tile">
                  <img
                    :src="'https://picsum.photos/300/200?random=' + index"
                    alt=""
                    class="img-rounded img-responsive"
                  />
                  <div class="news-grid-tile-footer">
                    <h5>{{ getRandomTechArticle() }}</h5>
                    <md-button
                      class="btn-abs md-button md-primary md-theme-default-button"
                    >
                      <md-icon>visibility</md-icon>
                      Leer Más
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Noticias</h4>
            <p class="category">Noticias locales del gobierno del Estado</p>
          </md-card-header>
          <md-card-content>
            <div class="news-grid">
              <div v-for="index in 6" :key="index" class="news-grid-item">
                <div class="news-grid-tile">
                  <img
                    :src="'https://picsum.photos/300/200?random=' + index"
                    alt=""
                    class="img-rounded img-responsive"
                  />
                  <div class="news-grid-tile-footer">
                    <h5>{{ getRandomNewsArticle() }}</h5>
                    <md-button
                      class="btn-abs md-button md-primary md-theme-default-button"
                    >
                      <md-icon>visibility</md-icon>
                      Leer Más
                    </md-button>
                  </div>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Listado Amigos</h4>
            <p class="category">Amigos que tienes hasta el momento</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="teal">
            <h4 class="title">Tareas</h4>
          </md-card-header>
          <md-card-content>
            <md-tab id="tab-home" md-label="1">
              <nav-tabs-table></nav-tabs-table>
            </md-tab>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard, NavTabsTable, OrderedTable } from "@/components";

export default {
  components: {
    StatsCard,
    NavTabsTable,
    OrderedTable,
  },
  methods: {
    nombreRandom() {
      const nombresMujer = [
        "Isabela Lopez",
        "Sofía Reyes",
        "Olivia García",
        "Emma Martínez",
        "Ava Rodríguez",
        "Mia Urquijo",
        "Amelia Sánchez",
        "Harper Smith",
        "Evelyn Schmidt",
        "Abigail Pérez",
      ];
      return nombresMujer[Math.floor(Math.random() * nombresMujer.length)];
    },
    getRandomTechArticle() {
      const techArticles = [
        "10 Tendencias Tecnológicas para el Futuro",
        "Cómo la Inteligencia Artificial Está Cambiando la Industria",
        "Los Últimos Avances en Computación Cuántica",
        "Desarrollo de Aplicaciones Móviles: Consejos y Trucos",
        "Blockchain: Más Allá de las Criptomonedas",
        "Realidad Aumentada en la Educación: Nuevos Horizontes",
        "El Impacto de 5G en la Conectividad Global",
        "Seguridad Cibernética: Retos y Soluciones",
        "Automatización Robótica de Procesos (RPA) en el Mundo Empresarial",
        "IoT: Conectando el Mundo de Forma Inteligente",
      ];
      return techArticles[Math.floor(Math.random() * techArticles.length)];
    },
    getRandomNewsArticle() {
      const newsArticles = [
        "Casa Sonora llega al Complejo Cultural Los Pinos",
        "Programa Social de Generación Social Distribuida",
        "Te invitamos al Bazar Navideño 2023",
        "Entrega de útiles escolares en la Escuela Primaria Benito Juárez",
        "Convocatoria Becas a Estudiantes de la Universidad de Sonora",
        "Incentivos para Madres Solteras",
        "Felicitamos a todas las mujeres este Dia de la Mujer",
        "Pacto Social para la Paz",
        "En Sonora el bienestar y la seguridad de todas las mujeres es nuestra prioridad",
        "Inauguración de la Feria del Libro Hermosillo 2023",
      ];
      return newsArticles[Math.floor(Math.random() * newsArticles.length)];
    },
  },
};
</script>

<style>
#tab-home > div > div > div > table > thead {
  display: none;
}

.news-grid {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
}

.news-grid-item {
  flex: 0 0 33.33%;
  box-sizing: border-box;
  padding: 10px;
}

.news-grid-tile {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.news-grid-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-grid-tile-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.btn-abs {
  position: absolute !important;
  bottom: 10px !important;
  right: 10px !important;
  top: unset !important;
  left: unset !important;
}
</style>
