<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Autor</th>
          <th scope="col">Fecha de Reserva</th>
          <th scope="col">Devolver</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <th scope="row">{{book.title}}</th>
          <td>{{book.author}}</td>
          <td>{{getFecha(book.datereserved)}}</td>
          <td><button type="button" class="btn btn-outline-danger btn-sm" @click="returnBook(book.id)">Devolver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'Account',
  created () {
    this.$store.dispatch('getReservedBooks')
  },
  methods: {
    getFecha (datereserved) {
      const date = new Date(datereserved)
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    },
    returnBook (id) {
      this.$store.dispatch('returnBook', { id: id })
    }
  },
  computed: mapState({
    books: state => state.books.reservedBooks
  })
}
</script>
