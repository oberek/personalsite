<template>

  <div class="base">
    <h2>Web Projects</h2>
    <div class="box colorize">
      <div class="left_part">
        <img src="https://i.ytimg.com/vi/R-RbmqzRC9c/maxresdefault.jpg" class="project_image">
      </div>
      <div class="right_part">
        This project is about stuff and things
      </div>
    </div>
    <div class="box dogfinder">
      <div class="left_part">

      </div>
      <div class="right_part">
        This project is about stuff and things
      </div>
    </div>
    <div class="box reggorf">
      <div class="left_part">

      </div>
      <div class="right_part">
        This project is about stuff and things
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "portfolio"
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
  h2{
    margin-top: 0;
  }
  .box{

    display: flex;
    min-height: 80px;
    /*min-width: 900px;*/
    background-color: lightgray;
    /*transform: rotate3d(-2, 1, 1, 15deg);*/
    margin: 20px;
    flex-direction: row;
  }
  .project_image{
    max-height: 200px;
    padding: 10px;
    /*box-shadow: 1px 1px 1px  ;*/
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.5));
    border-radius: 18px;
  }
</style>
