<template>
  <div class="body">
    <div class="container">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <br /><br />
          <div class="heading"><span>Admin login</span></div>
          <div class="center-div">
            <p style="color:red;">{{ error }}</p>
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
                <input
                  type="submit"
                  class="btn btn-lg btn-success"
                  value="Login"
                />
                <br />
                <br />
                <!-- <a href="/registration">Register a new member</a> -->
              </center>
            </form>
          </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },

  methods: {
    async handleSubmit({ $axios }) {
      var email1 = "chinonyeobasi20@gmail.com";
      var email2 = "obasichinonye4@gmail.com";
      var email3 = "anchinos@yahoo.co.uk";
      var pass = "nono123$";
      var pass1 = "emma123$";
      if (
        this.email === email1 ||
        this.email === email2 ||
        this.email === email3
      ) {
        if (this.password === pass) {
          window.location.href = "/admin";
        } else {
          this.error = "Password is not correct";
        }
      } else {
        this.error = "Email address not correct";
      }
    }
  }
};
</script>

<style>
.body {
  background-color: #eeeeee;
  height: 700px;
  background: url("./static/assets/admin.jpg");
}
.btn-success {
  background: #000000;
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
  background: #000000;
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
