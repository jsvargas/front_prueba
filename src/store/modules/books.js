import axios from 'axios'

const state = {
  books: [],
  fullBooks: [],
  reservedBooks: []
}

const getters = {
  getBooks: state => state.books
}

const actions = {
  getBooks: async function ({ commit }) {
    axios.get('/getBooks')
      .then(res => {
        commit('fillBooks', res.data.rows)
      })
      .catch(err => {
        alert('Error consultando')
      })
  },
  getFullBooks: async function ({ commit }) {
    axios.get('/getFullBooks')
      .then(res => {
        commit('fillFullBooks', res.data.rows)
      })
      .catch(err => {
        alert('Error consultando')
      })
  },
  reserveBook: async function ({ commit }, payload) {
    axios.post('/reserveBook', payload)
      .then(res => {
        alert('Libro reservado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Error consultando API')
        alert('Inicie sesión para continuar')
      })
  },
  getReservedBooks: async function ({ commit }) {
    axios.get('/getReservedBooks')
      .then(res => {
        commit('fillReservedBooks', res.data.rows)
      })
      .catch(err => {
        alert('Error consultando API')
        alert('Datos inválidos')
      })
  },
  returnBook: async function ({ commit }, payload) {
    axios.post('/returnBook', payload)
      .then(res => {
        alert('Libro devuelto con éxito')
        this.dispatch('getReservedBooks')
      })
      .catch(err => {
        alert('Error consultando API')
        alert('Datos inválidos')
      })
  },
  addBook: async function ({ commit }, payload) {
    axios.post('/addBook', payload)
      .then(res => {
        alert('Libro agregado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Error consultando API')
        alert('Datos inválidos')
      })
  },
  editBook: async function ({ commit }, payload) {
    axios.post('/editBook', payload)
      .then(res => {
        alert('Libro editado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Error consultando API')
        alert('Datos inválidos')
      })
  },
  deleteBook: async function ({ commit }, payload) {
    axios.post('/deleteBook', payload)
      .then(res => {
        alert('Libro eliminado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Error consultando API')
        alert('Datos inválidos')
      })
  }
}

const mutations = {
  fillBooks (state, nbooks) {
    state.books = nbooks
  },
  fillFullBooks (state, nbooks) {
    state.fullBooks = nbooks
  },
  fillReservedBooks (state, nbooks) {
    state.reservedBooks = nbooks
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
