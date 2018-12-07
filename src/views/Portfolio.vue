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
                <h2>Colorize</h2>
                <p>
                    Colorize is a tool enabling a user to automatically colorize black and white films. The tool was
                    trained using convolutional neural networks and Google's Inception ResNet, which enabled it to make
                    a "best guess" as to the colors in a given picture.
                </p>
                <p>
                    <b>Technologies Used: </b>TensorFlow, VueJS, ElectronJS, OpenCV, Scikit, Python
                </p>
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
                <h2>DogFinder</h2>
                <p>
                    DogFinder is a Tinder-like application which utilizes AngularJS and consumes the PetFinder API to
                    allow
                    users to "swipe left" or "swipe right" on dogs in their area. The user can specify between young,
                    adult,
                    and senior dogs, as well as the area they want to look in.
                </p>
                <p><b>Technologies Used: </b> AngularJS, Express, SCSS</p>
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
                <h2>Adolescent Atomic Fighting Tortoises 2</h2>
                <p>
                    Adolescent Atomic Fighting Tortoises 2 was a game created for a Web Game Development course. The
                    game
                    utilizes CreateJS and uses the human voice as its primary mechanic. Screaming into the microphone
                    releases bones, which in turn damage your enemies, the tortoises.
                </p>
                <p><b>Technologies Used: </b>CreateJS, Express</p>
            </div>
        </div>
        <div class="box photoshop-projects">
            <div class="left_part">
                <carousel :per-page="1">
                    <slide>
                        <img src="https://i.ibb.co/dr7Bvng/penguin-in-desert.jpg" class="project_image"/>
                    </slide>
                    <slide>
                        <img src="https://i.ibb.co/wz8R0mQ/surreal-2.jpg" class="project_image"/>
                    </slide>
                </carousel>
            </div>
            <div class="right_part">
                <h2>Photoshop Projects</h2>
                <p>
                    The surreal pictures seen on the side were created for a Graphic Design course encompassing Adobe PhotoShop, Illustrator, and InDesign.
                </p>
                <p><b>Technologies Used: </b>Adobe PhotoShop, Illustrator, InDesign</p>
            </div>
        </div>

    </div>
    <VueElevator :word="word" :duration="duration" :mainAudio="mainAudio" :endAudio="endAudio"></VueElevator>

</template>

<script>
    export default {
        name: "portfolio",
        data() {
            return {
                // Replace word, duration, mainAudio and endAudio setting as you want.
                // If default is what you like, just don't use related key-value pair and ignore it.
                word: "Go to Top",
                duration: 4000,
                mainAudio: "http://tholman.com/elevator.js/music/elevator.mp3",
                endAudio: "http://tholman.com/elevator.js/music/ding.mp3",
            }
        }
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
        max-width: 450px;
    }

    .left_part {
        min-width: 500px;
        padding: 20px;
    }

    .right_part {
        padding: 20px;
        padding-top: 30px;
        font-size: 20px;
        text-shadow: 1px 1px 20px #fff;

    }

    .VueCarousel-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media all and (max-width: 1200px) {
        /* For mobile phones: */
        .box {
            flex-direction: column;
            max-width: 85%;
            min-width: 200px;
        }

        .project_image {
            max-width: 80%;

        }

        .VueCarousel-slide {
            /*flex-basis: 85%;*/
        }

        .left_part {
            max-width: 85%;
            min-width: 200px;
        }

        .right_part {
            text-align: center;
        }
    }
</style>
