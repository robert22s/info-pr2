<template>
  <v-app style="background-image: url('https://fastly.picsum.photos/id/158/1920/1080.jpg?hmac=PEMS7g1Gh4pw9leYZA5hQ-R9C1tg3weFhRW5T-RCkfM');">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              Tema projekta: TODO (Zadatci)
            </v-card-title> 
            <v-card-text>
              <p>
                Tema ovog projekta je lista zadataka tzv "TODO"<br>
                Projekt je rađen uz pomoć preporučenih tehnologija (Vue, Vuetify..)<br>
                Stvari (Dinamički) podaci su dohvaćeni s javnog API-a ('https://jsonplaceholder.typicode.com/todos')<br>
                CRUD operacije su obavljene kao "MOCK", a zatim određene radnje su popraćene notifikacijama koristeći vanjske biblioteke<br><br>
              </p>
            </v-card-text>
          </v-card>
          <br>
          <v-card>
            <v-card-title>
              Lista zahtjeva
            </v-card-title> 
            <v-card-text>
              <ul>
                <li>Responzivna stranica (Vuetify) <v-icon>mdi-check</v-icon></li>
                <li>Korišten "Baselane" Vuetify <v-icon>mdi-check</v-icon></li>
                <li>Landing page s osnovim informacijama <v-icon>mdi-check</v-icon></li>
                <li>Dinamički page povezan na API (CRUD page, "CrudView.vue") <v-icon>mdi-check</v-icon></li>
                <li>Axios library za pozive na API (CRUD page, "CrudView.vue") <v-icon>mdi-check</v-icon></li>
                <li>Paginacija (CRUD page, "CrudView.vue") <v-icon>mdi-check</v-icon></li>
                <li>Pretraga (CRUD page, "CrudView.vue") <v-icon>mdi-check</v-icon></li>
                <li>Filtriranje po određenom parametru (CRUD page, "CrudView.vue") <v-icon>mdi-check</v-icon></li>
                <li>Korištena custom komponenta (Footer, "MyComp.vue") <v-icon>mdi-check</v-icon></li>
                <li>Modal Mock forma (CRUD page, "CrudView.vue") <v-icon>mdi-check</v-icon></li>
                <li>Alert poruka (CRUD page, nakon dohvaćanja podataka s API i dodavanja novog "mock" zadatka) <v-icon>mdi-check</v-icon></li>
                <li>3rd party biblioteka (axios, vue-toastification i sl...) <v-icon>mdi-check</v-icon></li>
                <li>Kod javno dostupan na Githubu <v-icon>mdi-check</v-icon></li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
export default {
 
};
</script>
