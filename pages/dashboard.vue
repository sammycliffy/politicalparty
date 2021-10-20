<template>
  <div>
    <main class="main">
      <aside class="sidebar">
        <nav class="nav">
          <ul>
            <li class="active"><a href="#">Dashboard</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Update Profile</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
      </aside>

      <section class="twitter">
        <div class="container">
          <h3>Hi, {{ fullName }}</h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: ""
    };
  },
  mounted() {
    const token = localStorage.getItem("token");
    this.$axios
      .get("/api/v1/user/", {
        headers: {
          Authorization: "Token " + token
        }
      })
      .then(response => {
        console.log(response.data.status);
        if (response.status === 201) {
          console.log(response.data);
          this.fullName = response.data.full_name;
          localStorage.setItem("token", response.data.token);
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: Arial;
  font-size: 16px;
  background: #0562ad;
}

.sidebar {
  position: fixed;
  width: 25%;
  height: 100vh;
  background: #014379;
  font-size: 0.65em;
}

.nav {
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}

.nav ul {
  list-style: none;
}
li {
  position: relative;
  margin: 3.2em 0;
}
a {
  line-height: 5em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.4em;
  color: rgba(#fff, 0.35);
  display: block;
  transition: all ease-out 300ms;
}

.active a {
  color: white;
}

:not(.active)::after {
  opacity: 0.2;
}

:not(.active):hover a {
  color: rgba(#fff, 0.75);
}

::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.2em;
  background: black;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to right, #5e42a6, #b74e91);
}

.twitter {
  position: relative;
  width: 75%;
  float: right;
  height: 100vh;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

a {
  position: relative;
}
img {
  width: 48px;
  height: 48px;
}

p {
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 0.1em;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
}
</style>
