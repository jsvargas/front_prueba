<template>
  <div>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{id?'Editando: ' + title:'Nuevo Libro'}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="$emit('close')">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="formControlInput1">Título *</label>
                      <input type="text" class="form-control" id="titleBook" placeholder="Título" v-model="title"  maxlength="100">
                    </div>
                    <div class="form-group">
                      <label for="formControlInput1">Autor *</label>
                      <input type="text" class="form-control" id="authorBook" placeholder="Autor" v-model="author"  maxlength="100">
                    </div>
                    <div class="form-group">
                      <label for="formControlInput3">Descripción *</label>
                      <textarea class="form-control" id="descriptionBook" rows="3" placeholder="Descripción" v-model="description"  maxlength="2000"></textarea>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-8">
                        <label for="formControlInput1">URL Imagen</label>
                        <input type="text" class="form-control" id="urlImageBook" placeholder="http://example.com/image.png"  maxlength="200" v-model="urlimage">
                      </div>
                      <div class="form-group col-md-4">
                        <img v-if="urlimage" class="card-img-top" :src="urlimage" alt="Preview">
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancelar</button>
                  <button type="button" class="btn btn-primary" @click="saveBook(id, title, author, description, urlimage)"> Guardar </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'BookModal',
  props: ['title', 'author', 'description', 'urlimage', 'id'],
  methods: {
    saveBook (id, title, author, description, urlimage) {
      if (id) {
        this.$store.dispatch('editBook', { id: id, title: title, author: author, description: description, urlimage: urlimage })
      } else {
        this.$store.dispatch('addBook', { title: title, author: author, description: description, urlimage: urlimage })
      }
      //
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

</style>
