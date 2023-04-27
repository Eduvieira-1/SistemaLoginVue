<template>
  <div>
    <router-view />
    <Header />
    <CardsRestaurante />
  </div>
</template>

<script>
import CardsRestaurante from '../components/restaurantes/CardsRestaurante.vue'
import Header from '../components/header/Header'

export default {
  components: {CardsRestaurante, Header}
};
</script>

<style scoped>

</style>
