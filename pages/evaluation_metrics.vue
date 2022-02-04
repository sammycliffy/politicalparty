<template>
  <div>
    <body class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <!-- Navbar Brand-->
        <a class="navbar-brand ps-3" href="/admin"> Neo4j &amp; Graphql</a>
        <!-- Sidebar Toggle-->
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h3 class="mt-4">
                <center>
                  Training output / Accuracy Metrics
                </center>
              </h3>
              <br />

              <div class="row">
                <br /><br />
                <div class="col-lg-6">
                  <div></div>
                  <p>True Positives</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="127" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>False Negative</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="2" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>False Positives</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="1" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>True Negative</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="71" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>Area under curve</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="0.999" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>Classification Accuracy</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="0.985" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>Precision</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="0.992" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>F I Score</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="0.988" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>Specificity</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="0.986" class="form-control" />
                </div>
                <div class="col-lg-6">
                  <div></div>
                  <p>Sensitivity</p>
                </div>
                <div class="col-lg-6">
                  <input type="text" value="0.984" class="form-control" />
                </div>
              </div>
            </div>
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div
                class="d-flex align-items-center justify-content-between small"
              >
                <div>
                  <h4>
                    Developed by Obasi Emmnauela Chinonye Mary,
                    G2015/PhD/Comp/543
                  </h4>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    const token = localStorage.getItem("token");

    this.$axios
      .get("/api/v1/admin/", {
        headers: {
          Authorization: "Token " + token
        }
      })
      .then(response => {
        console.log(token);
        // console.log(response.data);
        if (response.status === 201) {
          this.users = response.data;
        }
      })
      .catch(error => {
        this.loading = false;
        console.log(error.response);
      });
  }
};
</script>

<style scoped></style>
