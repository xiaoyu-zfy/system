<template>
    <div id="add">
        <Alert v-if="alert" :message="alert"></Alert>
        <h1 class="box-h1">添加用户</h1>
        <hr>
        <form @submit="addCustomer">
            <div id="users"> 
                <h4>用户信息</h4>
                <div>
                    <label>姓名</label><br>
                    <input type="text" v-model="customer.name" placeholder="name">
                </div>
                <div>
                    <label>电话</label><br>
                    <input type="text" v-model="customer.phone" placeholder="phone">
                </div>
                <div>
                    <label>邮箱</label><br>
                    <input type="text" v-model="customer.email" placeholder="email">
                </div>
                <div>
                    <label>学历</label><br>
                    <input type="text" v-model="customer.education" placeholder="education">
                </div>
                <div>
                    <label>毕业学校</label><br>
                    <input type="text" v-model="customer.graduationschool" placeholder="graduationschool">
                </div>
                <div>
                    <label>职业</label><br>
                    <input type="text" v-model="customer.profession" placeholder="profession">
                </div>
                <div>
                    <label>个人简历</label><br>
                    <textarea id="jianli" v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn">添加</button>
            </div>
        </form>
    </div>
</template>

<script>
import Alert from './Alert'

export default {
    name:'add',
    data() {
        return {
            customer: {},
            alert:""
        }
    },
    methods:{
        //  这是我们自定义绑定的方法
        addCustomer(e) {
            // console.log(123)
            e.preventDefault()  //  阻止默认事件
            
            // 如果缺少这三个里的任意一个 就反馈信息
            if(!this.customer.name || !this.customer.phone || !this.customer.email) {
                this.alert = "请添加对应的信息"   //  当我们没要添加这三个数据时 弹窗提示
            }
            else {
                // 拿到我们设置的值  然后把我们要添加的数据post出去
                let newCustomer = {
                    name : this.customer.name,
                    phone : this.customer.phone,
                    email : this.customer.email,
                    education : this.customer.education,
                    graduationschool : this.customer.graduationschool,
                    profession : this.customer.profession,
                    profile : this.customer.profile
                }


                // 把数据提交到我们的这个地址去 ， 
                this.$http.post("http://localhost:3000/users", newCustomer)
                .then((data) => {
                   // console.log(data)

                    //  query 设置的一个自定义路由属性  当我们点击添加之后跳转到用户界面 吧这个属性的数据传过去
                    this.$router.push({ path:"/"  , query :{alert : "用户信息添加成功!"}})
                    //  添加一个跳转路由事件 当我们添加数据之后 跳转到主页面 “/” 并且展示我们添加的数据
                })
                //  回调函数 看是否添加成功
            }
        }
    },
    components: {
        Alert
    }
}
</script>

<style scoped>
.box-h1 {
    width: 70%;
    margin: 5px auto;
    margin-left: 14%;
}
.btn {
    width: 60px;
    height: 40px;
    border-radius: 5px;
    background: #8470FF;
    padding: 10px;
    
}

hr {
    width: 72%;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 20px;
    background: red;
    opacity: 0.3;
    
}

#users {
    width: 70%;
    background: #EDEDED;
    margin: 5px auto;
    padding: 20px;
    border-radius: 5px 
}
#users div{
    margin: 10px auto;
    padding: 5px
}
#users label {
    font-size: 15px;
    font-weight: 1000;
}
#users input {
    width: 100%;
    height: 25px;
    border: 1px solid #CCC;
    border-radius: 4px;
    margin: 5px auto;
    padding: 5px
}

#jianli {
    width: 100%;
    height: 200px;
    border: 1px solid #CCC;
    border-radius: 4px;
    margin: 5px auto;
    padding: 5px
}

</style>>

