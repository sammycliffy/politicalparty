<template>
  <div class="body">
    <div class="heading"><span>Member Registration</span></div>
    <form action="" method="post" @submit.prevent="signup">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <br />
            <label for="date">Username</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="username"
              required
            /><br />
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
              v-model="phoneNumber"
              required
            /><br />
            <label for="phone">Date of birth</label>
            <input
              type="date"
              v-model="dateOfBirth"
              class="form-control"
            /><br />
            <label for="date">Gender</label>
            <select
              name="gender"
              @change="onGender($event)"
              class="form-control"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option> </select
            ><br />
            <label for="date">Marital Status</label>
            <select
              name="gender"
              @change="onMaritalStatus($event)"
              class="form-control"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option> </select
            ><br />
            <label for="phone">Voters Pin</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="votersPin"
              required
            />
            <br />
            <label for="phone">Party Name</label>
            <input
              type="text"
              class="form-control"
              name=""
              v-model="partyName"
              required
            /><br />
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-5">
            <br />
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
            <select @change="onPosition($event)" class="form-control">
              <option value="WARDLEADER">Member</option>
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
              <option value="NOPOSITION">Ward Leader</option>
              <option value="STATEORGANIZING">State organizing</option> </select
            ><br />

            <label for="date">Ward Code</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              v-model="wardCode"
              required
            /><br />
            <label for="date">Attendance</label>
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
            <input
              type="submit"
              class="btn btn-success btn-lg"
              value="Save Details"
            />
            <br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { PARTY_MUTATION } from "@/members";
export default {
  data() {
    return {
      username: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      sex: "Male",
      maritalStatus: "Single",
      noOfPosition: "",
      attendance: "",
      performance: "",
      partyName: "",
      partyCode: "",
      contribution: "",
      duration: "",
      wardCode: "",
      votersPin: "",
      position: "Member",
      qualification: "HND",
      error: "",
      loading: false,
      success: false
    };
  },

  methods: {
    onQualification: function(event) {
      this.qualification = event.target.value;
      console.log(event.target.value);
    },
    onGender: function(event) {
      this.sex = event.target.value;
      console.log(event.target.value);
    },
    onMaritalStatus: function(event) {
      this.maritalStatus = event.target.value;
      console.log(event.target.value);
    },
    onPosition: function(event) {
      this.position = event.target.value;
      console.log(event.target.value);
    },
    signup() {
      console.log(this.noOfPosition);
      this.$apollo
        .mutate({
          mutation: PARTY_MUTATION,
          variables: {
            username: this.username,
            fullName: this.fullname,
            email: this.email,
            phoneNumber: this.phoneNumber,
            dateOfBirth: this.dateOfBirth,
            sex: this.sex,
            maritalStatus: this.maritalStatus,
            noOfPosition: this.noOfPosition,
            attendance: this.attendance,
            performance: this.performance,
            partyName: this.partyName,
            partyCode: this.partyCode,
            contribution: this.contribution,
            duration: this.duration,
            wardCode: this.wardCode,
            votersPin: this.votersPin,
            position: this.position,
            qualification: this.qualification
          }
        })
        .then(response => {
          window.location.href = "/successful";
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
.body {
  background-color: #eeeeee;
}
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
