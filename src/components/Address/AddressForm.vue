<template>
  <v-card>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field
                v-model="street"
                label="Gata"
            >
            </v-text-field>
            <v-text-field
                v-model="houseNo"
                label="Hús Númer"
            >
            </v-text-field>
            <v-text-field
                v-model="zip"
                label="PóstNúmer"
            >
            </v-text-field>

            <v-btn
                class="mr-4"
                type="submit"
                @click="save()"

            >
              submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>

import axios from "axios";

export default {
  name: "AddressForm",
  data:() => {
    return {
      addresses: Array,
      valid: undefined,
      success: undefined,
      street: "gerplustræti",
      houseNo: 11,
      zip: 270
    }
  },
  methods: {
    save(){
      axios({
        method: "post",
        url: "https://localhost:7210/api/address",
        data: {'street': this.street, 'houseNo': this.houseNo, 'zip': this.zip},
        headers: {'Accept': "*/*"}
      }).then(
          (x) => {
            x.status === 201 ? this.success = true : this.success = false
          }
      )
      console.log("post request to send data to api to save it ")
    }
  },
}
</script>

<style scoped>

</style>
