<template>
  <div>
    <v-card
        class="ma-6"
        align="center"
        width="800"
    color="blue"
    >
      <agency-list/>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import agencyList from "@/components/Agency/AgencyList";

export default {
  name: 'HomeView',
  components: {
    agencyList,
  }
}
</script>
