<template>
    <section class="registration">
      <form class="form">
      <p class="title">Sign Up </p>
      <p class="message fw-semibold">Create your ShoeGame Account today!</p>
          <div class="flex">
          <label>
              <input  placeholder="" type="text" class="input">
              <span>Firstname:</span>
          </label>
  
          <label>
              <input placeholder="" type="text" class="input">
              <span>Lastname:</span>
          </label>
          
      </div> 
      <div class="flex">
        <label>
              <input placeholder="" type="text" class="input">
              <span>Role:</span>
          </label>
                <label>
              <input placeholder="" type="text" class="input">
              <span>Age:</span>
          </label>       
      
      </div> 
      
       <label>
          <input placeholder="" type="email" class="input">
          <span>Email:</span>
      </label> 
          
      <label>
          <input placeholder="" type="password" class="input">
          <span>Password:</span>
      </label>
      <label>
              <input placeholder="" type="text" class="input">
              <span>Image Url</span>
          </label>
      <button class="submit">Submit</button>
     
  </form>
    </section>
     
  </template>
  
  <style scoped>
    span{
        font-family: 'REM', sans-serif;
    }
      .registration{
        display: flex;
       justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color:#eaeaea;
      }
      .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
   
  }
  
  .title {
    font-size: 28px;
    color: rgb(200,160,4);
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  
  .title::before,.title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background: rgb(200,160,4);
  }
  
  .title::before {
    width: 18px;
    height: 18px;
    background-color: black;
  }
  
  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }
  
  .message, .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
    font-family: 'REM', sans-serif;
  }
  
  
  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }
  
  .form label {
    position: relative;
  }
  
  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }
  
  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }
  
  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }
  
  .form label .input:focus + span,.form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }
  
  .form label .input:valid + span {
    color:black;
  }
  
  .submit {
    border: none;
    outline: none;
    background: rgb(200,160,4);
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
  }
  
  .submit:hover {
    background-color: black;
  }
  
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
  
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
  
  </style>