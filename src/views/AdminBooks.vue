<template>
  <div>
    <button type="button" class="btn btn-primary btn-lg mb-3" @click="showModal=true">Agregar nuevo libro</button>
    <div class="card-columns">
      <BookEdit v-for="(book, index) in books" :key="index" :title="book.title" :author="book.author" :description="book.description" :id="book.id" :datereserved="book.datereserved" :urlimage="book.urlimage"></BookEdit>
    </div>
    <div v-if="showModal">
      <BookModal @close="showModal=false"></BookModal>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import BookEdit from '@/components/BookEdit.vue'
import BookModal from '@/components/BookModal.vue'

export default {
  name: 'AdminBooks',
  data () {
    return {
      showModal: false
    }
  },
  created () {
    this.$store.dispatch('getBooks')
  },
  methods: {
    addBook () {
      this.$store.dispatch('addBook', { ...this.newBook })
    }
  },
  computed: mapState({
    books: state => state.books.books
  }),
  components: {
    BookEdit,
    BookModal
  }
}
</script>
