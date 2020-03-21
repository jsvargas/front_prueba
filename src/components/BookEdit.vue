<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img v-if="urlimage" class="card-img-top" :src="urlimage" alt="Card image cap">
      <img v-else class="card-img-top" src="@/assets/book_default_image.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{title||"Titulo"}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{author||"Author"}}</h6>
        <p class="card-text" v-if="description">
          {{readMoreActivated?description.slice(0, 200):description}}
        </p>
        <div class="mb-2">
         <a @click="activateReadMore"> {{readMoreActivated?'Ver más...':'Ver menos...'}}</a>
        </div>
        <div class="btn-group" role="group" aria-label="">
          <button type="button" class="btn btn-primary" @click="showModal = true">Editar</button>
          <button type="button" class="btn btn-danger" @click="deleteBook(id)">Eliminar</button>
        </div>
      </div>

      <BookModal v-if="showModal" :title="title" :author="author" :description="description" :id="id" :urlimage="urlimage" @close="showModal= false"></BookModal>
    </div>
  </div>
</template>

<script>
import BookModal from '@/components/BookModal.vue'
export default {
  name: 'BookEdit',
  props: ['title', 'author', 'description', 'reserved', 'urlimage', 'id', 'datereserved'],
  data () {
    return {
      readMoreActivated: true,
      showModal: false
    }
  },
  computed: {
    dateInFormat () {
      const date = new Date(this.datereserved)
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    }
  },
  methods: {
    activateReadMore () {
      this.readMoreActivated = !this.readMoreActivated
    },
    deleteBook (id) {
      this.$store.dispatch('deleteBook', { id: id })
    }
  },
  components: {
    BookModal
  }
}
</script>

<style>
</style>
