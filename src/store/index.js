import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serverApi: "https://localhost:7210/",
    addresses: [],
    agencies: undefined,
    properties: undefined,
  },
  getters: {
    getAddressList: (state) => state.addresses,
    getAgencyList: (state) => state.agencies,
    getPropertyList: (state) => state.properties,

  },
  mutations: {
    ADD_TO_ADDRESSLIST(state, payload){
      state.addresses.push(payload)
    },
    ADD_TO_AGENCYLIST(state, payload){
      state.agencies.push(payload)
    },
    ADD_TO_PROPERTY_LIST(state, payload){
      state.properties.push(payload)
    }
  },
  actions: {
    setAddresses({commit}, payload){
      commit('ADD_TO_ADDRESSLIST', payload)
    },
    setAgencies({commit}, payload){
      commit('ADD_TO_AGENCYLIST', payload)
    },
    setProperties({commit}, payload){
      commit('ADD_TO_PROPERTY_LIST', payload)
    }
  },
  modules: {
  }
})
