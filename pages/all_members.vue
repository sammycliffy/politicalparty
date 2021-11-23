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
            <h1 class="mt-4">Query Processing</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-data active">
                All members
              </li>
            </ol>
            <br /><br />

            <table class="table table-hover table-bordered table-condensed">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>Fullname</td>
                  <td>Mobile</td>
                  <td>Qualification</td>
                  <td>Sex</td>
                  <td>Marital</td>
                  <td>Positions</td>
                  <td>Attendance</td>
                  <td>Performance</td>
                  <td>Party name</td>
                  <td>Party code</td>
                  <td>Contribution</td>
                  <td>duration</td>
                  <td>Ward code</td>
                  <td>Voters Pin</td>
                  <td>Position</td>
                </tr>
              </tbody>
              <tr v-for="item in users" :key="item.email">
                <td>{{ item.username }}</td>
                <td>{{ item.fullName }}</td>
                <td>{{ item.phoneNumber }}</td>
                <td>{{ item.qualification }}</td>
                <td>{{ item.sex }}</td>
                <td>{{ item.maritalStatus }}</td>
                <td>{{ item.noOfPosition }}</td>
                <td>{{ item.attendance }}</td>
                <td>{{ item.performance }}</td>
                <td>{{ item.partyName }}</td>
                <td>{{ item.partyCode }}</td>
                <td>{{ item.contribution }}</td>
                <td>{{ item.duration }}</td>
                <td>{{ item.wardCode }}</td>
                <td>{{ item.votersPin }}</td>
                <td>{{ item.position }}</td>
              </tr>
            </table>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { QUERYPARTYMEMBERS } from "@/querymembers";

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getMembers();
  },
  methods: {
    getMembers() {
      this.$apollo
        .query({
          query: QUERYPARTYMEMBERS
        })
        .then(response => {
          this.users = response.data.allPartymembers;
          console.log(response.data.allPartymembers);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped></style>
