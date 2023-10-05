<template>
  <v-card>
    <div v-if="todos">
      <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="todos" item-value="id"
      :search="search"
      class="elevation-1">
      <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Mock, Dynamic
        </v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="elevated"
              dark
              class="mb-3"
              v-bind="props"
            >Novi zadatak
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="Naziv"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.completed"
                      label="Učinjeno"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close"
              >
                Odustani
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save"
              >
                Sačuvaj
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       </v-toolbar>
      <v-card-title>
      <!-- Todo pretraga -->
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pretraga"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    </template>
    <template v-slot:item.actions="{item}">
      <v-icon @click="editItem(item)">mdi-pencil</v-icon>
    </template>
    </v-data-table>
    </div>
  </v-card>
</template>

<script>
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import { useToast } from "vue-toastification";
  import axios from 'axios'
  const toast = useToast();

  export default {
    components: {
    VDataTable,
    },
    data: () => ({
      dialog: false,
      search: '',
      itemsPerPage: 10,
      headers: [
        { title: 'Naziv', align: 'start', key: 'title' },
        { title: 'Učinjeno', align: 'start', key: 'completed' },
        { title: 'Uredi', key: 'actions', sortable: false },
      ],
      todos: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        completed: false,
      },
      defaultItem: {
        title: '',
        completed: null,
      },
      
    }),

    watch: {
      dialog(val) {
        val || this.close()
      }
    },

    mounted() {
       axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          this.todos = response.data
          this.initialize()
          toast.success("Javni API podaci dohvaćeni", {
            timeout: 1700
          });
          console.log(todos)
        })
        .catch((error) => {
          if (error.response) {
            console.log("Status: " + error.response.status);
            toast.error("Status: " + error.response.status, {
            timeout: 1700
          });
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Fetching done, no errors');
          }
        });
    },
    
    methods: {
      initialize () {
        this.todos
      },

      editItem (item) {
        this.dialog = true
        this.editedIndex = this.todos.indexOf(item)
        this.editedItem = Object.assign({}, item)
      },

      close() {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.todos[this.editedIndex], this.editedItem)
        } else {
          this.todos.push(this.editedItem)
          toast.success("Uspješno dodan zapis", {
            timeout: 1700
          });
        }
        this.close()
        
      },
    },
}
</script>