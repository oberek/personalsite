<template>
  <div class="base">
    <div class="outer_box">
      <h1>Let's Talk!</h1>
      <form v-on:submit.prevent="console.log(form)">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input name="name"
                   v-model="form.name"
                   v-validate="'required|min:3'"
                   class="input" type="text" placeholder="Full name">
          </div>
          <p class="help" v-show="errors.has('name')">
            {{ errors.first('name') }}
          </p>
        </div>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input name="email"
                   v-model="form.email"
                   v-validate="'required|email'"
                   class="input" type="text" placeholder="Email Address">
          </div>
          <p class="help" v-show="errors.has('name')">
            {{ errors.first('name') }}
          </p>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Message" v-model="form.message"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              v-bind:disabled="errors.any()"
              class="button is-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data() {
      return {
        msg: 'This is the contact page'
      }
    }
  }
</script>

<style scoped>
  .base {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

</style>
