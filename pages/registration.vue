<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6"></div>
      <div class="col-lg-6">
        <div class="heading"><span>Member Registration</span></div>
        <div class="center-div">
          <form method="post" @submit.prevent="signup">
            <span style="color:red">{{ error }}</span
            ><br />
            <!-- <label for="date">Username</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="username"
              required
            /><br /> -->
            <label for="date">Fullname</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="fullname"
              required
            /><br />
            <label for="date">email</label>
            <input
              type="email"
              class="form-control"
              name=""
              v-model="email"
              required
            /><br />
            <label for="phone">Phone number</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="phonenumber"
              required
            /><br />
            <label for="phone">Party Name</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="partyName"
              required
            /><br />
            <label for="phone">Party Code</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="partyCode"
              required
            /><br />
            <label for="phone">Qualification</label>

            <select
              name="qualification"
              id="cars"
              class="form-control"
              @change="onQualification($event)"
              ><option value="PHD">PHD</option>
              <option value="MASTERS">Masters</option>
              <option value="BSC">Bsc</option>
              <option value="HND">HND</option>
              <option value="HND">SSCE</option>
              <option value="HND">FSLC</option> </select
            ><br />
            <label for="date">Position Elected</label>
            <select name="cars" id="cars" class="form-control">
              <option value="WARDLEADER">Ward Leader</option>
              <option value="VICECHAIRMAN">Ward Chairman</option>
              <option value="WARDCHAIRMAN">Vice Ward Chairman</option>
              <option value="SECRETARY">Secretary</option>
              <option value="YOUTHLEADER">Youth Leader</option>
              <option value="WOMANLEADER">Woman Leader</option>
              <option value="FINANCIALLEADER">Financial Secretary</option>
              <option value="TREASURER">Treasurer</option>
              <option value="PARTYCHAIRMAN">Party Chairman</option>
              <option value="VICEPARTYCHAIRMAN">Vice Party Chairman</option>
              <option value="PUBLICITYSECRETARY"> Publicity Secretary</option>
              <option value="LEGALADVISER">LG legal adviser</option>
              <option value="STATECHAIRMAN">State Chairman</option>
              <option value="VICESTATECHAIRMAN">Vice state Chairman</option>
              <option value="NOPOSITION">No Position</option>
              <option value="STATEORGANIZING">State organizing</option> </select
            ><br />

            <label for="date">Ward CODE</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="wardCode"
              required
            /><br />
            <label for="date">Attendace</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              v-model="attendance"
              required
            /><br />
            <label for="date">No of positions</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              v-model="noOfPosition"
              required
            /><br />
            <label for="date">Performance</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              v-model="performance"
              required
            /><br />
            <label for="date">Contribution</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              v-model="contribution"
              required
            /><br />
            <label for="date">Duration</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              v-model="duration"
              required
            /><br />
            <label for="date">Loyalty</label>
            <input
              type="number"
              class="form-control"
              name=""
              id=""
              v-model="loyalty"
              required
            /><br />
            <center>
              <br /><br />
              <div v-if="loading == true">
                <Loader />
              </div>
              <div v-else>
                <button class="btn btn-primary">Save</button>
              </div>
              <br />
              <!-- <p>
                <br />
                <a href="/" class="btn btn-link">
                  Member Login
                </a>
              </p> -->
            </center>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PARTY_MUTATION } from "@/members";
export default {
  data() {
    return {
      username: "",
      email: "",
      fullname: "",
      phonenumber: "",
      password: "",
      date: "",
      partyCode: "",
      partyName: "",
      attendance: "",
      performance: "",
      contribution: "",
      duration: "",
      loyalty: "",
      noOfPosition: "",
      loading: false,
      success: false,
      qualification: "HND",
      wardCode: "",
      error: ""
    };
  },

  methods: {
    onQualification: function(event) {
      this.qualification = event.target.value;
      console.log(event.target.value);
    },
    signup() {
      this.$apollo
        .mutate({
          mutation: PARTY_MUTATION,
          variables: {
            fullName: this.fullname,
            email: this.email,
            phoneNumber: this.phonenumber,
            qualification: this.qualification,
            noOfPosition: this.noOfPosition,
            attendance: this.attendance,
            performance: this.performance,
            contribution: this.contribution,
            duration: this.duration,
            loyalty: this.loyalty,
            partyName: this.partyName,
            partyCode: this.partyCode,
            wardCode: this.wardCode
          }
        })
        .then(response => {
          alert("Saved successfully");
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

<style>
.btn-success {
  background: rgb(41, 4, 65);
}

label {
  color: rgb(41, 4, 65);
}
h4 {
  text-align: center;
  line-height: 30px;
}
#logo a > h3 {
  font-size: 15px;
  padding-top: 0px;
}
.center-div {
  width: 100%;
  background-color: white;
  padding: 20px 40px 40px 40px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.heading {
  background: #014379;
  color: white;
  width: 100%;
  font-size: 25px;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: bold;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.errorlist {
  color: red;
}
.my_div {
  height: 100%;
  width: 100%;
  padding-left: 10px;
  padding-top: 20px;
  background-color: white;
  border: 2px solid #eeeeee;
  box-shadow: inset;
  border-radius: 5px;
  color: dimgrey;
}
</style>
