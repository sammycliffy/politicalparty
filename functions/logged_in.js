
export default {
  isLoggedIn() {
    const token = localStorage.getItem("token");
    console.log(token);
  }
}