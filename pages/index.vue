<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="heading"><span>Member Registration</span></div>
        <div class="center-div">
          <form method="post" @submit.prevent="handleSubmit">
            <label for="email">Email</label><br />
            <input
              type="email"
              class="form-control"
              v-model="email"
              required
            /><br />
            <label for="password">Password</label><br />
            <input
              type="password"
              v-model="password"
              required
              class="form-control"
            />
            <br />
            <center>
              <input type="submit" class="btn btn-primary" value="Login" />
              <br />
              <br />
              <a href="/registration">Register a new member</a>
            </center>
          </form>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    async handleSubmit({ $axios }) {
      this.loading = true;
      const datas = {
        email: this.email,
        password: this.password
      };
      this.$axios
        .post("/api/v1/login/", datas)
        .then(response => {
          console.log(response.data);
          if (response.status === 201) {
            localStorage.setItem("token", response.data.token);
            console.log(response.data);
            this.loading = false;
            window.location.href = "/admin";
          }
        })
        .catch(error => {
          this.loading = false;
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.error = str.substring(str.indexOf(":") + 1);
          }
        });
    }
  }
};
</script>

<style>
.btn-success {
  background: #014379;
}

label {
  color: rgb(41, 4, 65);
}
h4 {
  text-align: center;
  line-height: 30px;
}
#logo a > h3 {
  font-size: 15px;
  padding-top: 0px;
}
.center-div {
  width: 100%;
  background-color: white;
  padding: 20px 40px 40px 40px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.heading {
  background: #014379;
  color: white;
  width: 100%;
  font-size: 25px;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.errorlist {
  color: red;
}
.my_div {
  height: 100%;
  width: 100%;
  padding-left: 10px;
  padding-top: 20px;
  background-color: white;
  border: 2px solid #eeeeee;
  box-shadow: inset;

  border-radius: 5px;
  color: dimgrey;
}
</style>
