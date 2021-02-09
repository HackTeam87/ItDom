<template>
  <v-app>
    <header-page></header-page>
     <v-main>
       <pre-loader></pre-loader>
       <contact-button></contact-button>
       <router-view></router-view>
     </v-main>
    <footer-page></footer-page>
  </v-app>



</template>

<script>
import ContactButton from '@/components/ContactButton.vue'
import HeaderPage from '@/components/HeaderPage.vue'
import PreLoader from '@/components/PreLoader.vue'
import FooterPage from '@/components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    PreLoader,
    ContactButton,
    HeaderPage,
    FooterPage
  }
}
</script>


