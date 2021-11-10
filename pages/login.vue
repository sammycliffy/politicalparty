<template>
  <div class="login-page">
    <div class="form" id="signup">
      <form
        class="register-form"
        method="post"
        @submit.prevent="registrationSubmit"
      >
        <h3>Registration</h3>
        <span style="color:red"> {{ signupError }}</span>
        <input
          type="text"
          placeholder="Full Name"
          v-model="fullname"
          required
        />
        <input type="email" placeholder="Email" v-model="signupmail" required />
        <input type="text" placeholder="Address" v-model="address" required />
        <select @change="onRole($event)">
          <option value="Estate Admin">Estate Admin</option>
          <option value="Company Admin">Company Admin</option>
        </select>
        <input
          type="phone"
          placeholder="Phone"
          v-model="phonenumber"
          required
        />
        <input
          type="password"
          placeholder="password"
          v-model="signuppassword"
          required
        />
        <select @change="onGender($event)">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div v-if="sloading" style="margin:auto;">
          <center>
            <Loader />
          </center>
        </div>
        <div v-else>
          <button type="submit" id="submitButton">create</button>
        </div>

        <p class="message">Already registered? <a href="#">Sign In</a></p>
      </form>
      <form class="login-form" @submit.prevent="login">
        <h3>Signin</h3>
        <p style="color: red; font-size: 13">
          {{ loginError }}
        </p>
        <input type="email" placeholder="email Address" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <div v-if="loading" style="margin:auto;">
          <center>
            <Loader />
          </center>
        </div>
        <div v-else>
          <button id="loginButton" type="submit">login</button>
        </div>

        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      signupmail: "",
      role: "Estate Admin",
      signuppassword: "",
      email: "",
      loginError: "",
      signupError: "",
      phonenumber: "",
      gender: "Male",
      address: "",
      password: "",
      loading: false,
      sloading: false,
      success: false
    };
  },

  mounted: function() {
    this.toggle();
  },
  methods: {
    toggle() {
      $(".message a").click(function() {
        $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
      });
    },
    onGender: function(event) {
      this.gender = event.target.value;
      console.log(event.target.value);
    },
    onRole: function(event) {
      this.role = event.target.value;
      console.log(event.target.value);
    },

    async login({ $axios }) {
      this.loading = true;
      const data = {
        email: this.email,
        password: this.password
      };

      this.$axios
        .$post("auth/login-new/", data)
        .then(response => {
          console.log(response);
          if (response.status === "success") {
            console.log("success login");
            this.loading = false;
            localStorage.setItem("user-token", response.key);
            localStorage.setItem("user", JSON.stringify(response));
            if (response.role === "Estate Admin") {
              if (response.created_facility === true) {
                this.$router.push("/admin");
              } else {
                this.$router.push("/estate_registration");
              }
            } else if (response.role === "Company Admin") {
              if (response.created_company === true) {
                this.$router.push("/admin");
              } else {
                this.$router.push("/company_registration");
              }
            } else {
              this.error = "You are not an Admin yet";
            }
          }
        })
        .catch(error => {
          this.loading = false;
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.loginError = str.substring(str.indexOf(":") + 1);
          }
        });
    },
    registrationSubmit({ $axios }) {
      this.sloading = true;
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      const datas = {
        email: this.signupmail,
        full_name: this.fullname,
        phone_number: this.phonenumber,
        address: this.address,
        gender: this.gender,
        password1: this.signuppassword,
        password2: this.signuppassword,
        role: this.role,
        is_estateuser: false,
        is_guard: false
      };

      this.$axios
        .$post("auth/register-new/", datas)
        .then(response => {
          console.log(response.data);
          if (response.status === 201) {
            modal.style.display = "block";
            console.log(response.data);
            this.$store.dispatch("user", response);

            this.sLoading = false;
            if (response.data.role === "Estate Admin") {
              this.$router.push("/estate-registration");
            } else if (response.data.role === "Company Admin") {
              this.$router.push("/company-registration");
            } else {
              this.signupError = "You are doing something wrong";
            }
          }
        })
        .catch(error => {
          this.sloading = false;
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.signupError = str.substring(str.indexOf(":") + 1);
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
