<template>
<v-container>
  <v-card
      max-width="450"
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

      <v-icon
          color="primary"
          @click="overlay =! overlay"
          type="submit"
      >
        mdi-pen
      </v-icon>
      <v-spacer></v-spacer>
      <v-icon
          v-bind:loading="deleteLoading"
          @click="deleteProperty(property.id)"
          color="red"
          type="submit"
      >
        mdi-delete
      </v-icon>
    </v-card-actions>
    <v-overlay
        opacity="1"
        :value="overlay"
    >
      <v-card class="pa-3 ma-3">
        <v-card-title>
          Breyta Eign
        </v-card-title>
        <PropertyEdit :property="property"/>
      </v-card>
      <v-btn
          color="success"
          @click="overlay = false"
      >
        Loka
      </v-btn>
    </v-overlay>
  </v-card>
</v-container>
</template>

<script>
import axios from "axios";
import PropertyEdit from "@/components/Property/PropertyFormEdit";

export default {
  name: "PropertyInstance",
  components: {PropertyEdit},
  props: ['property'],
  data: () => {
    return{
      overlay: false,
      deleteError: undefined,
      deleteLoading: false,
      streets: [],
    }
  },
  beforeMount() {
    axios.get(this.$store.state.serverApi + "/api/address").then(
        (x) => {
          this.addresses = x.data
          for (let i = 0; i < x.data.length; i++) {
            this.streets.push(x.data[i].street)
          }
        }
    )
  },
  methods: {
    deleteProperty(propertyId){
      this.deleteLoading = true
      axios.delete(this.$store.state.serverApi + "/api/property/" + propertyId).then(
          (x) => {
            if (x.status === 200 || x.status === 201){
              this.deleteLoading = false
            }else if (x.status === 404){
              this.deleteError = "Failed"
            }
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
