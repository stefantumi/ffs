<template>
  <div
      align="center"
  >
    <h1>{{agency.name}}</h1>
    <v-container
        v-for="(property, index) in properties"
        :key="index"
    >
      <PropertyInstance :property="property" />
    </v-container>
    <v-btn
        fab
        outlined
        @click="overlay =! overlay"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-overlay
        :value="overlay"
    >
      <PropertyCreate/>
      <v-btn
          color="success"
          @click="overlay = false"
      >
        Hide Overlay
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
import axios from "axios";
import PropertyInstance from "@/components/Property/PropertyInstance";
import PropertyCreate from "@/components/Property/PropertyCreate";

export default {
  name: "AgencyDetails",
  components: {
    PropertyInstance,
    PropertyCreate
  },
  props: ['agencyId'],
  data: () => {
    return {
      overlay: false,
      agency: undefined,
      properties: undefined,
      addresses: [],
      loading: true,
    }
  },
  beforeMount() {
    axios.get(this.$store.state.serverApi + "/api/agency/"+this.$route.params.agencyId).then(
        (x) => {
          this.agency = x.data
          this.properties = x.data.properties
        }
    );

  }
}
</script>

<style scoped>

</style>
