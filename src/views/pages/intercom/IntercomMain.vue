<template>
  <div>

     <v-container  grid-list-md>

      <v-layout row wrap>

        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/video-intercom">

              <v-card-title class="font-weight-medium  headline">Відеодомофони</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/intercom.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>


          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/panel-intercom">

              <v-card-title class="font-weight-medium  headline">Визивні панелі</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/intercom.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>


          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/kit-intercom">

              <v-card-title class="font-weight-medium  headline">Комплекти домофонів</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/intercom.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>


          </v-card>
        </v-flex>

      </v-layout>

    </v-container>


  </div>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>

<style scoped>

</style>