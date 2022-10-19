<template>
  <v-container>
    <h1>Agencies</h1>
    <v-container
        v-for="agency in agencies"
        :key="agency.id"
    >
      <v-card
          max-width="450"
          class="mx-auto"
          @click="viewAgency(agency.id)"
      >
        <v-card-title>
          {{agency.id}}
          <v-spacer>{{ agency.name }}</v-spacer>
          <v-btn
              type="submit"
              @click="deleteAgency(agency)"
          >
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
          <v-btn
              type="submit"
          >
            <v-icon>
              mdi-pen
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <br>
          Properties: {{ agency.properties }}
        </v-card-text>
      </v-card>
    </v-container>

    <v-row justify="center">
      <v-btn
          class="white&#45;&#45;text"
          color="teal"
          @click="overlay = !overlay"
      >
        Create agency
      </v-btn>

      <v-card>
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >
          <agency-details/>
          <v-btn
              class="white&#45;&#45;text"
              color="teal"
              @click="overlay = false"
          >
            Hide Overlay
          </v-btn>
        </v-overlay>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "AgencyList",
  components: {
  },
  methods:{
    viewAgency(agencyId){
      router.push('/agencydetails/'+agencyId)
    },
    deleteAgency(agency){
      console.log("deleting address with id"+ agency.id)
      axios.delete("https://localhost:7210/api/agency/"+agency.id).then(
          (x) => {
            if(x.status === 200)
              this.deleted = true
          }
      )
    }
  },
  data:() => {
    return {
      agencies: undefined,
      overlay: false,
      zIndex: 0,
    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/agency").then(
        (x) => {
          this.agencies = x.data
        }
    )
  }
}
</script>

<style scoped>

</style>
