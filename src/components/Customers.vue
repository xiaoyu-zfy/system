<template>
    <div id="customers">
        <Alert v-if="alert" :message="alert"></Alert>
        <h1>用户管理系统</h1>

        <hr>

            <input type="text" placeholder="搜索" id="sousuo" v-model="filterInput">

        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="customer in filterBy(customers , filterInput)" :key="customer.id">
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.phone }}</td>
                    <td>{{ customer.email }}</td>
                    <td><router-link :to="'/details/'+customer.id">详情</router-link>  </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import Alert from './Alert'

export default {
    name:'Customers',
    data() {
        return {
            customers:[],
            alert:'',
            filterInput:""
        }
    },
    methods:{
        dataCustomers() {
            this.$http.get("http://localhost:3000/users")
            .then((data) => {
                //console.log(data)

                this.customers = data.body
            })
        },

        // 这是遍历的函数， 传入我们的数据数组参数 和 我们v-model绑定的filterInput数据
        // 把搜索框的值传给value 然后进行filter方法进行匹配用match方法  字符串匹配方法
        filterBy(customers , value) {

            //  返回我们搜索的那个对象 ， 把我们搜索的value 与customers数组里的数据进行匹配 ， 如果匹配就会展示在页面上,我们是按name进行匹配的
            return customers.filter((customer)=> {
                return customer.name.match(value)
            })
        }
    },

    //  当我们在组件中调用组件时  要在子组件中声明
    components:{
        Alert
    },

    //  调用函数
    created() {
        this.dataCustomers()

        // 获取到query里的数据 ， 如果有则把值付给message  就是页面添加信息成功的组件
        if(this.$route.query.alert) {
            this.alert = this.$route.query.alert
        }
    },
    updated() {
        this.dataCustomers()
    }
}
</script>

<style scoped>
#sousuo{
    width: 100%;
    height: 25px;
    margin: 10px auto;
    padding: 2px;
}

#customers{
    width: 65%;
    margin: 10px auto
}
hr {
    opacity: 0.3;
    background: red
}
table{
    margin-top: 30px;
    width: 100%;
    border-collapse: collapse;
    /* 去掉td之间 的缝隙 */
}
table thead {
    text-align: left;
}
table thead tr{
    height: 40px;
}

/*  tr:nth-child(odd)  控制奇数行表格隔行变色  */
tbody tr:nth-child(odd){
    background: #EDEDED
}
table tbody tr {
    text-align: left;
    height: 40px;
}

tbody tr td a {
    display: inline-block;
    font-size: 18px;
    background: white;
    padding: 5px;
    color: black;
    width: 40px;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
}
</style>