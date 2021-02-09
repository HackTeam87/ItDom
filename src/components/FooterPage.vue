<template>
  <v-footer

      color="grey darken-4" padless>
    <v-container>
       <v-bottom-navigation
    :value="value"
    color="primary"
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </v-container>
<!--    <v-container>-->
<!--      <v-btn block color="deep-orange" class="py-sm-5 title rounded-xl  white&#45;&#45;text" @click="dialog = true">-->
<!--      Написати нам-->
<!--    </v-btn>-->

<!--    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">-->
<!--      <v-card>-->
<!--        <v-toolbar dark >-->
<!--          <v-btn icon dark @click="dialog = false">-->
<!--            <v-icon>mdi-close</v-icon>-->
<!--          </v-btn>-->
<!--          <v-spacer></v-spacer>-->
<!--          <v-toolbar-items>-->

<!--          </v-toolbar-items>-->
<!--        </v-toolbar>-->

<!--        <v-container>-->
<!--          <v-subheader class="headline">Відправити</v-subheader>-->
<!--          <v-form ref="form" lazy-validation>-->
<!--            <v-text-field :counter="20" label="Ім'я" required></v-text-field>-->
<!--            <v-text-field :counter="20" label="Телефон" required></v-text-field>-->
<!--             <v-text-field :counter="20" label="Коментар"></v-text-field>-->


<!--            <v-btn block color="yellow darken-1" class="py-sm-5 title rounded-xl">-->
<!--              Надіслати-->
<!--            </v-btn>-->

<!--          </v-form>-->
<!--        </v-container>-->
<!--      </v-card>-->


<!--    </v-dialog>-->
<!--   </v-container>-->
<!--    <v-row justify="center" no-gutters>-->
<!--      <v-btn v-for="(link, index) in links" :key="index" :to="link.route" color="white" text rounded class="my-2">-->
<!--        {{ link.name }}-->
<!--      </v-btn>-->
<!--    </v-row>-->
<!--      <v-btn-->
<!--          v-for="(icon, index) in icons" :key="index"-->
<!--          class="mx-4"-->
<!--          dark-->
<!--          icon-->
<!--      >-->
<!--        <v-icon size="24px">-->
<!--          {{ icon }}-->
<!--        </v-icon>-->
<!--      </v-btn>-->
  </v-footer>

</template>
<script>
export default {
  data: () => ({
    dialog: false,
    links: [
      {name: 'Домофони', route: '/main/intercom'},
      {name: 'Відеонагляд', route: '/main/cctv'},
      {name: 'Сервіс', route: '/main/service'},
    ],
    icons: [
      'mdi-facebook',
      'mdi-instagram',
    ],
  }),
}
</script>