<template>
    <div class="base">
        <div class="outer_box">
            <h1>Let's Talk!</h1>
            <p>Although I'm happily employed right now, I'd love to hear from you about your current technology needs</p>
            <div class="base">
                <form method="POST" action="https://formspree.io/maciejsmusz@gmail.com" @submit="checkForm">
                    <input type="email" name="email" placeholder="Your email" v-validate="'required|email'" v-model="email">
                    <input type="text" name="_subject" placeholder="Subject" v-model="subject"/>
                    <textarea name="message" placeholder="Your message" v-model="message"></textarea>
                    <input type="text" name="_gotcha" style="display:none"/>
                    <button type="submit" v-model="submit">Send</button>
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
        },
        methods:{
            checkForm: function (e) {
                if(this.email && this.textBody.value){
                    return true;
                }
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .outer_box, form {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    input, textarea, button {
        margin: 10px;
        padding: 5px;
        width: 300px;
        min-height: 30px;
        border-radius: 5px;
    }
    textarea{
        min-height: 150px;
    }
    button{
        background-color: #4d4d4d;
        color: white;
        font-family: 'Pacifico',serif;
        font-size: large;
        transition: 0.3s;
    }
    button:hover{
        background-color: #717171;
    }

</style>
