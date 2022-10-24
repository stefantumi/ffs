<template>
  <div
      align="center"
  >
    <h1>{{agency.name}}</h1>
    <v-container>
      <v-card v-if="properties.length < 1" class="ma-3 pa-3" max-width="450">
        <v-card-title>
          Skráðu fyrstu eignina
        </v-card-title>
        <PropertyCreate :agency-id="agency.id"/>
      </v-card>
    </v-container>
    <v-container
        v-for="(property, index) in properties"
        :key="index"
    >
      <PropertyInstance :property="property" />
    </v-container>
    <v-btn v-btn fab right bottom absolute class="ma-3 mb-10 pa-3" color="teal" @click="overlay =! overlay"
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
        <PropertyCreate :agency-id="agency.id"/>
      </v-card>
      <v-btn
          color="success"
          @click="overlay = false"
      >
        Loka
      </v-btn>
    </v-overlay>
  </div>
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
      agency: undefined,
      properties: undefined,
      addresses: [],
      loading: true,
    }
  },
  mounted() {
    axios.get(this.$store.state.serverApi + "/api/agency/"+this.$route.params.agencyId, {verify: false}).then(
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
