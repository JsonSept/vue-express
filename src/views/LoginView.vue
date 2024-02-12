<template>
    <div class="view">
        <h1>Login Page</h1>
        <input type="email" placeholder="email" name="email" required v-model="email">
        <br>
        <br>
        <input type="password" placeholder="password" name="password" required v-model="password">
        <br>
        <br>
        <button @click="submitData">Submit</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email:'abs@gmail.pop',
            password:'yolo123',
        }
    },
    methods :{
        submitData(){
            console.log(this.$data);
            this.$store.dispatch('login',this.$data)
        }
    }
}
</script>
<style>
    div {
        padding-top: 2px;
    }
    .view {
        background-color: rgb(64, 60, 60);
        border-radius: 10px;
        width: 400px;
        height : 190px;
        margin-left: 37%;
        margin-top: 8%;
    }
    @media screen and (max-width: 900px) {
    .view {
        background-color: rgb(64, 60, 60);
        border-radius: 10px;
        width: 400px;
        margin-left: 25%;

        height : 190px;
    }
}
</style>