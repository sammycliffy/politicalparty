<template>
  <div class="body">
    <div class="heading">
      <span>POLITICAL PARTY QUERY PROCESSING PROJECT</span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="col-lg-6">
            <div class="jumbotron"></div>
          </div>
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
      fullname: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      sex: "",
      maritalStatus: "",
      noOfPosition: "",
      attendance: "",
      performance: "",
      partyName: "",
      partyCode: "",
      contribution: "",
      duration: "",
      wardCode: "",
      votersPin: "",
      position: "",
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
      this.gender = event.target.value;
      console.log(event.target.value);
    },
    onMaritalStatus: function(event) {
      this.maritalStatus = event.target.value;
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
