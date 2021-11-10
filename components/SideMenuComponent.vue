<template>
  <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <div class="nav">
        <!-- <div class="sb-sidenav-menu-heading">Interface</div> -->
        <a
          class="nav-link collapsed"
          href="/admin"
          data-bs-toggle="collapse"
          data-bs-target="#collapseLayouts"
          aria-expanded="false"
          aria-controls="collapseLayouts"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-columns"></i>
          </div>
          Dashboard
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
            <a class="nav-link" href="layout-static.html">Static Navigation</a>
            <a class="nav-link" href="layout-sidenav-light.html">Users</a>
          </nav>
        </div>
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
          Users
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <a
          class="nav-link collapsed"
          href="/emergency"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-book-open"></i>
          </div>
          Emergency
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <a
          class="nav-link collapsed"
          href="/guard"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-book-open"></i>
          </div>
          Guard
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <a
          class="nav-link collapsed"
          href="/message"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-book-open"></i>
          </div>
          Messages
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <a
          class="nav-link collapsed"
          href="/news"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <div class="sb-nav-link-icon">
            <i class="fas fa-book-open"></i>
          </div>
          News
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
