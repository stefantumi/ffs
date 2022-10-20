<template>
  <div align="center">
    <agency-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import agencyList from "@/components/Agency/AgencyList";

export default {
  name: 'HomeView',
  components: {
    agencyList,
  },
  data:() => {
    return {
      loading: false
    }
  }
}
</script>
