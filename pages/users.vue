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
            <h1 class="mt-4">Hi, {{ full_name }}</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Estate ID: {{ estateid }}</li>
            </ol>

            <div class="card mb-4">
              <div class="card-header">
                All Users
                <i class="fas fa-table me-1"></i>
              </div>

              <div class="card-body">
                <table class="table table-hover table-bordered">
                  <tr>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Gender</th>
                  </tr>

                  <tbody>
                    <br />

                    <br />
                    <tr v-for="item in users" :key="item.email">
                      <td>{{ item.estate_user_full_name }}</td>

                      <td>{{ item.phone_number }}</td>

                      <td>{{ item.email }}</td>

                      <td>{{ item.qualification }}</td>

                      <td>{{ item.dateOfBirth }}</td>
                    </tr>
                  </tbody>
                </table>
                <center v-if="!users || !users.length" style="color:green;">
                  There are no users.
                </center>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      users: [],
      full_name: "",
      estateid: ""
    };
  },
  computed: {
    ...mapGetters(["facility"])
  },
  mounted() {
    const response = localStorage.getItem("user");
    const data = JSON.parse(response);
    this.full_name = data.full_name;
    this.estateid = data.created_facility_id;

    this.$axios
      .$get("estate-user/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("user-token")
        }
      })
      .then(response => {
        this.user = response;
        if (response.status === 200) {
          console.log(users);
        }
      })
      .catch(error => {
        console.log(error.response);
        for (const [key, value] of Object.entries(error.response.data)) {
          var str = `${key}: ${value}`;
          this.error = str.substring(str.indexOf(":") + 1);
        }
      });
  },

  methods: {
    myMessage(phone_number) {
      localStorage.setItem("phone", phone_number);
      location.href = "../message/compose_message.html";
    },

    getAdminMessage() {
      let estateDetail = localStorage.getItem("estateDetails");
      let data = JSON.parse(estateDetail);
      console.log(data.results[0].estate_id);
      let list = [];
      let row = "";

      axios
        .get("/estate-user-message/?estate_id=" + data.results[0].estate_id, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          if (response.status === 200) {
            list = response.data.results;
            console.log(list);
            for (let i = 0; i < list.length; i++) {
              row +=
                "<div class='media'><div class='media-left'><a href='#'><img class='media-object mr-3' src='../images/avatar/4.png' alt='..'/></a></div><div class='media-body'><h4 class='media-heading text-primary'>" +
                list[i].estate_user_full_name +
                "</h4><p>" +
                list[i].message +
                "</p><p class='comment-date'>" +
                formatDate(list[i].time) +
                "</p></div></div>";
            }
            document.getElementById("message-body").innerHTML = row;
          }
        })
        .catch(error => {
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.error = str.substring(str.indexOf(":") + 1);
          }
        });
    },

    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [month, day].join("-");
    },
    approveUser(id) {
      console.log(id);
      const data = {
        accepted: true
      };
      const url = "/estate-pending-user/" + id + "/";
      console.log(url);
      axios
        .patch(url, data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
            alert("accepted");
            location.reload();
          }
        })
        .catch(error => {
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.error = str.substring(str.indexOf(":") + 1);
          }
        });
    },

    message(id) {
      const data = {
        accepted: true
      };
      axios
        .put("/estate-pending-user/" + id, data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token"),
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
            alert("accepted");
          }
        })
        .catch(error => {
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
