<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Tipo de usuario</th>
          <th scope="col">Eliminar usuario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <th scope="row">{{user.username}}</th>
          <td>
            <select class="form-control" id="sel1" v-model="user.type" @change="editUser(user.id,user.type)">
              <option value="1">Administrador</option>
              <option value="0">Usuario normal</option>
            </select>
          </td>
          <td><button type="button" class="btn btn-outline-danger btn-sm" @click="deleteUser(user.id)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  created () {
    this.$store.dispatch('getUsers')
  },
  methods: {
    deleteUser (id) {
      this.$store.dispatch('deleteUser', { id: id })
    },
    editUser (id, type) {
      this.$store.dispatch('editUser', { id: id, type: type })
    }

  },
  computed: mapState({
    users: state => state.users.users
  })
}
</script>
