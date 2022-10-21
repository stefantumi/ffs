<template>
<v-container>
  <v-card
      max-width="600"
  >
    <v-card-title>
      {{ property.id }}
      <v-spacer>
        {{ property.address.street }}
        {{ property.address.houseNo }}
      </v-spacer>
    </v-card-title>
    <v-card-text>
      Size: {{ property.size }} FM<br>
      Price: {{ property.price }}<br>
    </v-card-text>
  </v-card>
</v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "PropertyInstance",
  props: ['property'],
  data: () => {
    return{
      addresses: [],
      streets: [],
      properties: undefined,
    }
  },
  beforeMount() {
    axios.get(this.$store.state.serverApi + "/api/address").then(
        (x) => {
          this.addresses = x.data
          for (let i = 0; i < x.data.length; i++) {
            this.streets.push(x.data[i].street)
          }
          console.log(this.streets)
        }
    )
  },
/*  mounted() {
    axios.get(this.$store.state.serverApi + "/api/address").then(
        (x) => {
          this.addresses = x.data
          for (let i = 0; i < x.data.length; i++) {
            this.streets.push(x.data[i].street)
          }
          console.log(this.streets)
        }
    )
  }*/
}
</script>

<style scoped>

</style>
