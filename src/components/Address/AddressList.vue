<template>
  <v-card
      max-width="450"
      class="mx-auto"
  >
    {{this.addresses}}
    <v-btn
        @click="getData"
    >
      get
    </v-btn>
<!--    <v-list three-line>
      <template v-for="(address, index) in addresses">
        <v-subheader
            :key="address.street"
            v-text="address.street"
        ></v-subheader>

        <v-divider
            :key="index"
            :inset="address.inset"
        ></v-divider>

        <v-list-item
            :key="address.street"
        >
          <v-list-item-avatar>
            <v-img :src="address.houseNo"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="address.title"></v-list-item-title>
            <v-list-item-subtitle v-html="address.houseNo"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>-->
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "AddressList",
  methods: {
    getData(){
      axios.get("https://localhost:7210/api/addresses").then(
          (x) => {
            this.addresses = x.data
          }
      )
    }
  },
  data: () => {
    return {
      addresses: undefined,
      address: undefined,
    }
  },
  computed(){
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
