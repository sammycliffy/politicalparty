<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <title>Signup</title>
    </head>
    <body>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>

          <div class="col-lg-6">
            <div class="heading">
              <span>Executive Member Registration</span>
            </div>
            <div class="center-div">
              <form method="post" action="">
                <!-- <label for="date">Member ID</label>

                <input type="text" class="form-control" name="" id="" /><br /> -->
                <label for="date">Position Elected</label>
                <select name="cars" id="cars" class="form-control">
                  <option value="volvo">Ward Leader</option>
                  <option value="saab">Ward Chairman</option>
                  <option value="saab">Vice Ward Chairman</option>
                  <option value="saab">Secretary</option>
                  <option value="saab">Youth Leader</option>
                  <option value="saab">Woman Leader</option>
                  <option value="saab">Financial Secretary</option>
                  <option value="saab">Treasurer</option>
                  <option value="saab">Party Chairman</option>
                  <option value="saab">Vice Party Chairman</option>
                  <option value="saab"> Publicity Secretary</option>
                  <option value="saab">LG legal adviser</option>
                  <option value="saab">State Chairman</option>
                  <option value="saab">Vice state Chairman</option>
                  <option value="saab">State organizing</option> </select
                ><br />
                <label for="duation">Duration of position (Years)</label>
                <input type="number" class="form-control" name="" id="" /><br />
                <label for="date">Years of experience</label>
                <input type="number" class="form-control" name="" id="" /><br />
                <label for="date">Performance in the party</label>
                <input type="number" class="form-control" name="" id="" /><br />

                <center>
                  <br /><br />
                  <button type="submit" class="btn btn-success btn-lg">
                    Register</button
                  ><br />
                  <p>
                    <br />
                    <a href="/" class="btn btn-link">
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
      <br /><br /><br />
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn-success {
  background: rgb(41, 4, 65);
}
body {
  background: rgb(209, 255, 209);
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
  background-color: rgb(41, 4, 65);
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
