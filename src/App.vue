<template>
    <v-app id="app">
      <nav>
        <v-app-bar absolute>
          <v-app-bar-title>Agency Manager</v-app-bar-title>
           <v-container>
             <router-link to="/"> Home </router-link>  |
             <router-link to="/about"> About </router-link>
           </v-container>

          <v-switch
              class="float-end"
              v-model="$vuetify.theme.dark"
              :hint="$vuetify.theme.dark? 'Dark mode':'Light mode'"
              inset
              label="Theme"
              persistent-hint
          ></v-switch>

        </v-app-bar>
      </nav>
      <router-view/>
    </v-app>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
}
</script>
