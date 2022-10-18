<template>
  <v-card>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field
                v-model="size"
                label="Stærð fm"
            >
            </v-text-field>
            <v-text-field
                v-model="price"
                label="Verð"
            >
            </v-text-field>
            <v-btn
                class="mr-4"
                type="submit"
                @click="save"
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
  name: "PropertyForm",
  data:() => {
    return {
      addresses: Array,
      valid: undefined,
      size: 0,
      price: 0,
    }
  },
  methods:{
    save(){
      axios({
        method: "post",
        url: "https://localhost:7210/api/property",
        data: {'size': this.size, 'price': this.price, },
        headers: {'Accept': "*/*"}
      }).then(
          (x) => {
            x.status === 201 ? this.success = true : this.success = false
          }
      )
      console.log("post request to send data to api to save it ")
    }
  }
}
</script>

<style scoped>

</style>
