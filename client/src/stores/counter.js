import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    basedUrl: "http://localhost:3000",
    user: {},
  }),
  actions: {
    async register(inputBody) {
      try {
        await axios({
          url: this.basedUrl + "/users/register",
          method: "post",
          data: inputBody,
        });
        Swal.fire("Your account has been Created!");
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
    async login(inputBody) {
      try {
        const { data } = await axios({
          url: this.basedUrl + "/users/login",
          method: "post",
          data: inputBody,
        });
        localStorage.setItem("access_token", data.access_token);
        Swal.fire("Login Successful");

        this.router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
