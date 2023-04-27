<template>
  <div>
    <Header />
    <div class="container">
      <div class="row mt-5">
        <h1 class="mb-5">{{ this.$route.params.id }}</h1>
        <div class="col-md-3">
          <div class="card" style="width: 13rem">
            <img src="@/assets/lanche.avif" class="card-img-top" alt="..." />
            <div class="card-body-test">
              <p class="card-text">
                3 McSanduiche + 3 Mcritas
              </p>
              <p>Valor: R$55.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="width: 13rem">
            <img src="@/assets/lanche.avif" class="card-img-top" alt="..." />
            <div class="card-body-test">
              <p class="card-text">
                3 McSanduiche + 3 Mcritas
              </p>
              <p>Valor: R$55.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="width: 13rem">
            <img src="@/assets/lanche.avif" class="card-img-top" alt="..." />
            <div class="card-body-test">
              <p class="card-text">
                3 McSanduiche + 3 Mcritas
              </p>
              <p>Valor: R$55.99</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style="width: 13rem">
            <img src="@/assets/lanche.avif" class="card-img-top" alt="..." />
            <div class="card-body-test">
              <p class="card-text">
                3 McSanduiche + 3 Mcritas
              </p>
              <p>Valor: R$55.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../header/Header";

export default {
  components: { Header },
  props: {
    restauranteId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      restaurantes: [
        { id: 1, nome: "Restaurante A" },
        { id: 2, nome: "Restaurante B" },
        { id: 3, nome: "Restaurante C" },
      ],
    };
  },
  computed: {
    restaurante() {
      return this.restaurantes.find((item) => item.id === this.restauranteId);
    },
  },
  created() {
    if (!this.restaurante) {
      console.error(`Restaurante com ID ${this.restauranteId} não encontrado`);
    }
  },
};
</script>

<style>
.card-img-top {
  width: 100%;
}
</style>