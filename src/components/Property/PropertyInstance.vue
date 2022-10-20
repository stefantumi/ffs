<template>
<div>
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
    <v-card-actions>
      <v-btn
          class="white--text"
          color="teal"
          @click="overlay = !overlay"
      >
        edit
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-row justify="center">
    <v-overlay
        :z-index="property.id"
        :value="overlay"
    >
      <!--          <PropertyEdit :property-id="property.id"/>-->
      <v-btn
          class="white--text"
          color="teal"
          @click="overlay = false"
      >
        Hide Overlay
      </v-btn>
    </v-overlay>
  </v-row>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "PropertyInstance",
  props: ['property'],
  data: () => {
    return{
      addresses: [],
      properties: undefined,
      overlay: false,
      zIndex: 0,
    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/address").then(
        (x) => {
          for (let i = 0; i < x.data.length; i++) {
            this.addresses.push(x.data[i].street + '' + x.data[i].houseNo)
          }
        }
    )
  }
}
</script>

<style scoped>

</style>
