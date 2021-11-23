<template>
  <div>
    <div id="layoutSidenav_nav">
      <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
          <div class="nav">
            <!-- <div class="sb-sidenav-menu-heading">Interface</div> -->
            <a
              class="nav-link collapsed"
              href="/graph_database"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div class="sb-nav-link-icon">
                <i class="fas fa-columns"></i>
              </div>
              Graph Database
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
              href="/random_forest"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div class="sb-nav-link-icon">
                <i class="fas fa-book-open"></i>
              </div>
              Random Forest
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </a>
            <a
              class="nav-link collapsed"
              href="/party_registration"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div class="sb-nav-link-icon">
                <i class="fas fa-book-open"></i>
              </div>
              Add new member
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
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
