<template>
  <div class="home">
    <h1>Home</h1>
    <Sidebar :desc="desc"></Sidebar>
    <comp-a></comp-a>
    <comp-b></comp-b>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar";
import CompA from "@/components/CompA";
import CompB from "@/components/CompB";
import axios from "axios";

export default {
  name: "Home",
  components: {
    CompA,
    CompB,
    Sidebar
  },
    created: function () {
      this.loadData();
    },
    methods: {
      loadData: function () {
        this.status = "Loading..."
        axios.get("@/assets/Json/Instructions.json" + this.$route.params.id)
        .then((result) => {
        self.desc = result.data;
        console.log(self.desc);

        })
      }
    },
  data() {
    return {
      title: '',
      
    };
    
  }
};
</script>
