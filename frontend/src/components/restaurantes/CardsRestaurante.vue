<template>
  <div id="#restaurantes" class="mt-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row d-flex justify-content-around">
            <div
              class="col-md-3 card-res"
              v-for="item in empresas"
              :key="item.id"
            >
              <router-link :to="{path: `/cardapio/${item.id, item.nome}`}" class="rotas">
                <div class="row">
                  <div class="col-md-4">
                    <img :src="item.nome"  alt="" class="img-card">
                  </div>
                  <div class="col-md-6">
                    <p class="nomeRes">
                      <b>{{ item.nome }}</b>
                    </p>
                    <div class="info">
                      <span>{{ item.avaliacao }}</span>
                      <span> • </span>
                      Lanches
                      <span> • </span>
                      4.3km
                    </div>
                    <div class="info-min">
                      36-46 min
                      <span> • </span>
                      <span>R$ 10,00</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      empresas: [
        {
          id: 1,
          nome: "Barão Hamburgueria",
          url: '../../assets/lanche.avif',
          titulo: 'testeeee',
          avaliacao: '4.0'
        },
        {
          id: 2,
          nome: "Fritis",
          url: '../../assets/lanche.avif',
          titulo: 'testeeee',
        },
        {
          id: 3,
          nome: "Santo grego",
          url: '../../assets/lanche.avif'
        },
        {
          id: 4,
          nome: "Macarrão e cia",
          url: '../../assets/lanche.avif'
        },
        {
          id: 5,
          nome: "Domino",
          url: '../../assets/lanche.avif',
        },
        {
          id: 6,
          nome: "Perfeito Smash Burguer",
          url: '../../assets/lanche.avif',
        },
        {
          id: 7,
          nome: "Burguer King",
          url: '../../assets/lanche.avif',
        },
        {
          id: 8,
          nome: "Pizzaria do Padrinho",
          url: '../../assets/lanche.avif',
        },
        {
          id: 8,
          nome: "Trem Bão",
          url: '../../assets/lanche.avif',
        },
        {
          id: 8,
          nome: "Alimente-se",
          url: '../../assets/lanche.avif',
        },
        {
          id: 8,
          nome: "Happy Pizza",
          url: '../../assets/lanche.avif',
        },
        {
          id: 8,
          nome: "Churrascaria Zebu",
          url: '../../assets/lanche.avif',
        },
      ],
     }
    },
    computed: {
    itemsFiltered(){
      let valores = [];

      valores = this.empresas.filter((item) =>{
        return (
          item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      })

      return valores
      // return this.empresas;
    }
    }
  }
</script>

<style>
.card-res {
  /* border: 1px solid grey; */
  border-radius: 10px;
  padding: 19px 12px;
}

.card-res:hover {
  cursor: pointer;
  transition: 0.5s;
  box-shadow: -5px 0px 31px 0px rgba(112, 112, 112, 1);
}

.img-card {
  width: 100%;
  background-size: 100%;
  border-radius: 10px;
}

.nomeRes {
  font-size: 14px;
}

.info,
.info-min {
  font-size: 12px;
  color: #717171;
}

.rotas:link{
  text-decoration: none;
  color: #717171;
}

</style>