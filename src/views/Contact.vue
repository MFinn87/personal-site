<template>
  <div>
    <div class="text-segment">
        <h3>Let's get in touch! Leave me your info and a message, and I will get back to you ASAP.
        </h3>
    </div>
    <div class="center">
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

        <label for="name">Name</label>
        <input
            class="size-inputs"
            id="name"
            v-model="name"
            type="text"
            name="name"
        >

        <label for="email">Email Address</label>
        <input
            class="size-inputs"
            id="email"
            v-model="email"
            type="text"
            name="email"
        >

        <label for="phoneNumber">Phone Number</label>
        <input
            class="size-inputs"
            id="phone"
            v-model="phone"
            type="integer"
            name="phone"
        >

        <label for="message">Message</label>
        <textarea
            id="message"
            v-model="message"
            type="text"
            name="message"
        />

        <div class="submit-button next">
            <button
                type="submit"
                value="Submit"
            >
                Send message
            </button>
        </div>

        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: [],
    }
  },
  created() {
    this.clearInputFields();
  },
  methods: {
    clearInputFields: function() {
        this.name = "";
        this.email = "";
        this.phone = "";
        this.message = "";
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

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 100%
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

  .submit-button {
      text-align: right;
  }

</style>