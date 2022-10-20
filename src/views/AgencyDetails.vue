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
  </div>
</template>

<script>
import axios from "axios";
/*import PropertyEdit from "@/components/Property/PropertyEdit";*/
/*import PropertyCreate from "@/components/Property/PropertyCreate";*/
import PropertyInstance from "@/components/Property/PropertyInstance";

export default {
  name: "AgencyDetails",
  components: {
    PropertyInstance
  },
  props: ['agencyId'],
  data: () => {
    return {
      agency: undefined,
      properties: undefined,
      addresses: [],
      loading: true,

    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/agency/"+this.$route.params.agencyId).then(
        (x) => {
          console.log(x.data)
          this.agency = x.data
          this.properties = x.data.properties
        }
    );

  }
}
</script>

<style scoped>

</style>
