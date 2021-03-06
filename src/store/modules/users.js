import axios from 'axios'

const state = {
  users: []
}

const getters = {}

const actions = {
  getUsers: async function ({ commit }) {
    axios.get('/getUsers')
      .then(res => {
        commit('fillUsers', res.data.rows)
      })
      .catch(err => {
        alert('Error consultando API', err)
      })
  },
  deleteUser: async function ({ commit }, payload) {
    axios.post('/deleteUser', payload)
      .then(res => {
        this.dispatch('getUsers')
      })
      .catch(err => {
        alert('Datos inválidos', err)
      })
  },
  editUser: async function ({ commit }, payload) {
    axios.post('/editUser', payload)
      .then(res => {
        alert('Usuario Actualizado')
      })
      .catch(err => {
        alert('Datos inválidos', err)
      })
  }
}

const mutations = {
  fillUsers (state, nusers) {
    state.users = nusers
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
