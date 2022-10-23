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
      <v-icon
          v-bind:loading="deleteLoading"
          @click="deleteProperty(property.id)"
          color="danger"
          type="submit"
      >
        mdi-delete
      </v-icon>
      <v-btn>
        <v-icon
            @click="overlay =! overlay"
            type="submit"
        >
          mdi-pen
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      Size: {{ property.size }} FM<br>
      Price: {{ property.price }}<br>
    </v-card-text>
    <v-overlay
        :value="overlay"
    >
      <PropertyEdit :property="property"/>
      <v-btn
          color="success"
          @click="overlay = false"
      >
        Hide Overlay
      </v-btn>
    </v-overlay>
  </v-card>
</v-container>
</template>

<script>
import axios from "axios";
import PropertyEdit from "@/components/Property/PropertyEdit";

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
