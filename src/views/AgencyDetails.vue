<template>
  <div>
    <v-container
        v-for="(property, index) in properties"
        :key="index"
    >
      <v-card>
        {{property}}
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AgencyDetails",
  props: ['agencyId'],
  data: () => {
    return {
      properties: undefined,
    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/agency/"+this.agencyId).then(
        (x) => {
          if(x.status in [200, 201]){
            this.properties = x.data.properties
          }
        }
    )
  }
}
</script>

<style scoped>

</style>
