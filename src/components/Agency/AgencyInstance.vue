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
          @click="viewAgency(agency.id)"
      >
        mdi-magnify
      </v-icon>
      <v-spacer>
        <v-icon
            type="submit"
            @click="deleteAgency(agency)"
            :loading="loading"
            :disabled="loading"
            fab
        >
          mdi-delete
        </v-icon>
      </v-spacer>
      <v-icon
          type="submit"
          @click="overlay =! overlay"
      >
        mdi-pen
      </v-icon>
      <v-overlay
          opacity="1"
          :z-index="agency.id"
          :value="overlay"
      >
        <agency-edit :agency="agency"/>
        <v-btn
            @click="overlay = false"
        >
          Hide Overlay
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
}
</script>

<style scoped>

</style>
