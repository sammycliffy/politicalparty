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
              <h1 class="mt-4">Query Processing</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-data active">
                  Querry Processing
                </li>
              </ol>
              <div class="row">
                <br /><br />
                <div class="col-lg-3">
                  <a href="/all_members" class="btn btn-lg btn-primary"
                    >All members</a
                  >
                </div>
                <div class="col-lg-6">
                  <form action="" method="post" @submit.prevent="search">
                    <input
                      type="text"
                      name=""
                      v-model="username"
                      placeholder="Username"
                      class="form-control"
                      required
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
                  <br /><br /><br />
                </div>
              </div>
              <div class="col-lg-3"></div>
              <div v-if="data == ''"></div>
              <div v-else-if="data == 'undefined'">
                <p>User not found</p>
              </div>
              <div v-else>
                <table class="table table-hover table-bordered table-condensed">
                  <thead>
                    <td>Username</td>
                    <td>Fullname</td>
                    <td>Mobile</td>
                    <td>Qualification</td>
                    <td>Sex</td>
                    <td>Marital</td>
                    <td>Positions</td>
                    <td>Attendance</td>
                    <td>Performance</td>
                    <td>Party-name</td>
                    <td>Party-code</td>
                    <td>Contribution</td>
                    <td>duration</td>
                    <td>Ward-code</td>
                    <td>Voters-Pin</td>
                    <td>Position</td>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ data.username }}</td>
                      <td>{{ data.fullName }}</td>
                      <td>{{ data.phoneNumber }}</td>
                      <td>{{ data.qualification }}</td>
                      <td>{{ data.sex }}</td>
                      <td>{{ data.maritalStatus }}</td>
                      <td>{{ data.noOfPosition }}</td>
                      <td>{{ data.attendance }}</td>
                      <td>{{ data.performance }}</td>
                      <td>{{ data.partyName }}</td>
                      <td>{{ data.partyCode }}</td>
                      <td>{{ data.contribution }}</td>
                      <td>{{ data.duration }}</td>
                      <td>{{ data.wardCode }}</td>
                      <td>{{ data.votersPin }}</td>
                      <td>{{ data.position }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div
                class="d-flex align-datas-center justify-content-between small"
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
    </body>
  </div>
</template>

<script>
import { QUERYBYUSERNAME } from "@/querymemberbyid";
export default {
  data() {
    return {
      users: "",
      username: "",
      data: ""
    };
  },
  methods: {
    search() {
      console.log(this.username);
      this.$apollo
        .query({
          query: QUERYBYUSERNAME,
          variables: {
            username: this.username
          }
        })
        .then(response => {
          console.log(response);
          this.data = response.data.partymember;
          console.log(this.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped></style>
