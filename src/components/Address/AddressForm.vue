<template>
  <v-form v-model="address.valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" >
          <v-text-field
              :v-model="address.street"
              label="Gata"
          >
          </v-text-field>
          <v-text-field
              :v-model="address.houseNo"
              label="Hús Númer"
          >
          </v-text-field>
          <v-text-field
              :v-model="address.zip"
              label="PóstNúmer"
          >
          </v-text-field>
          <v-btn
              class="mr-4"
              type="submit"
          >
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
  name: "AddressForm",
  data:() => {
    return {
      addresses: Array,
      address: {
        valid: undefined,
        id: Number,
        street: String,
        houseNo: Number,
        zip: Number
      },
    }
  },
  methods: {
    submit(){
      console.log("post request to send data to api to save it ")
    }
  },
}
</script>

<style scoped>

</style>
