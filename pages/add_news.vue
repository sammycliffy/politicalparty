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
                  <form @submit.prevent="addNews">
                    <p style="color:red">{{ error }}</p>
                    <br />
                    <input
                      type="text"
                      name="place"
                      class="form-control"
                      placeholder="Subject"
                      required
                      v-model="subject"
                    />
                    <br />
                    <textarea
                      name="textarea"
                      cols="30"
                      rows="5"
                      id="body-message"
                      placeholder="Body"
                      v-model="body"
                      class="form-control bg-transparent"
                    ></textarea
                    ><br />
                    <div id="myLoader">
                      <div class="sk-three-bounce">
                        <div class="sk-child sk-bounce1"></div>
                        <div class="sk-child sk-bounce2"></div>
                        <div class="sk-child sk-bounce3"></div>
                      </div>
                    </div>
                    <div v-if="loading" style="margin:auto;">
                      <center>
                        <Loader />
                      </center>
                    </div>
                    <div v-else>
                      <center>
                        <button type="submit" class="btn btn-success">
                          Add News
                        </button>
                      </center>
                    </div>
                    <br />
                    <center>
                      <p>
                        Back to
                        <a class="text-primary" href="/news">News</a>
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
      subject: "",
      body: "",
      loading: false,
      success: false,
      error: ""
    };
  },

  methods: {
    async addNews({ $axios }) {
      this.loading = true;
      const sendingData = {
        subject: this.subject,
        body: this.body
      };

      this.$axios
        .$post("estate-admin-news/", sendingData, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          console.log(response);
          this.loading = false;
          this.$router.push("/news");
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
