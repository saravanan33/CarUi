<template>
    <div>
        <div id="login-form-wrap">
    <h2>Login</h2>
    <form id="login-form" class="d-flux">
        <p style="text-align:center; background-color:white">
            <input type="email" id="email" v-model="userName" placeholder="Email Address" required><i class="validation"><span></span><span></span></i>
        </p>
        <p style="text-align:center; background-color:white">
        <input type="password" id="password" v-model="password" placeholder="password" required><i class="validation"><span></span><span></span></i>
        </p>
        <p >
        <b-button style="background-color: #4CAF50; border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;" @click="submit()">{{ 'submit' }}</b-button>
        </p>
    </form>
    <div id="create-account-wrap">
    </div><!--create-account-wrap-->
</div><!--login-form-wrap-->
    </div>
</template>
<script>
// import axios from 'axios';
export default{
    data:function(){

        return{
            userName:"",
            password:""
        }
    },
    methods:{
        submit(){
            var postJson={}
            postJson['user_name'] = this.userName
            postJson['password'] = this.password
            console.log(JSON.stringify(postJson))
            // axios.post('http://localhost/CarModule/public/loginUser',postJson).then(
            //     response=>{console.log(response)}
            // )
            console.log()
        }
    }
}
</script>