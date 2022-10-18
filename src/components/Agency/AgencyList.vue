<template>
  <v-container>
    <h1>Agency</h1>
    <v-card
        v-for="agency in agencies"
        :key="agency.id"
        max-width="450"
        class="mx-auto"
    >
      <v-card-title>
        {{agency.id}}
      </v-card-title>
      <v-card-text>
        {{ agency.name }}
        <br>
        {{ agency.properties}}
      </v-card-text>
    </v-card>
    <v-row justify="center">
      <v-btn
          class="white--text"
          color="teal"
          @click="overlay = !overlay"
      >
        Create agency
      </v-btn>

      <v-card>
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >
          <agency-form></agency-form>
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
import agencyForm from "@/components/Agency/AgencyForm";

export default {
  name: "AgencyList",
  components: {
    agencyForm
  },

  data:() => {
    return {
      agencies: undefined,
      overlay: false,
      zIndex: 0,
    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/agency").then(
        (x) => {
          this.agencies = x.data
        }
    )
  }
}
</script>

<style scoped>

</style>
