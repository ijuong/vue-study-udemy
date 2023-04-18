const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      // confirmedName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("running again2..");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    outputFullname() {
      console.log("running again..");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "haha";
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("submit!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
      this.lastname = "";
    },
  },
});

app.mount("#events");
