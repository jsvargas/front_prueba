<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img v-if="urlimage" class="card-img-top" :src="urlimage" alt="Card image cap">
      <img v-else class="card-img-top" src="@/assets/book_default_image.jpeg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{title||"Titulo"}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{author||"Author"}}</h6>
        <p class="card-text" v-if="description">
          {{readMoreActivated?description.slice(0, 200) + " ... ":description}}
        </p>
        <div class="mb-2">
         <a @click="activateReadMore"> {{readMoreActivated?'Ver más...':'Ver menos...'}}</a>
        </div>
        <button type="button" class="btn btn-sm btn-block" :class="{ 'btn-primary' : !datereserved, 'btn-secondary' : datereserved }" @click="reserveBook(id)" :disabled="datereserved">{{datereserved?'Se encuentra reservado desde el '+ dateInFormat:'Reservar' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['title', 'author', 'description', 'reserved', 'urlimage', 'id', 'datereserved'],
  data () {
    return {
      readMoreActivated: true
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
    reserveBook (id) {
      this.$store.dispatch('reserveBook', { id: id })
    }
  }
}
</script>

<style>
</style>
