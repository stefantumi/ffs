<template>
  <v-card>
    <v-form v-model="property.valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" >
            <v-text-field
                :v-model="property.size"
                label="Stærð fm"
            >
            </v-text-field>
            <v-text-field
                :v-model="property.price"
                label="Verð"
            >
            </v-text-field>
            <v-btn
                class="mr-4"
                type="submit"
            >
              submit
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "PropertyForm",
  data:() => {
    return {
      addresses: Array,
      property: {
        valid: undefined,
        id: Number,
        street: String,
        houseNo: Number,
        zip: Number
      },
    }
  },
}
</script>

<style scoped>

</style>
