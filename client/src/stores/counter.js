import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    basedUrl: "http://localhost:3000",
    user: {},
  }),
  actions: {
    async register(inputBody) {
      console.log(inputBody);
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
    async login(inputBody) {},
  },
});
