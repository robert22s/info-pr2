<template>
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="plain"
            size="medium"
        ></v-btn>
        <v-col class="text-center mt-2" cols="12">
          {{ new Date().getFullYear() }} — <strong>FPMOZ Informatika</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>
<script>
export default {
  data: () => ({
    icons: [
        'mdi-github',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
}
</script>