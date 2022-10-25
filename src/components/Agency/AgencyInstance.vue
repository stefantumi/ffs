<template>
  <v-card
      max-width="450"
      class="mx-auto"
  >
    <v-card-title>
      {{agency.id}}
      <v-spacer>{{ agency.name }}</v-spacer>
    </v-card-title>
    <v-card-actions>
      <v-icon
          color="primary"
          type="submit"
          @click="overlay =! overlay"
      >
        mdi-pen
      </v-icon>
      <v-spacer>
        <v-icon
            color="success"
            @click="viewAgency(agency.id)"
        >
          mdi-magnify
        </v-icon>

      </v-spacer>
      <v-btn icon type="submit" @click="deleteAgency(agency)">
        <v-icon color="red">
          mdi-delete
        </v-icon>
      </v-btn>
      <v-overlay
          opacity="1"
          :z-index="agency.id"
          :value="overlay"
      >
        <v-card class="pa-3 ma-3">
          <v-card-title>
            Breyta Nafni
          </v-card-title>
          <agency-edit :agency="agency"/>
        </v-card>
        <v-btn
            color="red"
            @click="overlay = false"
        >
          Hætta við
        </v-btn>
      </v-overlay>
    </v-card-actions>
  </v-card>
</template>

<script>
import router from "@/router";
import axios from "axios";
import agencyEdit from "@/components/Agency/AgencyFormEdit";

export default {
  name: "AgencyInstance",
  props: ['agency'],
  components:{
    agencyEdit
  },
  data: () => {
    return {
      agencies: undefined,
      agencyCount: undefined,
      overlay: false,
      zIndex: 0,
      errorMessage: undefined,
    }
  },
  methods:{
    viewAgency(agencyId){
      router.push('/agencydetails/'+agencyId)
    },
    deleteAgency(agency){
      axios.delete(this.$store.state.serverApi + "/api/agency/"+agency.id)
          .then(() => {this.$router.go(this.$router.currentRoute)})
          .catch(error => {
        this.errorMessage = error.code
      })
    }
  },
}
</script>

<style scoped>

</style>
