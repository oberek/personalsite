<template>

  <div class="base">
    <img src="../assets/secondaryLogo.png" id="logo">
    <div class="whoami">
      <h3>
        Full Stack Web Developer
      </h3>
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
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #logo {
    max-height: 450px;
    margin-bottom: 75px;
    filter: drop-shadow(0 0 0.75rem white);

  }

  .whoami {
    font-size: 40px;
  }

  h3, h4 {
    margin: 15px 0 0;
    font-weight: normal;
    /*color: #2e2e2e;*/
    color: white;
    text-shadow: 1px 1px 20px #4d4d4d;
  }
  @media only screen and (max-width: 1200px) {
    /* For mobile phones: */
   #logo{
     max-width: 75%;
   }
    .whoami{
      text-align: center;
    }
  }
</style>
