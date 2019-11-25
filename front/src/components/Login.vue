<template>
  <div id="login" class="content">
      <div id="form">
        <h3>用户登录</h3>
        <div id="inner">
          <el-form ref="form" label-position="right" label-width="80px">
            <el-form-item label="用户名" prop="userName">
              <el-input type="text" 
              placeholder="请输入用户名" 
              v-model="userName" 
              @blur.once="userNameVerification">
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPassword">
              <el-input type="password" 
              placeholder="请输入密码" 
              v-model="userPassword"
              @blur.once="userPasswordVerification">
              </el-input>
            </el-form-item>
            <el-button type="primary" 
            icon="el-icon-coordinate" 
            :disabled="disabled"
            @click="submit">登录
            </el-button>
            <el-button type="danger" 
            icon="el-icon-delete" 
            @click="reset">重置
            </el-button>
          </el-form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userName:'',
      userPassword:'',
      //避免表单重复提交
      disabled:false
    }
  },
  methods:{
    //重置用户名和密码
    reset(){
      this.userName = ''
      this.userPassword = ''
    },
    //提交数据到后台
    submit(){
      //满足条件提交
      let that = this
      if (this.userNameVerification() === true 
          && 
          this.userPasswordVerification() === true) {
        this.$axios.get('/login',{
          name:this.userName,
          password:this.userPassword
        })
        .then(response => {
          that.disabled = false
          if (response && response.status === 200) {
            alert('成功了')
          }
        })
        .then(error => {
          console.log(error);
        })
      }
    },

    //目前只考虑是否为空
    //暂时不考虑用户名和密码其他的比如位数验证等规则(可以使用正则)
    //用户名验证
    userNameVerification(){
      if (this.userName.length === 0) {
        alert("用户名不能为空")
        return false
      } else {
        return true
      }
    },
    //用户密码验证
    userPasswordVerification(){
      if(this.userPassword.length === 0){
        alert('密码不能为空')
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<style scoped>
.content{
  background: url('../assets/images/akali-4k.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
}
#form{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 320px;
  width: 430px;
  /* background-color: red; */
  border: 1px solid whitesmoke;
  border-radius: 30px;
  padding-top: 20px;
  background-color: #fff;
}
#inner{
  width: 300px;
  margin: 0 auto;
  margin-top: 40px;
}
</style>