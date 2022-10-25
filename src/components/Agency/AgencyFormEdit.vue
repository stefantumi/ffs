<template>
  <v-form lazy-validation ref="form">
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
    id: undefined,
    name: undefined,
    select: null,
    checkbox: false,
    nameRules: [
      v => !!v || 'Nafn má ekki vera tómt',
      v => v.length <= 20 || 'Mest 20 stafir leyfðir'
    ]
  }),
  mounted() {
    this.id = this.agency.id
    this.name = this.agency.name
  },
  methods: {
    editAgency(){
      axios.put(this.$store.state.serverApi + "/api/agency/", {id : this.agency.id, name: this.name})
    }
  },
}
</script>

