<template>
    <div id="app">
        <div class="navbar">
            <ul class="main-nav">
                <li>
                    <router-link :to="{name: 'Home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Portfolio'}">Portfolio</router-link>
                </li>
                <li><img src="./assets/logo_edge.png" id="small-logo"/></li>
                <li>
                    <router-link :to="{name: 'About'}">About</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Contact'}">Contact</router-link>
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');

    body {
        font-family: 'Open Sans Condensed', sans-serif;
        background: url("./assets/hiking2.jpeg");
        filter: saturate(-30%);
    }

    #app {
        height: 100%;
    }

    a:any-link {
        color: #8a8a8a;
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
    }

    li {
        text-decoration: none;
        font-size: 25px;
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        -ms-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        margin: 10px;
    }

    li:hover {
        -webkit-text-stroke-width: 0.3px;
        -webkit-text-stroke-color: #fff;
        -webkit-text-fill-color: #fff;
        text-shadow: 1px 0 0 cadetblue;
        transform: translateY(7px);
    }

    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    #small-logo {
        max-height: 40px;
    }
</style>