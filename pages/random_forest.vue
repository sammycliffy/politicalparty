<template>
  <div class="sb-nav-fixed">
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
            <h1 class="mt-4">Random Forest Prediction</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-data active">
                All members
              </li>
            </ol>

            <p v-if="group == '0'">
              Base on Random forest classsifcation, the user is
              <span class="text-danger">
                Not Dedicated
              </span>
            </p>
            <p v-else-if="group == '1'">
              Base on Random forest classsifcation, the user is
              <span class="text-success">
                Dedicated
              </span>
            </p>
            <span v-else></span>
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-6">
                <form @submit.prevent="classification">
                  <input
                    type="number"
                    name=""
                    placeholder="Attendance"
                    class="form-control"
                    v-model="attendance"
                    id=""
                  /><br />
                  <input
                    type="number"
                    name=""
                    placeholder="Loyalty"
                    class="form-control"
                    v-model="loyalty"
                    id=""
                  /><br />
                  <input
                    type="number"
                    name=""
                    placeholder="Contribution"
                    class="form-control"
                    v-model="contribution"
                    id=""
                  /><br />
                  <input
                    type="number"
                    placeholder="No of Position"
                    class="form-control"
                    v-model="noOfPosition"
                  /><br />
                  <input
                    type="number"
                    placeholder="Duration"
                    class="form-control"
                    id=""
                    v-model="duration"
                  /><br />
                  <center>
                    <input
                      type="submit"
                      class="btn btn-lg btn-success"
                      value="Classify"
                    />
                  </center>
                </form>
              </div>
              <div class="col-lg-3"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { CLASSIFICATION } from "@/classification";
export default {
  data() {
    return {
      users: "",
      attendance: "",
      contribution: "",
      duration: "",
      noOfPosition: "",
      loyalty: "",
      group: ""
    };
  },
  methods: {
    classification() {
      this.$apollo
        .mutate({
          mutation: CLASSIFICATION,
          variables: {
            attendance: this.attendance,
            contribution: this.contribution,
            duration: this.duration,
            noOfPosition: this.noOfPosition,
            loyalty: this.loyalty
          }
        })
        .then(response => {
          this.group = response.data.randomMutation.testClass.classification;

          // window.location.href = "/successful";
          // redirect to login page
          // this.$router.replace("/login");
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
