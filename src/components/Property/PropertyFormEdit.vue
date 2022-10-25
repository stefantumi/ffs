<template>
  <v-form v-model="valid" lazy-validation ref="form">
    <v-text-field
        v-model="size"
        label="Stærð m2"
        required
    ></v-text-field>
    <v-text-field
        v-model="price"
        label="Verð"
        required
    ></v-text-field>
    <v-text-field
        v-model="addressStreet"
        :counter="30"
        label="Götuheiti"
        required
    ></v-text-field>
    <v-text-field
        v-model="addressHouseNo"
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
        @click="editProperty"
    >
      submit
    </v-btn>
  </v-form>

</template>
<script>


import axios from "axios";

export default {
  name: "PropertyFormEdit",
  props: ['property'],
  data: () => ({
    valid:false,
    agencyId: undefined,
    size: undefined,
    price: undefined,
    addressStreet: undefined,
    addressHouseNo: undefined,
    addressZip: undefined,
    select: null,
  }),
  mounted() {
    this.agencyId = this.property.agencyId
    this.size = this.property.size
    this.price = this.property.price
    this.addressStreet = this.property.address.street
    this.addressHouseNo = this.property.address.houseNo
    this.addressZip = this.property.address.zip
  },
  methods: {
    editProperty(){
      let putData = {
        id: this.property.id,
        address: {
          id: this.property.address.id,
          street: this.addressStreet,
          houseNo: this.addressHouseNo,
          zip: this.addressZip
        },
        agencyId: this.agencyId,
        size: this.size,
        price: this.price
      }
      axios.put(this.$store.state.serverApi + "/api/property/", putData )
    }
  },
}
</script>

