<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6">
          <div class="heading"><span>Party Registration</span></div>
          <div class="center-div">
            <form action="" method="post" @submit.prevent="handleSubmit">
              <label for="partyname">Party Name</label>
              <input
                type="text"
                class="form-control"
                v-model="partyname"
                required
              /><br />
              <label for="partyCode">Party code</label>
              <input
                type="text"
                class="form-control"
                v-model="partycode"
                required
              /><br />
              <label for="wardCode">Ward code</label>
              <input
                type="text"
                class="form-control"
                name=""
                id=""
                v-model="wardcode"
                required
              /><br />
              <label for="date">Voter's Card pin</label>
              <input
                type="text"
                class="form-control"
                v-model="voterspin"
                required
              /><br />
              <label for="qualification">Gender</label>
              <select class="form-control" @change="onGender($event)">
                <option value="Male">Male</option>
                <option value="Female">Female</option> </select
              ><br />
              <label for="marital">Marital Status</label>
              <select
                name="cars"
                id="cars"
                class="form-control"
                @change="onMarital($event)"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option> </select
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
                <option value="STATEORGANIZING"
                  >State organizing</option
                > </select
              ><br />
              <label for="duation">Duration of position (Years)</label>
              <input
                type="number"
                class="form-control"
                name=""
                id=""
                v-model="duration"
                required
              /><br />
              <label for="date">Years of experience</label>
              <input
                type="number"
                class="form-control"
                name=""
                id=""
                v-model="experience"
                required
              /><br />
              <label for="date">Performance in the party</label>
              <input
                type="number"
                class="form-control"
                name=""
                id=""
                v-model="performance"
                required
              /><br />
              <label for="date">Registration Date</label>
              <input
                type="date"
                class="form-control"
                name=""
                id=""
                v-model="registrationdate"
                required
              /><br />

              <center>
                <br /><br />
                <div v-if="loading == true">
                  <Loader />
                </div>
                <div v-else>
                  <button class="btn btn-primary">Continue</button>
                </div>
                <br />
                <p>
                  <br />
                  <a href="/login" class="btn btn-link">
                    Ward member Login
                  </a>
                </p>
              </center>
            </form>
          </div>
        </div>
        <div class="col-lg-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partyname: "",
      partycode: "",
      wardcode: "",
      voterspin: "",
      gender: "Male",
      marital: "Single",
      loading: false,
      position: "WARDLEADER",
      duration: "",
      performance: "",
      experience: "",
      registrationdate: ""
    };
  },
  methods: {
    onGender: function(event) {
      this.gender = event.target.value;
      console.log(event.target.value);
    },
    onMarital: function(event) {
      this.marital = event.target.value;
      console.log(event.target.value);
    },
    changeposition: function(event) {
      this.position = event.target.value;
      console.log(event.target.value);
    },

    async handleSubmit({ $axios }) {
      this.loading = true;
      const datas = {
        partyName: this.partyname,
        partyCode: this.partycode,
        wardCode: this.wardcode,
        votersCard: this.voterspin,
        registrationDate: this.registrationdate,
        yearsOfExperience: this.experience,
        performanceInOffice: this.performance,
        maritalStatus: this.marital,
        position: this.position
      };
      this.$axios
        .post("/api/v1/party/", datas, {
          headers: {
            Authorization: "Token " + localStorage.getItem("token")
          }
        })
        .then(response => {
          console.log(response.data);
          if (response.status === 201) {
            console.log(response.data);
            this.loading = false;
            window.location.href = "/successful";
          }
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
