<template>
  <div class="sb-nav-fixed">
    <SideMenu />
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <SideMenuComponent />
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <div class="card mb-4" style="clear:both">
              <div class="card-header">
                Guard Contact
                <i class="fas fa-table me-1"></i>
              </div>

              <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <form @submit.prevent="addGuard">
                    <br />
                    <p style="color:red">{{ guardError }}</p>
                    <div class="form-group">
                      <p style="color: red" id="error"></p>
                      <label><strong>Contact name</strong></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="fullName"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label><strong>Email</strong></label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label><strong>Password</strong></label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="password"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label><strong>Contact phone</strong></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="phoneNumber"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label><strong>Address</strong></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="address"
                        required
                      />
                    </div>
                    <label><strong>Gender</strong></label>
                    <select @change="onGender($event)">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <br /><br />
                    <div v-if="loading" style="margin:auto;">
                      <center>
                        <Loader />
                      </center>
                    </div>
                    <div v-else>
                      <center>
                        <button type="submit" class="btn btn-success">
                          Add Contact
                        </button>
                      </center>
                    </div>

                    <br />
                    <center>
                      <p>
                        Back to
                        <a class="text-primary" href="/guard">Guard</a>
                      </p>
                    </center>
                  </form>
                  <br /><br />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div
              class="d-flex align-items-center justify-content-between small"
            >
              <div class="text-muted">Copyright &copy;</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      fullName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      password: "",
      loading: false,
      success: false,
      error: "",
      guardError: ""
    };
  },

  methods: {
    onGender: function(event) {
      this.gender = event.target.value;
      console.log(event.target.value);
    },
    async addGuard({ $axios }) {
      this.loading = true;
      const data = {
        email: this.email,
        full_name: this.fullName,
        phone_number: this.phoneNumber,
        address: this.address,
        gender: this.gender,
        password1: this.password,
        password2: this.password,
        role: " ",
        is_estateuser: false,
        is_guard: true
      };

      this.$axios
        .$post("guard/", data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          console.log(response);

          this.$router.push("/guard");
          console.log(response);
          this.loading = true;
        })
        .catch(error => {
          this.loading = false;
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.guardError = str.substring(str.indexOf(":") + 1);
          }
        });
    }
  }
};
</script>

<style scoped>
select {
  width: 100%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid rgb(197, 197, 197);
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
