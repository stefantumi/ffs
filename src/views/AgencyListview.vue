<template>
  <v-container align="center">
    <h1>Agencies</h1>
    <v-container>
      <v-card v-if="agencyCount < 1" class="ma-3 pa-3" max-width="450">
        <v-card-title>
          No Agencies
        </v-card-title>
        <agency-form></agency-form>
      </v-card>
    </v-container>
    <v-container v-for="agency in agencies" :key="agency.id">
      <v-overlay opacity="1" :z-index="agency.id" :value="overlay">
        <v-card class="pa-3 ma-3">
          <v-card-title>
            Skrá Fasteignasölu
          </v-card-title>
          <agency-form/>
        </v-card>
        <v-btn class="white&#45;&#45;text" color="teal" @click="overlay = false">
          Hætta við
        </v-btn>
      </v-overlay>
      <agency-instance :agency="agency" />

    </v-container>

    <v-btn fab right bottom absolute class="ma-3 mb-10 pa-3" color="teal" @click="overlay = !overlay">
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-card v-if="getFailed">
      <v-card-title>
        <v-container>
          {{sslError}}
        </v-container>
      </v-card-title>
      <v-card-text>
        please visit <a :href="this.$store.state.serverApi + '/api/agency/'">server address</a> to accept ssl
      </v-card-text>
    </v-card>
  </v-container>
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
      sslError: undefined,
      agencyCount: undefined,
      getFailed: false,
      deleteError: false,
      agencies: undefined,
      overlay: false,
      zIndex: 0,
    }
  },
  methods:{
    viewAgency(agencyId){
      router.push('/agencydetails/'+agencyId)
    },
    deleteAgency(agency){
      axios.delete(this.$store.state.serverApi + "/api/agency/"+agency.id).catch(
          error => {
            this.deleteError = error.code
          }
      )
    }
  },
  mounted() {
    axios.get(this.$store.state.serverApi + "/api/agency").then(
        (x) => {
          this.agencies = x.data
          this.agencyCount = x.data.length
        }
    ).catch(error => {
      this.sslError = error.code
      this.getFailed = true
    })
  }
}
</script>

<style scoped>

</style>
