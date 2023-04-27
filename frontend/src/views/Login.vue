<template>
  <!-- <main class="form-signin w-100 m-auto">
    <form @submit.stop.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit" @click="inicio">
        Sign in
      </button>
    </form>
  </main> -->
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-5">
            <img
              src="@/assets/comidaTest.png"
              alt="login"
              class="login-card-img"
            />
          </div>
          <div class="col-md-7">
            <div class="card-body ">
              <h3 class="login-card-description me-3">Faça login em sua conta</h3>
              <form @submit.stop.prevent="submit" action="#!" class="form-center">
                <div class="form-group mt-5">
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="nome@exemplo.com"
                  />
                </div>
                <div class="form-group mb-4">
                  <input
                   v-model="password"
                    type="password"
                    name="password"
                    id="password"
                    class="form-control mt-3"
                    placeholder="***********"
                  />
                </div>
                <input
                  name="login"
                  id="login"
                  class="btn btn-block login-btn mb-4"
                  type="submit"
                  value="Conecte-se"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Cookie from "js-cookie";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      fetch(`http://127.0.0.1:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          Cookie.set("_myapp_token", res.access_token);
          console.log(res);
        });
    },
  },
};
</script>

<style>
  main{
    background-image: url(../assets/city.jpg);
    background-size: cover;
  }
</style>