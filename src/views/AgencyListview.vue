<template>
  <div align="center">

    <h1>Agencies</h1>

    <v-container v-for="agency in agencies" :key="agency.id">
      <v-overlay opacity="1" :z-index="agency.id" :value="overlay">
        <v-card class="pa-3 ma-3">
          <agency-form/>
        </v-card>
        <v-btn class="white&#45;&#45;text" color="teal" @click="overlay = false">
          Hætta við
        </v-btn>
      </v-overlay>
      <agency-instance :agency="agency" />
    </v-container>

    <v-row justify="center">
    </v-row>

    <v-btn fab class="float-end ma-3 pa-3" color="teal" @click="overlay = !overlay">
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>

  </div>

</template>

<script>
import axios from "axios";
import router from "@/router";
import agencyInstance from "@/components/Agency/AgencyInstance";
import agencyForm from "@/components/Agency/AgencyForm";

export default {
  name: "AgencyList",
  components: {
    agencyInstance,
    agencyForm
  },
  data:() => {
    return {
      agencies: undefined,
      overlay: false,
      loading: false,
      zIndex: 0,
    }
  },
  methods:{
    viewAgency(agencyId){
      router.push('/agencydetails/'+agencyId)
    },
    deleteAgency(agency){
      this.loading = true
      axios.delete(this.$store.state.serverApi + "/api/agency/"+agency.id).then(
          (x) => {
            if(x.status === 200)
              this.loading = false
          }
      )
    }
  },
  mounted() {
    axios.get(this.$store.state.serverApi + "/api/agency").then(
        (x) => {
          this.agencies = x.data
          this.loading = false
        }
    )
  }
}
</script>

<style scoped>

</style>
