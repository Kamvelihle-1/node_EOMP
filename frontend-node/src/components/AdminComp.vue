<template>
    <div class="body">
      <div class="alltables">
        <div>
          <div class="container ">
            <div class="row table-container">
              <div class="col-12">
                <h1 class="text-white">Users</h1>
                <button
                  type="button"
                  class="btn btn-success add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#addUserModal"
                  
                >
                  Add
                </button>
              </div>
              <div class="col">
                <table class="table is-striped is-bordered mt-2 is-fullwidth array-lists">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bord">
                    <td><img class="tableImg" alt="" /></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          type="button"
                          class="btn editbton"
                          data-bs-toggle="modal"
                          data-bs-target="#editUserModal"
                          id="edit-row"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          class="btn delbtton"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          id="delete-row"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row table-container">
              <div class="col-12">
                <h1 class="text-white">Products</h1>
                <button
                  type="button"
                  class="btn btn-success add-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#addProductModal"
                >
                  Add
                </button>
              </div>
              <div class="col">
                <table class="table is-striped is-bordered mt-2 is-fullwidth array-listsarray-lists">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Brand</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Edit/Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bord">
                      <td></td>
                      <td><img class="tableImg"  alt="" /></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        
                       <UpdateProduct/>
                        <button
                          type="submit"
                          class="btn delbtton"
                          id="delete-row"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Delete />
      </div>
      
    </div>
    
  </template>

  <script>
  import UpdateProduct from './UpdateProduct.vue';
    export default{
        components: {UpdateProduct}
    }
</script>
  
  
  <style scoped>
  body{
    overflow-x: hidden;
  }

  .body{
    padding-top: 80px;
    background: #E9D5B7;

  }
  .add-btn {
    float: right;
    background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  }
  tbody button {
    width: 5rem;
    margin-top: 4px;
  }
  .tableImg {
    height: 50px;
    width: 100px;
    object-fit: contain;
  }
  .row {
    width: 80rem;
    max-width: 100%;
    /* text-align: center; */
  }
  .add-btn {
    float: right;
  }
  .editbton {
    background: transparent;
    border: transparent;
  }
  .delbtton {
    background: transparent;
    border: transparent;
  }
  .editbton:hover {
    background: green;
    color: white;
    border: 1px solid black;
  }
  .delbtton:hover {
    background: red;
    color: white;
    border: 1px solid black;
  }
  .table {
    border-bottom: 1px solid black;
    justify-content: center;
    align-items: center;
    border-collapse: collapse;
  }
  .container {
    margin-top: 5rem;
    text-align: center;
  }
  @media screen and (max-width: 650px) {
    .body {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      max-width: 100%;
  
    }
    .container {
      display: inline-block;
      justify-content: center;
      align-content: center;
      width: 15rem;
      margin-left: 5rem;
    }
    .bord {
      border: 2px solid black;

    }
   
    tbody {
      margin-bottom: 2rem;
    }
    thead {
      display: none;
    }
    tbody td {
      /* flex-wrap: wrap; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  </style>