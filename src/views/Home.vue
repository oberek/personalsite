<template>

  <div class="base">
    <img src="../assets/logo_transparent.png" id="logo">
    <div class="whoami">
      <h3>
        — Maciej Smusz —
      </h3>
      <h4>
        Full Stack Web Developer
      </h4>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Hire Me pls'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .base {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #logo {
    max-height: 300px;
  }

  .whoami {
    font-size: 40px;
  }
  h3,h4{
    margin: 15px 0 0;
    font-weight: normal;
    color: #2e2e2e;

  }
</style>
