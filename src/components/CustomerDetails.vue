<template>
    <div id="CustomerDetails">
        <button id="fanhui">
            <router-link to="/">返回</router-link>
        </button>

        <h1> {{ customer.name }}</h1>

        <div id="btn">
            <router-link id="btn1" :to="'/edit/'+customer.id">编辑</router-link>
            <button id="btn2" @click="deleteCustomer(customer.id)">删除</button>
        </div>

        <hr>

        <ul  v-for="(item , index) in customer" :key="item.id">
            <li> {{ index }} </li>
            <li> {{ item }} </li>
        </ul>

    </div>
</template>

<script>
export default {
    name : 'CustomerDetails',
    data() {
        return {
            customer : {}
        }
    },
     methods:{

         //  路由参数的确定 ，由我们请求数据里的id来确定 通过请求数据拿到id并跳转到对应id下的数据内容 就是我们设置的每条数据的详情  
        dataCustomers(id) {
            this.$http.get("http://localhost:3000/users/"+id)
            .then((data) => {
                this.customer = data.body
            })
        },

        deleteCustomer(id) {
            // console.log(id)

            //  拿到我们数据的id 并且我们点击删除按钮时 删除这个id所代表的的数据 ，并且返回到主页面“/” 
            this.$http.delete("http://localhost:3000/users/"+id)
            .then(()=> {
                //  当数据被删除之后 调用这个弹窗 ，提示数据已经成功删除
                //  这个弹窗是我们写好的组件 并且在主页面展示， 当我们点击那个按钮才会实现那个按钮下的事件和弹窗里的内容信息
                this.$router.push({ path:"/" , query : { alert:"用户删除成功!!" }})
            })
        }
    },
    created() {

        //拿到数据的id并调用这个函数 吧id传过去
        this.dataCustomers(this.$route.params.id)
    }
}
</script>

<style scoped>
h1 {
    margin: 20px;
    margin-left: 145px
}
ul {
    margin: 20px;
    margin-left: 200px;
    list-style: none;
}
li {
    font-size: 20px;
}

#fanhui {
    width: 50px;
    height: 25px;
    padding: 2px;
    margin-left: 20px;
    margin-top: 20px
}
a {
    text-decoration: none;
    color: green
}
#btn {
    margin: 8px;
}

#btn1 {
    font-size: 15px;
    border: 1px solid #CCC;
    padding: 5px;
    background: #C6E2FF;
    margin-left: 1000px;
}
#btn2 {
    font-size: 14px;
    padding: 5px;
    color: red
} 

</style>