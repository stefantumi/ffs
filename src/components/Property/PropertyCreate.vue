<template>
  <v-card
      class="pa-3 ma-3"
  >
    <form>
      <v-text-field
          v-model="size"
          :counter="10"
          label="Stærð"
          required
      ></v-text-field>
      <v-text-field
          v-model="price"
          :counter="10"
          label="Verð"
          required
      ></v-text-field>
      <v-text-field
          v-model="addressStreet"
          :counter="10"
          label="Götuheiti"
          required
      ></v-text-field>
      <v-text-field
          v-model="addressHouseNo"
          :counter="3"
          label="húsnúmer"
          required
      ></v-text-field>
      <v-text-field
          v-model="addressZip"
          counter="3"
          label="póstnúmer"
          required
      ></v-text-field>
      <v-checkbox
          v-model="checkbox"
          label="Do you agree?"
          required
      ></v-checkbox>
      <v-btn
          class="mr-4"
          type="submit"
          @click="createProperty"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </v-card>
</template>
<script>


import axios from "axios";

export default {
  name: "PropertyCreate",
  props: ['agencyId'],
  data: () => ({
    size: 0,
    price: 0,
    addressStreet: "",
    addressHouseNo: 0,
    addressZip: 0,
    select: null,
    checkbox: false,

  }),

  methods: {
    createProperty(){
      let postData = {
        "address": {
          "street": this.addressStreet,
              "houseNo": this.addressHouseNo,
              "zip": this.addressZip
        },
        "agencyId": this.agencyId,
            "size": this.size,
            "price": this.price
      }
      console.log("data beeing sent", postData)
      axios.post(this.$store.state.serverApi + "/api/property/", postData ).then(
          (x) => {
            console.log(x)
          }
      )
    }
  },
}
</script>

