<template>
  <form>
    <v-text-field
        v-model="size"
        :counter="10"
        label="Stærð"
        required
    ></v-text-field>
    <v-text-field
        v-model="price"
        :counter="10"
        label="Verð"
        required
    ></v-text-field>
    <v-text-field
        v-model="addressStreet"
        :counter="10"
        label="Götuheiti"
        required
    ></v-text-field>
    <v-text-field
        v-model="addressHouseNo"
        :counter="3"
        label="húsnúmer"
        required
    ></v-text-field>
    <v-text-field
        v-model="addressZip"
        counter="3"
        label="póstnúmer"
        required
    ></v-text-field>
    <v-checkbox
        v-model="checkbox"
        label="Do you agree?"
        required
    ></v-checkbox>
    <v-btn
        class="mr-4"
        @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>
<script>


export default {
  name: "PropertyCreate",
  validations: {
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    size: 0,
    price: 0,
    addressStreet: "",
    addressHouseNo: 0,
    addressZip: 0,
    select: null,
    checkbox: false,
  }),

  methods: {
  },
}
</script>

