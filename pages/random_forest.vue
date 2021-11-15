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
        </button>
        <!-- Navbar Search-->
        <form
          class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
        >
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button class="btn btn-primary" id="btnNavbarSearch" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
        <!-- Navbar-->
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu">
              <div class="nav">
                <!-- <div class="sb-sidenav-menu-heading">Interface</div> -->
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-columns"></i>
                  </div>
                  Neo4j &amp; Graphql
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="layout-static.html"
                      >Static Navigation</a
                    >
                    <a class="nav-link" href="layout-sidenav-light.html"
                      >Light Sidenav</a
                    >
                  </nav>
                </div>
                <!-- <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  Evidence
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a> -->
                <a
                  class="nav-link collapsed"
                  href="/users"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  Ward Members
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <a
                  class="nav-link collapsed"
                  href="/admin_login"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  Logout
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              Admin
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">Random Forest Classification</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">
                  Random Forest and GraphQL
                </li>
              </ol>
              <div class="row">
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                  <form action="">
                    <input
                      type="number"
                      name=""
                      placeholder="Attendance"
                      class="form-control"
                      id=""
                    /><br />
                    <input
                      type="number"
                      name=""
                      placeholder="Contribution"
                      class="form-control"
                      id=""
                    /><br />
                    <input
                      type="number"
                      name=""
                      placeholder="No of Position"
                      class="form-control"
                      id=""
                    /><br />
                    <input
                      type="number"
                      placeholder="Attendance"
                      class="form-control"
                    /><br />
                    <input
                      type="number"
                      placeholder="Loyalty"
                      class="form-control"
                      id=""
                    /><br />
                    <center>
                      <input
                        type="submit"
                        class="btn btn-lg btn-success"
                        value="Submit"
                      />
                    </center>
                  </form>
                </div>
                <div class="col-lg-6"></div>
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
      <!-- <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
      crossorigin="anonymous"
    ></script> -->
      <!-- <script src="js/scripts.js"></script> -->
      <!-- <script
      src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
      crossorigin="anonymous"
    ></script> -->
      <!-- <script src="assets/demo/chart-area-demo.js"></script>
    <script src="assets/demo/chart-bar-demo.js"></script> -->
      <script
        src="https://cdn.jsdelivr.net/npm/simple-datatables@latest"
        crossorigin="anonymous"
      ></script>
      <script src="datatables-simple-demo.js"></script>
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
