<template>
  <div class="login">

    <div class="card-title"><h2>商户登录</h2></div>

    <div class="div_username">
      <div class="row">
        <div class="input_username col-12">
          <input id="username" name="username" type="text" placeholder="请输入用户名" class="form-control"/>
        </div>
      </div>
    </div>

    <div class="div_password">
      <div class="row">
        <div class="input_password col-12">
          <input id="password" name="password" type="password" placeholder="请输入密码" class="form-control"/>
        </div>
      </div>
    </div>

    <div class="div_code">
      <div class="row">
        <div class="input_code col-7">
          <input id="code" name="code" type="text" placeholder="验证码" class="form-control"/>
        </div>
        <div class="input_setcode col-5">
          <button id="setcode" name="setcode" class="form-control">QWERT</button>
        </div>
      </div>
    </div>

    <br/>
    <div class="div_btn">
      <div class="row">
        <div class="col-12">
          <button class="btn">登录</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
  .login{
    width: 95%;
    line-height: 1.5rem;
    margin: 30px auto;
  }
  .card-title{
    padding-top: 20px;
  }
  .div_username,.div_password,.div_code,input{
    border-top: #FFFFFF 0px solid;
    border-left: #FFFFFF 0px solid;
    border-right: #FFFFFF 0px solid;
    border-bottom-color: #000000;
  }
  .div_username,.div_password,.div_code,.div_btn{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  input{
    text-align: center;
    background-color: #D6D8DB;
  }
  input:focus {
    background-color: #D6D8DB;
    outline: none;
    box-shadow:none;  /*去除点击后的阴影*/
    border-bottom: #000000 1px solid;
  }
  .col-5{
    padding-left: 0rem;
    padding-right: 0rem;
  }
  .col-7{
    padding-right: 0rem;
  }
  .form-control{
    width: 100%;
    border-radius: 0rem;
  }
  .btn{
    width: 100%;
    background-color: #6097ff;
  }
  .row{
    padding-left: 0rem;
    padding-right: 0rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }
  #setcode{
    background: -webkit-linear-gradient(left, #b3b5b8, #d3d5d7, #edeff1, #FFFFFF);
    border-bottom-left-radius: 0rem;
    border-top-left-radius: 0rem;
    border-left: 0px;
    box-shadow:none;  /*去除点击后的阴影*/
    padding-bottom: 0rem;
    border-bottom: 0rem;
  }
  #code{
    border-radius: 0rem;
    border-right: 0px;
    box-shadow:none;  /*去除点击后的阴影*/
  }
</style>
