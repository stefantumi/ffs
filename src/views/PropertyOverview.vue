<template>
  <v-container>
    <h1>{{agencyName}}</h1>
    <v-container>
      <v-card v-if="propertyCount < 1" class="ma-3 pa-3" max-width="450">
        <v-card-title>
          Skráðu fyrstu eignina
        </v-card-title>
        <PropertyCreate :agency-id="id"/>
      </v-card>
    </v-container>
    <v-container
        v-for="(property, index) in properties"
        :key="index"
    >
      <PropertyInstance :property="property" />
    </v-container>
    <v-btn fab right bottom absolute class="ma-3 mb-10 pa-3" color="teal" @click="overlay =! overlay"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-overlay
        opacity="1"
        :value="overlay"
    >
      <v-card class="ma-3 pa-3">
        <v-card-title>
          Ný eign
        </v-card-title>
        <PropertyCreate :agency-id="id"/>
      </v-card>
      <v-btn
          color="success"
          @click="overlay = false"
      >
        Loka
      </v-btn>
    </v-overlay>
  </v-container>
</template>

<script>
import axios from "axios";
import PropertyInstance from "@/components/Property/PropertyInstance";
import PropertyCreate from "@/components/Property/PropertyForm";

export default {
  name: "PropertyOverview",
  components: {
    PropertyInstance,
    PropertyCreate
  },
  props: ['agencyId'],
  data: () => {
    return {
      overlay: false,
      agencyName: undefined,
      propertyCount: undefined,
      id: undefined,
      agency: undefined,
      properties: undefined,
      addresses: [],
      loading: true,
    }
  },
  mounted() {
    axios.get(this.$store.state.serverApi + "/api/agency/"+this.$route.params.agencyId).then(
        (x) => {

          this.agency = x.data
          this.id = this.agency.id
          this.agencyName = x.data.name
          this.properties = x.data.properties
          this.propertyCount = x.data.properties.length
        }
    );
  },
}
</script>

<style scoped>

</style>
