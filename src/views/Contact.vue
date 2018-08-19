<template>
  <div class="base">
    <div class="outer_box">
      <h1>Let's Talk!</h1>
      <div class="base">
        <form method="POST" action="https://formspree.io/maciejsmusz@gmail.com">
          <input type="email" name="email" placeholder="Your email" v-validate="'required|email'">
          <input type="text" name="_subject" placeholder="Subject"/>
          <textarea name="message" placeholder="Your message"></textarea>
          <input type="text" name="_gotcha" style="display:none"/>
          <button type="submit">Send</button>
        </form>
      </div>
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
