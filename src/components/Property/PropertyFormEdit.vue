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
    <v-checkbox
        v-model="checkbox"
        label="Do you agree?"
        required
    ></v-checkbox>
    <v-btn
        class="mr-4"
        type="submit"
        @click="editProperty"
    >
      submit
    </v-btn>
    <v-btn @click="this.$refs.form.cleanRaws()">
      clear
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
    agencyId: this.property.agencyId,
    size: this.property.size,
    price: this.property.price,
    addressStreet: this.property.address.street,
    addressHouseNo: this.property.address.houseNo,
    addressZip: this.property.address.zip,
    select: null,
    checkbox: false,

  }),
  mounted(){
    console.log("property edit property details are ", this.property)
  },
  methods: {
    editProperty(){
      let putData = {
        "id": this.property.id,
        "address": {
          "id": this.property.address.id,
          "street": this.addressStreet,
              "houseNo": this.addressHouseNo,
              "zip": this.addressZip
        },
        "agencyId": this.agencyId,
        "size": this.size,
        "price": this.price
      }
      console.log("data beeing sent", putData)
      axios.put(this.$store.state.serverApi + "/api/property/", putData ).then(
          (x) => {
            console.log(x)
          }
      )
    }
  },
}
</script>

