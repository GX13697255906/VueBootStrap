<template>
  <div class="login">

    <div class="card-title text-center">商户登录</div>

    <div class="div_username">
      <div class="row">

        <div class="col-2">
          <div class="glyphicon glyphicon-user"></div>
        </div>

        <div class="input_username col-10">
          <input id="username" name="username" type="text" placeholder="请输入用户名" class="form-control"/>
        </div>
      </div>
    </div>

    <div class="div_password">
      <div class="row">
        <div class="col-2">
          <div class="glyphicon glyphicon-lock"></div>
        </div>
        <div class="input_password col-10">
          <input id="password" name="password" type="password" placeholder="请输入密码" class="form-control"/>
        </div>
      </div>
    </div>

    <div class="div_code">
      <div class="row">
        <div class="col-2">
          <div class="glyphicon glyphicon-check"></div>
        </div>
        <div class="input_code col-5">
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
    margin: 50px auto;
  }
  .card-title{
    font-size: 20px;
    font-family: 宋体;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    width:6rem;
    height:6rem;
    line-height: 6rem;
    vertical-align:middle;
    font-weight:bold;
    border-radius: 50%;
    background-color: #ffffff;
  }
  .div_username,.div_password,.div_code,input{
    /*border-top: #000000 0px solid;*/
    /*border-left: #000000 0px solid;*/
    /*border-right: #000000 0px solid;*/
    /*border-bottom-color: #000000;*/
  }
  .div_username,.div_password,.div_code,.div_btn{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  input{
    border: 0rem;
    text-align: left;
    background-color: #ffffff;
  }
  input:focus {
    /*background-color: #D6D8DB;*/
    outline: none;
    box-shadow:none;  /*去除点击后的阴影*/
    /*border-bottom: #000000 1px solid;*/
  }
  .glyphicon{
    top: 0.6rem;
  }
  .col-2{
    vertical-align: bottom;
    background-color: #7f7f7f;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }
  .col-5{
    padding-left: 0rem;
    padding-right: 15px;
  }
  .col-10{
    padding-left: 0rem;
  }
  .col-12{
    padding-left: 0rem;
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
    /*padding-right: 0px;*/
    border-bottom: 0rem;
  }
  #code{
    text-align: center;
    border-radius: 0rem;
    border-right: 0px;
    box-shadow:none;  /*去除点击后的阴影*/
  }
  .input_code{
    padding-right: 0rem;
  }
</style>
