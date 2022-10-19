<template>
  <div>
    <h1>{{agency.name}}</h1>
    <v-container
        v-for="(property, index) in properties"
        :key="index"
    >
      <v-card>
        <v-card-title>
          {{ property.id }}
          <v-spacer>
            {{ property.address.street }}
            {{ property.address.houseNo }}
          </v-spacer>
          <v-btn
              class="white--text"
              color="teal"
              @click="overlay = !overlay"
          >
            edit
          </v-btn>
        </v-card-title>
        Size: {{ property.size }} FM<br>
        Price: {{ property.price }}<br>
      </v-card>
      <v-row justify="center">
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >
          <PropertyEdit :property-id="property.id"/>
          <v-btn
              class="white--text"
              color="teal"
              @click="overlay = false"
          >
            Hide Overlay
          </v-btn>
        </v-overlay>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import PropertyEdit from "@/components/Property/PropertyEdit";

export default {
  name: "AgencyDetails",
  components: {
    PropertyEdit
  },
  props: ['agencyId'],
  data: () => {
    return {
      agency: undefined,
      properties: undefined,
      addresses: [],
      loading: true,
      overlay: false,
      zIndex: 0,
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
