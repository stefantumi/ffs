<template>
  <form>
    <v-text-field
        v-model="name"
        label="Nafn"
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
  </form>
</template>
<script>


import axios from "axios";

export default {
  name: "AgencyEdit",
  props: ['agency'],
  data: () => ({
    id: this.agency.id,
    name: this.agency.name,
    select: null,
    checkbox: false,
  }),
  methods: {
    editAgency(){
      console.log("agency hér", this.agency.id, this.name)
      axios.put(this.$store.state.serverApi + "/api/agency/", {id : this.agency.id, name: this.name})
    }
  },
}
</script>

