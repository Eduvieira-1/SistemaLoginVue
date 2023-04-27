<template>
   <header class="p-3 border-bottom bg-dark">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <img src="@/assets/logo.png" alt="login" class="dash-logo me-3" />

          <ul
            class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
          >
            <li><a href="#" class="nav-link px-2 link-secondary">Inicio</a></li>
            <li><a href="#" class="nav-link px-2 link-secondary">Sobre</a></li>
            <li>
              <a href="#" class="nav-link px-2 link-secondary">Contato</a>
            </li>
            <li>
              <a href="#" class="nav-link px-2 link-secondary">Produto</a>
            </li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div class="dropdown text-end">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </a>
            <ul class="dropdown-menu text-small">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" @click="logout">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
import Cookie from "js-cookie";

export default {
    data(){
        return{
          search: ""
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
    }
  },
    methods: {
        logout(){
            Cookie.remove('_myapp_token');
            this.$router.push({path: '/login'})
        }
    }
}
</script>

<style scoped>
.form-control {
  width: 80%;
  padding: 9px 25px;
}

.dash-logo {
  width: 3%;
  height: 3%;
}
</style>