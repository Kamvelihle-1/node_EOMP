<template>
    <section class="info">
    

        <div class="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3304.4734828650676!2d18.8208315!3d-34.083009!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1dcdb55ba34ef2b9%3A0x3b8bb295c61fad8b!2sSomerset%20Mall%2C%20Centenary%20Drive%2C%20Intersection%20of%20N2%20%26%20R44%20Somerset%20West%2C%20Centenary%20Dr%2C%20Somerset%20West%2C%207130!3m2!1d-34.083009!2d18.8234064!5e0!3m2!1sen!2sza!4v1686577869952!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    
        <div class="contact-sec">
            <!--contact section-->

            <div class="mt-3 text-white">
                <p class="p-2 text-black">Get in Touch with us!
                    As see from the Map above , we do offer in-store shopping at Somerset Mall. <br>
                 You will be contacted soon for any additional infomation or feedback regarding our products or delivery service.
            </p>
            </div>

                    <div class="contact">
                                <form action="https://formspree.io/f/mvojaave" method="POST">
                                                    <label class="text-black">
                                    FullName:
                                    <input type="name" name="fullname" class="input">
                                    </label >
                                    <label class="text-black">
                                    Email:
                                    <input type="email" name="email" class="input">
                                    </label>
                                    <label class="text-black">
                                    Location:
                                    <input type="location" name="location" class="input">
                                    </label>
                                    <label class="text-black">
                                    Message:
                                    <textarea name="message"></textarea>
                                    </label>
                                    <button type="submit" class="mb-4">Send</button>
                                        

                                    
                                </form>
                    </div>

        </div>
       
     
        
    </section>
      
    </template>
    <script></script>
    <style>


        /* .contact-sec{
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            gap: 20px;
        } */
        /* .card {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 350px;
            width: 300px;
            flex-direction: column;
            gap: 35px;
            background: #e3e3e3;
            box-shadow: 16px 16px 32px #c8c8c8,
                    -16px -16px 32px #fefefe;
            border-radius: 8px;
        }
         */
         .form {
     --width-of-input: 200px;
     --border-height: 1px;
     --border-before-color: rgba(221, 221, 221, 0.39);
     --border-after-color: #5891ff;
     --input-hovered-color: #4985e01f;
     position: relative;
     width: var(--width-of-input);
    }
    /* styling of Input */
    .input {
     color: #fff;
     font-size: 0.9rem;
     background-color: transparent;
     width: 100%;
     box-sizing: border-box;
     padding-inline: 0.5em;
     padding-block: 0.7em;
     border: none;
     border-bottom: var(--border-height) solid var(--border-before-color);
    }
    /* styling of animated border */
    .input-border {
     position: absolute;
     background: var(--border-after-color);
     width: 0%;
     height: 2px;
     bottom: 0;
     left: 0;
     transition: 0.3s;
    }
    /* Hover on Input */
    input:hover {
     background: var(--input-hovered-color);
    }
    
    input:focus {
     outline: none;
    }
    /* here is code of animated border */
    input:focus ~ .input-border {
     width: 100%;
    }
    button {
      font-weight: bold;
      color: white;
      border-radius: 2rem;
      width: 95.02px;
      height: 42.66px;
      border: none;
      background-color: #3653F8;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    /* .info{
        background-image: url(https://i.postimg.cc/KzQsZkc7/dark-blue-smart-blurred-pattern-elegant-bright-illustration-with-gradient-background-for-cell-phones.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    } */
    iframe {
        width: 100%;
        height: 400px;
    }
    /* .contact{
        display: flex;
        justify-content: center;
        align-content: center;
    } */
    </style>