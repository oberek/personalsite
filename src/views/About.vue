<template>
  <div class="base">
    <div class="left_box">
      <div class="maciej_pic">
        <img src="../assets/maciej.jpg" id="profile"/>
      </div>
    </div>
    <div class="right_box">
      <div class="filler_box"></div>
      <div>
      <h3>About</h3>
      <p>Maciej Smusz, graduate of Neumont College of Computer Science, enjoys coding, dancing, and getting out to enjoy all nature has to offer. He is currently a board member of Razem Utah, a non-profit Polish fraternal organization for the state of Utah. In terms of technology, Maciej is a very versatile programmer, adopting the best technology for the purposes for the client. He is always ready to try something new if it means improving performance, scalability, or ease of access.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped>
  .base {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  #profile{
    max-height: 400px;
    filter: drop-shadow(8px 8px 5px rgba(0,0,0,0.7));
    border-radius: 10px;
  }
  .maciej_pic{
    max-height: 400px;
    /*background-color: white;*/
    /*padding: 5px 5px 40px 5px;*/
    /*border-radius: 10px;*/

  }
  .left_box{
    padding: 30px;
  }
  .right_box{
    padding: 30px;
    max-width: 600px;
    position: relative;
  }
  h3{
    font-size: 24px;
  }
  p{
    font-size: 20px;
    /*text-shadow: 0px 3px azure;*/
  }
  .filler_box{
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    top:0;
    left:0;
    z-index: -1;
    position: absolute;
  }
</style>
