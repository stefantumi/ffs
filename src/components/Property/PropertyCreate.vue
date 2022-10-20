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
    <v-select
        v-model="select"
        :items="items"
        label="Item"
        required
    ></v-select>
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
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = 0
      this.email = 0
      this.select = null
      this.checkbox = false
    },
  },
}
</script>

