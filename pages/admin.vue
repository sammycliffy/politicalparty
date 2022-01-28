<template>
  <div>
    <body class="sb-nav-fixed">
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <!-- Navbar Brand-->
        <a class="navbar-brand ps-3" href="/admin"> Neo4j &amp; Graphql</a>
        <!-- Sidebar Toggle-->
        <button
          class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i class="fas fa-bars"></i>
          Button
        </button>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h3 class="mt-4">
                <center>
                  QUERY PROCESSING OF A POLITICAL PARTY ADMINISTRATION
                  DISTRIBUTED DATABASE USING IMPROVED GRAPHQL MODEL.
                </center>
              </h3>
              <br />
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                  GraphQL Model with Random Forest Classification
                </li>
              </ol>
              <div class="row">
                <br /><br />
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-primary text-white mb-4">
                    <div class="card-body">Graph Database</div>
                    <div
                      class="card-footer d-flex align-items-center justify-content-between"
                    >
                      <a
                        class="small text-white stretched-link"
                        href="/graph_database"
                        >Query database using GraphQL</a
                      >
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-success text-white mb-4">
                    <div class="card-body">Random Forest Classification</div>
                    <div
                      class="card-footer d-flex align-items-center justify-content-between"
                    >
                      <a
                        class="small text-white stretched-link"
                        href="/random_forest"
                        >User classification</a
                      >
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-info text-white mb-4">
                    <div class="card-body">Add member</div>
                    <div
                      class="card-footer d-flex align-items-center justify-content-between"
                    >
                      <a
                        class="small text-white stretched-link"
                        href="/party_registration"
                        >Add new member</a
                      >
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-danger text-white mb-4">
                    <div class="card-body">Output/Evaluation Metrics</div>
                    <div
                      class="card-footer d-flex align-items-center justify-content-between"
                    >
                      <a class="small text-white stretched-link" href="#"
                        >Results</a
                      >
                      <div class="small text-white">
                        <i class="fas fa-angle-right"></i>
                      </div>
                    </div>
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
