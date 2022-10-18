<template>
  <v-container>
    <h1>Address</h1>
    <v-card
        v-for="address in addresses"
        :key="address.id"
        max-width="450"
        class="mx-auto"
    >
      <v-card-title>
        {{address.id}}
        <v-spacer></v-spacer>
        <v-btn
            type="submit"
            @click="deleteAddress(address)"
        >
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        Street: {{ address.street }}{{addresses.houseNo}}
        <br>
        Post Code: {{ address.zip}}
      </v-card-text>
    </v-card>

    <v-row justify="center">
      <v-btn
          class="white--text"
          color="teal"
          @click="overlay = !overlay"
      >
        Create Address
      </v-btn>

      <v-card>
        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >
          <address-form></address-form>

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
import AddressForm from "@/components/Address/AddressForm";

export default {
  name: "AddressList",
  components:{
    AddressForm
  },
  methods: {
    deleteAddress(address){
      console.log("deleting address with id"+ address.id)
      axios.delete("https://localhost:7210/api/address/"+address.id).then(
          (x) => {
            if(x.status === 200)
            this.deleted = true
          }
      )
    }
  },
  data: () => {
    return {
      addresses: undefined,
      overlay: false,
      zIndex: 0,
      deleted: false
    }
  },
  mounted() {
    axios.get("https://localhost:7210/api/address").then(
        (x) => {
          this.addresses = x.data
          this.$store.commit('ADD_TO_ADDRESSLIST', x.data)
        }
    )
  }
}
</script>

<style scoped>

</style>
