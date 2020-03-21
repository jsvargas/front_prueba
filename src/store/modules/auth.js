import axios from 'axios'

const state = {
  token: localStorage.getItem('user-token') || '',
  username: localStorage.getItem('username') || '',
  type: localStorage.getItem('type') || null,
  status: localStorage.getItem('user-token') || false
}

const getters = {
  isAuthenticated: state => !!state.token,
  typeAuthenticated: state => state.type,
  authStatus: state => state.status
}

const actions = {
  login: async function ({ commit }, payload) {
    axios.post('/login', payload)
      .then(res => {
        commit('authSuccess', res)
      })
      .catch(err => {
        alert('Datos inválidos. Ingreso Fallido')
      })
  },

  logout: async function ({ commit }) {
    commit('logout')
  },

  register: async function ({ commit }, payload) {
    axios.post('/register', payload)
      .then(res => {
        alert('Usuario registrado con éxito')
      })
      .catch(err => {
        alert('Datos inválidos')
      })
  }
}

const mutations = {
  authSuccess: (state, res) => {
    state.status = true
    state.token = res.data.token
    state.username = res.data.username
    state.type = res.data.usuario.type
    localStorage.setItem('user-token', res.data.token)
    localStorage.setItem('username', res.data.usuario.username)
    localStorage.setItem('type', res.data.usuario.type)
    axios.defaults.headers.common.Authorization = 'Bearer ' + res.data.token
  },
  logout: (state) => {
    state.status = false
    state.token = null
    state.username = null
    state.type = null
    localStorage.removeItem('user-token')
    localStorage.removeItem('username')
    localStorage.removeItem('type')
    axios.defaults.headers.common.Authorization = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
