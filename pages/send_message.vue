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
                Add News
                <i class="fas fa-table me-1"></i>
              </div>

              <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <form @submit.prevent="sendMessage">
                    <p style="color:red">{{ error }}</p>
                    <br />
                    <input
                      type="text"
                      name="place"
                      class="form-control"
                      required
                      :value="`${phone}`"
                    />
                    <br />
                    <textarea
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Body"
                      v-model="message"
                      class="form-control bg-transparent"
                    ></textarea
                    ><br />
                    <div v-if="loading" style="margin:auto;">
                      <center>
                        <Loader />
                      </center>
                    </div>
                    <div v-else>
                      <center>
                        <button type="submit" class="btn btn-success">
                          Send Message
                        </button>
                      </center>
                    </div>
                    <br />
                    <center>
                      <!-- <p>
                        Back to
                        <a class="text-primary" href="/users">News</a>
                      </p> -->
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
      message: "",
      phone: "",
      loading: false,

      error: ""
    };
  },
  mounted() {
    const phoneNumber = localStorage.getItem("phone");
    this.phone = phoneNumber;
    console.log(phoneNumber);
  },
  methods: {
    async sendMessage() {
      this.loading = true;

      const data = {
        estate_user_phone: this.phone,
        message: this.message
      };

      this.$axios
        .$post("estate-admin-message/", data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          console.log(response);
          this.loading = false;
          alert("Message sent");
          console.log(response);
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
