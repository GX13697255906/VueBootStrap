<template>
    <div class="begin">

      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#">页面展示</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">

          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="login" class="nav-link">登录</router-link>
            </li>
            <li class="nav-item">
              <router-link to="discount" class="nav-link">打折</router-link>
            </li>
            <li class="nav-item">
              <router-link to="qrDiscount" class="nav-link">二维码打折</router-link>
            </li>
          </ul>

        </div>
      </nav>
      <router-view></router-view>

    </div>
</template>

<script>
export default {
  name: 'begin'
}
</script>

<style scoped>

</style>
