<template>
  <v-container>
    <h1>property</h1>
    <v-card
        v-for="property in property"
        :key="property.id"
        max-width="450"
        class="mx-auto"
    >
      <v-card-title>
        {{property.id}}
      </v-card-title>
      <v-card-text>
        {{ property.address }}
        <br>
        {{ property.size }}
        <br>
        {{ property.price }}
      </v-card-text>
    </v-card>
    <v-row justify="center">
      <v-btn
          class="white--text"
          color="teal"
          @click="overlay = !overlay"
      >
        Create property
      </v-btn>

      <v-card>
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >
          <PropertyForm></PropertyForm>

          <v-btn
              class="white--text"
              color="teal"
              @click="overlay = false"
          >
            Hide Overlay
          </v-btn>
        </v-overlay>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import PropertyForm from "@/components/Property/PropertyForm";

export default {
  name: "PropertyList",
  components:{
    PropertyForm
  },
  data:() => {
    return {
      property: undefined,
      overlay: false,
      zIndex: 0,
    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/property").then(
        (x) => {
          this.property = x.data
          this.$store.commit('ADD_TO_PROPERTYLIST', x.data)
        }
    )
  }
}
</script>

<style scoped>

</style>
