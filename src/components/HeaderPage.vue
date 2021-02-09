<template>
  <nav>


    <v-toolbar extended relative>
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer;">
        <v-toolbar-title flat>
          <v-img
              lazy-src="@/assets/img/logo/new-logo.webp"
              max-height="150"
              max-width="200"
              src="@/assets/img/logo/new-logo.webp"
          ></v-img>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app width="100%" v-scroll.self="onScroll"
                         class="overflow-y-auto" max-height="100%">

      <v-list>
        <router-link to="/" tag="span" style="cursor: pointer;">
          <v-toolbar-title flat>
            <v-img
                lazy-src="@/assets/img/logo/new-logo.webp"
                max-height="120"
                max-width="170"
                src="@/assets/img/logo/new-logo.webp"
            ></v-img>
          </v-toolbar-title>
        </router-link>
        <v-divider></v-divider>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Домофони</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="i in intercom" :key="i.title" :to="i.route">
            <v-list-item-content>
              <v-list-item-title>
                {{ i.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Відеонагляд</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="i in cctv" :key="i.title" :to="i.route">
            <v-list-item-content>
              <v-list-item-title>
                {{ i.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Контроль доступу</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="i in security" :key="i.title" :to="i.route">
            <v-list-item-content>
              <v-list-item-title>
                {{ i.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>

        <v-list-item v-for="i in service" :key="i.title" :to="i.route">
          <v-list-item-content>
            <v-list-item-title>
              {{ i.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item v-for="i in accessories" :key="i.title" :to="i.route">
          <v-list-item-content>
            <v-list-item-title>
              {{ i.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item v-for="i in portfolio" :key="i.title" :to="i.route">
          <v-list-item-content>
            <v-list-item-title>
              {{ i.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default ({
  data() {
    return {
      intercom: [
        {title: 'Відеодомофони', route: '/main/video-intercom',},
        {title: 'Визивні панелі', route: '/main/panel-intercom',},
        {title: 'Комплекти домофонів', route: '/main/kit-intercom',},
      ],
      cctv: [
        {title: 'Відеореєстратори', route: '/main/video-recorders',},
        {title: 'Камери', route: '/main/video-cameras',},
        {title: 'Жорсткі диски', route: '/main/hdd-intercom',},
      ],
      security: [
        {title: 'Електро замки', route: '/main/video-recorders',},
        {title: 'Дверні доводчики', route: '/main/video-cameras',},
        {title: 'Контролери', route: '/main/hdd-intercom',},
        {title: 'Зчитувачі', route: '/main/hdd-intercom',},
        {title: 'Кнопки входу', route: '/main/hdd-intercom',},
        {title: 'Ключі', route: '/main/hdd-intercom',},
      ],
      accessories: [
        {title: 'Аксесуари', route: '/main/accessories',},

      ],
      service: [
        {title: 'Сервіс', route: '/main/service',},
      ],
      portfolio: [
        {title: 'Портфоліо', route: '/main/portfolio',},
      ],

      scrollInvoked: 0,
      drawer: false
    }
  },
  methods: {
    onScroll() {
      this.scrollInvoked++
    },
  },
})

</script>

<style scoped>

</style>