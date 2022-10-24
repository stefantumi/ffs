import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverApi: "https://localhost:7210",
    addresses: [],
    agencies: undefined,
    properties: undefined,
    darkMode: false,
  },
  getters: {
    getAddressList: (state) => state.addresses,
    getAgencyList: (state) => state.agencies,
    getPropertyList: (state) => state.properties,
    getThemeMode: (state) => state.darkMode
  },
  mutations: {
    SWITCH_THEME(state){
      state.darkMode.push(!state.darkMode)
    },
    ADD_TO_PROPERTY_LIST(state, payload){
      state.properties.push(payload)
    }
  },
  actions: {
    switchTheme({commit}){
      commit('SWITCH_THEME')
    },
    setProperties({commit}){
      commit('ADD_TO_PROPERTY_LIST')
    }
  },
  modules: {
  }
})
