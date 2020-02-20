<template>
    <div id="alert" ref="name">
        {{ message }} <span @click="handle"><img src="../assets/shanchu.png"></span>
    </div>
</template>

<script>
export default {
    name : "alert",
    props:[
        "message"
    ],
    data() {
        return {

        }
    },
    methods:{
        handle(e) {
            let del = this.$route.query.alert
            
            this.$refs.name.style.display = 'none'
            console.log(this.$route.query.alert)
        }
    }
}
</script>


<style scoped>
#alert{
    width: 80%;
    height: 50px;
    border-radius: 10px;
    background:#FFE7BA;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #cccccc
}
span {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin: 0px auto;
    margin-left: 98%
}
span img {
    width: 15px;
    height: 15px;
}
</style>