<template>
    <nav>
        <ul id="ul1">
            <li>
                <a style="color:#080808">用户管理系统</a>
                <router-link to="/">主页</router-link>
                <router-link to="/about">关于我们</router-link>
            </li>
        </ul>
        <ul id="ul2">
            <li>
                <router-link to="/add">添加用户</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:"SystemHead"
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  background: #EDEDED;
  padding: 10px
}
#ul1 {
    display: inline-block;
    list-style: none;
}
li{
    display: inline-block;
    margin: 10px;
    margin-left: 150px
    
}
a{
    text-decoration: none;
    padding: 15px;
    font-size: 20px;
    color: black;
}

#ul2 {
    display: inline-block;
}
</style>