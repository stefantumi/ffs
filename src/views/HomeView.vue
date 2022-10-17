<template>
  <div>
    <h1>hello</h1>
    <address-list></address-list>
  </div>
</template>

<script>
// @ is an alias to /src
import addressList from "@/components/Address/AddressList";

export default {
  name: 'HomeView',
  components: {
    addressList
  }
}
</script>
