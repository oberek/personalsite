<template>
  <div class="base">
    <div class="outer_box">
      <h1>Let's Talk!</h1>
      <p>I'm currently looking for a new position, I'd love to hear from you about this site!</p>
      <div class="base">
        <form method="POST" action="https://formspree.io/maydjgnq">
          <input type="email" name="_replyto" placeholder="Your email" v-model="email" />
          <input type="text" name="_subject" placeholder="Subject" v-model="subject" />
          <textarea name="message" placeholder="Your message" v-model="message"></textarea>
          <input type="text" name="_gotcha" style="display:none" />
          <button type="submit" value="Send">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      subject: "",
      message: ""
    };
  }
};
</script>

<style scoped>
.outer_box,
form {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

input,
textarea,
button {
  margin: 10px;
  padding: 5px;
  width: 300px;
  min-height: 30px;
  border-radius: 5px;
}
textarea {
  min-height: 150px;
}
button {
  background-color: #4d4d4d;
  color: white;
  font-family: "Pacifico", serif;
  font-size: large;
  transition: 0.3s;
}
button:hover {
  background-color: #717171;
}
</style>
