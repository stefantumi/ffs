<template>
  <v-form v-model="valid" lazy-validation ref="form">
    <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="20"
        label="Nafn sölu"
        required
    ></v-text-field>
    <v-btn
        class="mr-4"
        type="submit"
        @click="editAgency"
    >
      submit
    </v-btn>
    <v-btn>
      clear
    </v-btn>
  </v-form>
</template>
<script>


import axios from "axios";

export default {
  name: "AgencyFormEdit",
  props: ['agency'],
  data: () => ({
    valid: false,
    id: this.agency.id,
    name: this.agency.name,
    select: null,
    checkbox: false,
    nameRules: [
      v => !!v || 'Vantar upplýsingar',
      v => v.length <= 20 || 'Mest 20 stafir leyfðir'
    ]
  }),
  methods: {
    editAgency(){
      axios.put(this.$store.state.serverApi + "/api/agency/", {id : this.agency.id, name: this.name})
    }
  },
}
</script>

