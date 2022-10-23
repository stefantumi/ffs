<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="localProperty.size"
              :rules="nameRules"
              :counter="10"
              label="size"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="localProperty.price"
              :rules="nameRules"
              :counter="10"
              label="pirce"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "PropertyEdit",
  props: ['propertyId'],
  data: () => {
    return {
      valid: false,
      localProperty: undefined,
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
    axios.get(this.$store.state.serverApi + "/api/property/"+this.propertyId).then(
        (x) => {
          this.localProperty = x.data
        }
    )
  }
}
</script>

<style scoped>

</style>
