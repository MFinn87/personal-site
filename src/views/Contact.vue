<template>
  <div class="contact">
    <div class="contact-left">
      <div class="desktop-only contact-left-title">
        
      </div>
      <div class="contact-left-body">
        <div class="contact-left-body-content">
          <h3>LET'S GET IN TOUCH.</h3>
          <br class="desktop-only">
          <br class="desktop-only">
          <br class="desktop-only">
          <br class="desktop-only">
          <div class="negative-space-row"></div>
          <h6>MIKE FINNEGAN</h6>
          <h6>203-505-5624</h6>
          <br class="desktop-only">
          <h6>devmikef@gmail.com</h6>
          <div class="mobile-only negative-space-row"></div>
        </div>
      </div>
    </div>
    <div class="contact-right">
      <div class="contact-right-title">
        <h6>Leave me your info and a message, and I will get back to you ASAP.</h6>
      </div>
      <div class="contact-right-body">
        <form
        @submit="checkForm"
        method="post"
        >

        <p v-if="errors.length" class="alert">
          <b>Wait! Please correct the following error(s):</b>
          <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </p>

        <label for="name"></label>
        <input
          class="size-inputs"
          id="name"
          v-model="name"
          type="text"
          name="name"
          placeholder="NAME"
        >

        <label for="email"></label>
        <input
          class="size-inputs"
          id="email"
          v-model="email"
          type="text"
          name="email"
          placeholder="EMAIL"
        >

        <label for="phoneNumber"></label>
        <input
          class="size-inputs"
          id="phone"
          v-model="phone"
          type="integer"
          name="phone"
          placeholder="PHONE NUMBER"
        >

        <label for="message"></label>
        <textarea
          id="message"
          v-model="message"
          type="text"
          name="message"
          placeholder="MESSAGE"
        />

        <div class="submit-button next-desktop-center">
          <button
            type="submit"
            value="Submit"
            class="full-width"
          >
            SEND
          </button>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      errors: [],
    }
  },
  created() {
    this.clearInputFields();
  },
  methods: {
    clearInputFields: function() {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
    },
    checkForm: function(e) {
      e.preventDefault()
      this.errors = [];
      if(!this.name) {
        this.errors.push('Please let me know what your name is!')
      }
      if(!this.email){
        this.errors.push('Please enter in your email.')
      }
      if(!this.message) {
        this.errors.push('Please leave a message.')
      }
      else {
        return axios.post("https://www.finnyg.com/api/message", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        })
        .then((response) => {
          if(response.data === "OK") {
            alert("Message sent. Thanks, and talk to you soon!");
            this.clearInputFields();
          }
          else {
            alert("Error: " + response.data);
          }
        })
        .catch((error) => alert(error))
      }
    }
  } 
}
</script>

<style lang="scss">
  .contact {
    display: flex;
    flex-direction: row;
    width: 100%;

    @media only screen and (max-width: 860px) {
      flex-direction: column;
    }

    .contact-left {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 861px) {
        flex: 1;
      }

      .contact-left-title {
        margin-right: 2em;
        height: 2.5em;
      }

      .contact-left-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin-right: 2em;

        .contact-left-body-content {
          display: flex;
          flex-direction: column;

          h3 {
            margin-top: -12px;
          }
        }
      }
    }

    .contact-right {
      display: flex;
      flex-direction: column;
      flex: 1;

      h6 {
        margin-bottom: 1.5em;
      }

      .contact-right-body {
        flex: 1;
        margin-top: 1px;
        
        label {
          display: none;
        }

        input, textarea {
          margin-bottom: 1.5em;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
    }
    
    label {
      margin-top: 2em;
      font-size: 1.2em;
      font-weight: 500;
      /* color: #94aab0; */
    }
    
    input, textarea {
      border: 1px solid #cfd9db;
      border-radius: 0.25em;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
      resize: none;
    }

    .size-inputs, textarea {
      padding: 12px;
      background-color: #ffffff;
    }
    
    textarea {
      height: 6em;
    }
    
    .center {
      display: flex;
      justify-content: center;
    }
    
    .alert {
      color: red;
    }
  }
</style>
