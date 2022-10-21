<template>
  <div align="center">
    <h1>Agencies</h1>
    <v-container
        v-for="agency in agencies"
        :key="agency.id"
    >
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
               color="red"
               type="submit"
               @click="deleteAgency(agency)"
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
           <agency-form/>
           <v-btn
               class="white&#45;&#45;text"
               color="teal"
               @click="overlay = false"
           >
             Hide Overlay
           </v-btn>
         </v-overlay>
       </v-card-actions>
      </v-card>
    </v-container>
    <v-row justify="center">
    </v-row>
    <v-btn
        right
        bottom
        fab
        class="ma-3 pa-3"
        color="teal"
        @click="overlay = !overlay"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>

</template>

<script>
import axios from "axios";
import router from "@/router";
import AgencyForm from "@/components/Agency/AgencyForm";

export default {
  name: "AgencyList",
  components: {
    AgencyForm
  },
  data:() => {
    return {
      agencies: undefined,
      overlay: false,
      loading: true,
      zIndex: 0,
    }
  },
  methods:{
    viewAgency(agencyId){
      router.push('/agencydetails/'+agencyId)
    },
    deleteAgency(agency){
      console.log("deleting address with id"+ agency.id)
      axios.delete(this.$store.state.serverApi + "/api/agency/"+agency.id).then(
          (x) => {
            if(x.status === 200)
              this.deleted = true
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
