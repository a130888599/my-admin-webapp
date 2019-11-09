<template>
  <div class="login">
    <h1>Login Page</h1>
    <div class="slideShadow" v-show="showSlide"></div>
    <div class="loginBox">
      <h2 class="loginH2">
        <strong>Vue</strong> 后台管理系统
      </h2>
      <div class="loginCon">
        <div class="titleDiv">
          <h3>Sign up now</h3>
          <p>Enter your username and password to log on:</p>
          <i class="el-icon-key"></i>
        </div>
        <el-form ref="loginForm" :model="ruleForm" :rules="rules">
          <el-form-item prop="user">
            <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="ruleForm.user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="ruleForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-button type="primary" class="loginBtn">登陆</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifyObj: null,
      text: "向右滑动",
      showSlide: false,
      ruleForm: {
        user: "admin",
        password: "123456"
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 15, message: "长度在3到5个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;
  background: url(../../assets/pageBg/loginBg.jpg) no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}
.loginBox {
  height: 455px;
  width: 550px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  // margin-top: -287px;
  transform: translate(-50%, -50%);
  // background-color: red;
}
.loginH2 {
  font-size: 38px;
  color: #fff;
  text-align: center;
}
.loginCon {
  margin-top: 30px;
  background: #eee;
  border-radius: 4px;
  .titleDiv {
    padding: 0 28px;
    background-color: #fff;
    position: relative;
    height: 120px;
    border-radius: 4px 4px 0 0;
    h3 {
      font-size: 22px;
      color: #555;
      font-weight: initial;
      padding-top: 23px;
    }
    p {
      font-size: 16px;
      color: #888;
      padding-top: 12px;
    }
    i {
      font-size: 65px;
      color: #ddd;
      position: absolute;
      right: 27px;
      top: 29px;
    }
    .el-form {
      padding: 25px 25px 30px 25px;
      background: #eee;
      border-radius: 0 0 4px 4px;
    }
    .el-form-item {
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  }
}
.loginBtn {
  width: 100%;
  background-color: #19b9e7;
}
</style>