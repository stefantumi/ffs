<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="localAgency.name"
              :rules="nameRules"
              :counter="10"
              label="Nafn"
              required
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            md="4"
        >
          <v-col cols="6">
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "AgencyEdit",
  props: ['agencyId'],
  data: () => {
    return {
      valid: false,
      localAgency: undefined,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  mounted(){
    axios.get("https://localhost:7210/api/agency/"+this.agencyId).then(
        (x) => {
          this.localAgency = x.data
        }
    )
  }
}
</script>

<style scoped>

</style>
