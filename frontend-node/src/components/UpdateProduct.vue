<template>
    <div class="container">
      <!-- Modal -->
      <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" @submit="updateUser">
              <h1>Edit Product</h1>
              <label class="label">ProductName</label>
              <input class="input" v-model="firstName" type="text" placeholder="Name" />
              <label class="label">Price</label>
              <input class="input" v-model="lastName" type="text" placeholder="Surname" />
              <label class="label">Brand</label>
              <input class="input" v-model="emailAdd" type="email" placeholder="Email" />
              <label class="label">Quantity</label>
              <input class="input" v-model="password" type="password" placeholder="Password" />
              <label class="label">Category</label>
              <input class="input" v-model="imgPro" type="text" placeholder="Password">
              <label class="label">Image Url</label>
              <input class="input" v-model="firstName" type="text" placeholder="Name" />
              <button class="btn btn-success mt-3" @click="$event => updateUser()">Update</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
   
  }
  </script>
  <style scoped>
  .modal-body {
    display: flex;
    flex-direction: column;
  }
  </style>