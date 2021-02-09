<template>
  <div>

     <v-container  grid-list-md>

      <v-layout row wrap>

        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/intercom">

              <v-card-title class="font-weight-medium  headline">Домофони</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/intercom.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>


          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/cctv">

              <v-card-title class="font-weight-medium headline">Відеонагляд</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/cctv.webp">
              </v-img>

              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>

          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/security">

              <v-card-title class="font-weight-medium headline">Контроль Доступу</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/security.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>

          </v-card>
        </v-flex>

        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/accessories">

              <v-card-title class="font-weight-medium headline">Аксесуари</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/accessories.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>

          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/service">

              <v-card-title class="font-weight-medium headline">Сервіс</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/service.webp">
              </v-img>
              <v-card-text>
                <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
              </v-card-text>

          </v-card>
        </v-flex>
        <v-flex d-flex sm4>
          <v-card  hover data-aos="zoom-in" data-aos-easing="ease" href="/main/portfolio">

              <v-card-title class="font-weight-medium headline">Портфоліо</v-card-title>
              <v-img class="white--text align-end" height="150px"
                     src="@/assets/img/main_page/portfolio.webp">
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