<template>
  <div class="sb-nav-fixed">
    <div id="modalHomeEvents" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header" style="height:50px;">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <label>Are you sure you want to delete?</label>
            <input type="hidden" name="eventId" id="eventId" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              No
            </button>
            <button
              type="button"
              onclick="send()"
              class="btn btn-danger"
              data-dismiss="modal"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
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
              <li class="breadcrumb-item active">Company ID: {{ estateid }}</li>
            </ol>
            <div class="row">
              <div class="col-xl-3 col-md-6">
                <div class="card bg-primary text-white mb-4">
                  <div class="card-body">1</div>
                  <div
                    class="card-footer d-flex align-items-center justify-content-between"
                  >
                    <a class="small text-white stretched-link" href="#"
                      >Resident in</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-warning text-white mb-4">
                  <div class="card-body">2</div>
                  <div
                    class="card-footer d-flex align-items-center justify-content-between"
                  >
                    <a class="small text-white stretched-link" href="#"
                      >List of users</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-success text-white mb-4">
                  <div class="card-body">3</div>
                  <div
                    class="card-footer d-flex align-items-center justify-content-between"
                  >
                    <a class="small text-white stretched-link" href="#"
                      >Pending users</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card bg-danger text-white mb-4">
                  <div class="card-body">2</div>
                  <div
                    class="card-footer d-flex align-items-center justify-content-between"
                  >
                    <a class="small text-white stretched-link" href="#"
                      >Guards</a
                    >
                    <div class="small text-white">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-xl-6">
                <div class="card mb-4">
                  <div class="card-header">
                    <i class="fas fa-chart-area me-1"></i>
                    Area Chart Example
                  </div>
                  <div class="card-body">
                    <canvas id="myAreaChart" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card mb-4">
                  <div class="card-header">
                    <i class="fas fa-chart-bar me-1"></i>
                    Bar Chart Example
                  </div>
                  <div class="card-body">
                    <canvas id="myBarChart" width="100%" height="40"></canvas>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="card mb-4">
              <div class="card-header">
                Pending Users
                <i class="fas fa-table me-1"></i>
              </div>

              <div class="card-body">
                <table class="table table-hover table-bordered">
                  <tr>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>

                  <tbody>
                    <tr v-for="item in users" :key="item.email">
                      <td>{{ item.estate_user_full_name }}</td>

                      <td>{{ item.estate_user_phone }}</td>

                      <td>{{ item.estate_address }}</td>

                      <td>
                        <button
                          @click="approveUser(item.id)"
                          class="btn btn-sm btn-success"
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        <button
                          @click="myMessage(item.estate_user_phone)"
                          class="btn btn-sm btn-primary"
                        >
                          Message
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
      estateid: "",
      loading: false
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
    console.log(data);

    this.$axios
      .$get("company-pending-user/", {
        headers: {
          Authorization: "Token " + localStorage.getItem("user-token")
        }
      })
      .then(response => {
        console.log(response);
        this.users = response;
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
    async approveUser(id) {
      this.loading = true;
      const data = {
        accepted: true
      };

      this.$axios
        .$patch("company-pending-user/" + id + "/", data, {
          headers: {
            Authorization: "Token " + localStorage.getItem("user-token")
          }
        })
        .then(response => {
          console.log(response);
          alert("accepted");
          location.reload();
          this.loading = true;
        })
        .catch(error => {
          this.loading = false;
          console.log(error.response);
          for (const [key, value] of Object.entries(error.response.data)) {
            var str = `${key}: ${value}`;
            this.guardError = str.substring(str.indexOf(":") + 1);
          }
        });
    },

    myMessage(phone_number) {
      localStorage.setItem("phone", phone_number);
      location.href = "/send_message";
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

    message(id) {
      const data = {
        accepted: true
      };
      axios
        .put("/company-pending-user/" + id, data, {
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
