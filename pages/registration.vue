<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="heading"><span>Member Registration</span></div>
        <div class="center-div">
          <form method="post" @submit.prevent="handleSubmit">
            <span class="error">{{ error }}</span>
            <label for="date">Fullname</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="fullname"
              required
            /><br />
            <label for="date">email</label>
            <input
              type="email"
              class="form-control"
              name=""
              v-model="email"
              required
            /><br />
            <label for="phone">Phone number</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="phonenumber"
              required
            /><br />
            <label for="phone">Password</label>
            <input
              type="password"
              class="form-control"
              name=""
              v-model="password"
              required
            /><br />
            <label for="phone">Qualification</label>
            <select
              name="qualification"
              id="cars"
              class="form-control"
              @change="onQualification($event)"
              ><option value="PHD">PHD</option>
              <option value="MASTERS">Masters</option>
              <option value="BSC">Bsc</option>
              <option value="HND">HND</option> </select
            ><br />

            <center>
              <br /><br />
              <div v-if="loading == true">
                <Loader />
              </div>
              <div v-else>
                <button class="btn btn-primary">Continue</button>
              </div>
              <br />
              <p>
                <br />
                <a href="/index" class="btn btn-link">
                  Ward member Login
                </a>
              </p>
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
      fullname: "",
      phonenumber: "",
      password: "",
      date: "",
      loading: false,
      success: false,
      error: ""
    };
  },
  methods: {
    onQualification: function(event) {
      this.qualification = event.target.value;
      console.log(event.target.value);
    },

    async handleSubmit({ $axios }) {
      this.loading = true;
      const datas = {
        full_name: this.fullname,
        email: this.email,
        phone_number: this.phonenumber,
        qualification: "PHD",
        password: this.password,
        dateOfBirth: this.date
      };

      this.$axios
        .post("/api/v1/register/", datas)
        .then(response => {
          console.log(response.status);
          if (response.status === 201) {
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            this.loading = false;
            window.location.href = "/party_registration";
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
  background: rgb(41, 4, 65);
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
