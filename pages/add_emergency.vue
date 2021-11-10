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
                Emergency Contact
                <i class="fas fa-table me-1"></i>
              </div>

              <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <form @submit.prevent="addEmergency">
                    <br />
                    <p id="error" style="color:red">{{ error }}</p>
                    <div class="form-group">
                      <p style="color: red" id="error"></p>
                      <label><strong>Contact name</strong></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="contactName"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label><strong>Contact phone</strong></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="contactPhone"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label><strong>Designation</strong></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="contactDesignation"
                        required
                      />
                    </div>
                    <div v-if="loading" style="margin:auto;">
                      <center>
                        <Loader />
                      </center>
                    </div>
                    <div v-else>
                      <center>
                        <button
                          id="loginButton"
                          type="submit"
                          class="btn btn-success"
                        >
                          Add Contact
                        </button>
                      </center>
                    </div>

                    <br />
                    <center>
                      <p>
                        Back to
                        <a class="text-primary" href="./emergency.html"
                          >Emergency</a
                        >
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
      contactName: "",
      contactPhone: "",
      contactDesignation: "",
      loading: false,
      success: false,
      error: ""
    };
  },

  methods: {
    async addEmergency({ $axios }) {
      this.loading = true;
      const data = {
        contact_name: this.contactName,
        contact_phone: this.contactPhone,
        contact_designation: this.contactDesignation
      };

      this.$axios
        .$post("estate-admin-emergency/", data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          console.log(response);

          this.$router.push("/emergency");
          console.log(response);
          this.loading = true;
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

<style scoped></style>
