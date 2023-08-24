<template>
    <section class="info">
    

        <div class="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3304.4734828650676!2d18.8208315!3d-34.083009!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1dcdb55ba34ef2b9%3A0x3b8bb295c61fad8b!2sSomerset%20Mall%2C%20Centenary%20Drive%2C%20Intersection%20of%20N2%20%26%20R44%20Somerset%20West%2C%20Centenary%20Dr%2C%20Somerset%20West%2C%207130!3m2!1d-34.083009!2d18.8234064!5e0!3m2!1sen!2sza!4v1686577869952!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    
        <div class="contact-sec">
            <!--contact section-->

            <div class="mt-3 text-white">
                <p class="p-2 text-black fw-semibold">Get in Touch with us!
                    As see from the Map above , we do offer in-store shopping at Somerset Mall. <br>
                 You will be contacted soon for any additional infomation or feedback regarding our products or delivery service.
            </p>
            </div>

                    <section class="registration">
                      
                        <form class="form" action="https://formspree.io/f/mvojaave" method="POST">
                             <p class="title">Leave your Details</p>
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
                                <label>
                                    <input placeholder="" type="email" class="input fw-semibold">
                                    <span>Email:</span>
                                </label> 
                                    <label class="text-black fw-semibold">
                                   <span> Message:</span> 
                                    <textarea name="message" class="input"></textarea>
                                    </label>
                                <button class="submit">Submit</button>
                        
                        </form>
                    </section>
     

        </div>
       
     
        
    </section>
      
    </template>
    <script>
     export default{

    }
    </script>
    <style scoped>
        p{
            font-family: 'REM', sans-serif;
        }
    iframe {
        width: 100%;
        height: 400px;
    }
      span{
        font-family: 'REM', sans-serif;
        font-size: 15px;
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