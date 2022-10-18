<template>
  <v-card>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field
                v-model="agencyName"
                label="Nafn Sölu"
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
  name: "AgencyForm",
  data:() => {
    return {
      postFailed: false,
      postSuccess: false,
      agencyName: undefined,
      valid: undefined,
      agency: {
      },
    }
  },
  methods:{
    save(){
      axios({
        method: "post",
        url: "https://localhost:7210/api/agency",
        data: {'name': this.agencyName},
        headers: {'Accept': "*/*"}
      }).then(
          (x) => {
            x.status === 201 ? this.success = true : this.success = false
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
