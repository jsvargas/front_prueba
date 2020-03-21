<template>
<div>
  <div class="home">
    <div class="card-columns">
      <Book v-for="(book, index) in books" :key="index" :title="book.title" :author="book.author" :description="book.description" :id="book.id" :datereserved="book.datereserved" :urlimage="book.urlimage"></Book>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Book from '@/components/Book.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('getBooks')
  },
  computed: mapState({
    books: state => state.books.books
  }),
  components: {
    Book
  }
}
</script>
