<template>
  <div>
    <v-row>
      <v-col>
        <address-list></address-list>
      </v-col>
      <v-col>
        <agency-list></agency-list>
      </v-col>
      <v-col>
        <property-list></property-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import addressList from "@/components/Address/AddressList";
import agencyList from "@/components/Agency/AgencyList";
import propertyList from "@/components/Property/PropertyList";

export default {
  name: 'HomeView',
  components: {
    addressList,
    agencyList,
    propertyList
  }
}
</script>
