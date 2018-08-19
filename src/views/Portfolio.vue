<template>

    <div class="base">
        <h1>Project Work</h1>
        <div class="box colorize">
            <div class="left_part">
                <!--<img src="https://i.ytimg.com/vi/R-RbmqzRC9c/maxresdefault.jpg" class="project_image">-->
                <carousel :per-page="1">
                    <slide>
                        <img src="https://image.ibb.co/dx9ADK/Colorize_Interface.png" class="project_image"/>
                    </slide>
                    <slide>
                        <img src="https://image.ibb.co/nvjxce/Twilight_Zone209bw.png" class="project_image"/>
                    </slide>
                    <slide>
                        <img src="https://image.ibb.co/esYOHe/Twilight_Zone209.png" class="project_image"/>
                    </slide>
                </carousel>
            </div>
            <div class="right_part">
                "Colorize" by Maciej Smusz, a web development student, won the Faculty Favorite. He developed his
                project for Capstone: A course where student's prove their ready to tackle the challenges of the tech
                industry and Enterprise Projects. Maciej's passion for classic movies led him to train a convolutional
                neural network to automatically add color to old film footage. He says one of the biggest challenges of
                the project was working with new and experimental technologies with few resources to rely on.
            </div>
        </div>
        <div class="box dogfinder">
            <div class="left_part">
                <carousel :per-page="1">
                    <slide>
                        <img src="https://image.ibb.co/jjJsSe/Dog_Finder_Splash.png" class="project_image"/>
                    </slide>
                    <slide>
                        <img src="https://image.ibb.co/m6780z/Dog_Finder1.png" class="project_image"/>
                    </slide>
                </carousel>
            </div>
            <div class="right_part">
                DogFinder is a Tinder-like application which utilizes AngularJS and consumes the PetFinder API to allow
                users to "swipe left" or "swipe right" on dogs in their area. The user can specify between young, adult,
                and senior dogs, as well as the area they want to look in.
            </div>
        </div>
        <div class="box aaft2">
            <div class="left_part">
                <carousel :per-page="1">
                    <slide>
                        <img src="https://image.ibb.co/iwUfxe/AAFT2_Splash.png" class="project_image"/>
                    </slide>
                    <slide>
                        <img src="https://image.ibb.co/dYH0xe/AAFT2_Gameplay.png" class="project_image"/>
                    </slide>
                </carousel>
            </div>
            <div class="right_part">
                Adolescent Atomic Fighting Tortoises 2 was a game created for the Web Game Development course. The game
                utilizes CreateJS and uses the human voice as its primary mechanic. Screaming into the microphone
                releases bones, which in turn damage your enemies, the tortoises.
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
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h2 {
        margin-top: 0;
    }

    .box {
        display: flex;
        min-height: 80px;
        /*min-width: 900px;*/
        background-color: rgba(153, 159, 162, 0.7);
        /*transform: rotate3d(-2, 1, 1, 15deg);*/
        margin: 20px;
        flex-direction: row;
        max-width: 55%;
        border-radius: 7px;
    }

    .project_image {
        max-height: 300px;
        padding: 10px;
        /*box-shadow: 1px 1px 1px  ;*/
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
        border-radius: 18px;
        justify-content: center;
        align-content: center;
    }

    .left_part {
        min-width: 500px;
        padding: 20px;
    }

    .right_part {
        padding: 20px;
        padding-top: 30px;
        font-size: 20px;
        text-shadow: 1px 1px 20px #4d4d4d;

    }

    .VueCarousel-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
