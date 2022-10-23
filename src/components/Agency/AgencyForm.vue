<template>
    <v-form
        v-model="valid"
        ref="form"
        lazy-validation
    >
        <v-text-field
            v-model="agencyName"
            :rules="nameRules"
            counter="20"
            label="Nafn Sölu"
            required
        >
        </v-text-field>
        <v-btn
            class="mr-4"
            type="submit"
            @click="save"
        >
          Skrá
        </v-btn>
    </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "AgencyForm",
  props:['agencyId'],
  data:() => {
    return {
      postFailed: false,
      postSuccess: false,
      agencyName: undefined,
      valid: false,
      nameRules: [
          v => !!v || 'Vantar upplýsingar',
          v => v.length <= 20 || 'Mest 20 stafir leyfðir'
      ]
    }
  },
  methods:{
    save(){
      axios({
        method: "post",
        url: this.$store.state.serverApi + "/api/agency",
        data: {'name': this.agencyName},
        headers: {'Accept': "*/*"}
      }).then(
          (x) => {
            x.status === 201 ? this.success = true : this.success = false
          }
      )
    },
    updateAgency(agencyId, agencyName){
      axios({
        method: "post",
        url: this.$store.state.serverApi + "/api/agency/"+agencyId,
        data: {'name': agencyName},
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
