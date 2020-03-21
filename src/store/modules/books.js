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
        alert('Error consultando', err)
      })
  },
  getFullBooks: async function ({ commit }) {
    axios.get('/getFullBooks')
      .then(res => {
        commit('fillFullBooks', res.data.rows)
      })
      .catch(err => {
        alert('Error consultando', err)
      })
  },
  reserveBook: async function ({ commit }, payload) {
    axios.post('/reserveBook', payload)
      .then(res => {
        alert('Libro reservado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Inicie sesión para continuar', err)
      })
  },
  getReservedBooks: async function ({ commit }) {
    axios.get('/getReservedBooks')
      .then(res => {
        commit('fillReservedBooks', res.data.rows)
      })
      .catch(err => {
        alert('Datos inválidos', err)
      })
  },
  returnBook: async function ({ commit }, payload) {
    axios.post('/returnBook', payload)
      .then(res => {
        alert('Libro devuelto con éxito')
        this.dispatch('getReservedBooks')
      })
      .catch(err => {
        alert('Datos inválidos', err)
      })
  },
  addBook: async function ({ commit }, payload) {
    axios.post('/addBook', payload)
      .then(res => {
        alert('Libro agregado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Datos inválidos', err)
      })
  },
  editBook: async function ({ commit }, payload) {
    axios.post('/editBook', payload)
      .then(res => {
        alert('Libro editado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Datos inválidos', err)
      })
  },
  deleteBook: async function ({ commit }, payload) {
    axios.post('/deleteBook', payload)
      .then(res => {
        alert('Libro eliminado con éxito')
        this.dispatch('getBooks')
      })
      .catch(err => {
        alert('Datos inválidos', err)
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
