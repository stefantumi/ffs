<template>
  <v-form v-model="valid" lazy-validation ref="form">
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
    <v-btn
        class="mr-4"
        type="submit"
        @click="createProperty"
    >
      submit
    </v-btn>
  </v-form>
</template>
<script>


import axios from "axios";

export default {
  name: "PropertyForm",
  props: ['agencyId'],
  data: () => ({
    valid: true,
    size: 0,
    price: 0,
    addressStreet: "",
    addressHouseNo: 0,
    addressZip: 0,
    select: null,
  }),
  mounted() {
    console.log(this.agencyId)
  },
  methods: {
    createProperty(){
      let postData = {
        address: {
          street: this.addressStreet,
          houseNo: this.addressHouseNo,
          zip: this.addressZip
        },
        agencyId: this.agencyId,
        size: this.size,
        price: this.price
      }
      console.log(postData)
      axios.post(this.$store.state.serverApi + "/api/property/", postData )
    }
  },
}
</script>

