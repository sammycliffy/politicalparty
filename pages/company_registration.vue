<template>
  <div class="login-page">
    <div class="form" id="estateForm">
      <form class="login-form" method="post" @submit.prevent="addCompany">
        <h3>Company Registration</h3>
        <p style="color: red" id="error">{{ error }}</p>
        <p id="loginError" style="color: red; font-size: 13"></p>
        <input
          type="text"
          placeholder="Company Name"
          required
          v-model="companyName"
        />
        <input
          type="text"
          placeholder="Address"
          required
          v-model="companyAddress"
        />
        <select class="select" @change="subplan($event)">
          <option value="100">0 - 10 Occupants</option>
          <option value="200">11 - 50 Occupants</option>
          <option value="300">51 - 100 Occupants</option>
          <option value="100">101 - 200 Occupants</option>
          <option value="200">200 Above</option>
        </select>
        <input
          type="text"
          placeholder="Estate ID (Optional)"
          v-model="companyId"
        />
        <div v-if="loading" style="margin:auto;">
          <center>
            <Loader />
          </center>
        </div>
        <div v-else>
          <button type="submit" id="submitButton">create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: "",
      companyAddress: "",
      plan: "100",
      loading: false,
      success: false,
      error: "",
      companyId: ""
    };
  },

  methods: {
    subplan: function(event) {
      this.plan = event.target.value;
      console.log(event.target.value);
    },

    async addCompany({ $axios }) {
      this.loading = true;
      const data = {
        company_name: this.companyName,
        company_address: this.companyAddress,
        subscription_plan: this.plan,
        estate_id: this.companyId
      };

      this.$axios
        .$post("company/", data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          console.log(response);
          this.$router.push("/company_admin");
          localStorage.setItem("facility", JSON.stringify(response.data));
          let facility = localStorage.getItem("facility");
          console.log("facility", JSON.parse(facility));
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

<style scoped>
.login-page {
  width: 360px;
  padding: 3% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}

.form select {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  color: #8b8a8a;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #2a59d2;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #2a59d2;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #2a59d2;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
#main {
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
