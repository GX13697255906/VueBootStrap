<template>
    <div class="record">

      <div class="col-12 text-center title">
        <div class="cardNo">鄂A0517l</div>
      </div>
      <br>
      <div class="row show">
        <div class="col-lg-6 col-md-6 col-sm-12 sl">入场时间:</div>
        <div class="col-lg-6 col-md-6 col-sm-12 sr">2017-02-15 18:03:24</div>
      </div>
      <div class="row show">
        <div class="col-lg-6 col-md-6 col-sm-12 sl">查询时间:</div>
        <div class="col-lg-6 col-md-6 col-sm-12 sr">2017-02-15 18:03:24</div>
      </div>
      <div class="row show">
        <div class="col-lg-6 col-md-6 col-sm-12 sl">上次缴费时间:</div>
        <div class="col-lg-6 col-md-6 col-sm-12 sr">2017-02-15 18:03:24</div>
      </div>
      <div class="row show">
        <div class="col-lg-6 col-md-6 col-sm-12 sl">超时停留时间:</div>
        <div class="col-lg-6 col-md-6 col-sm-12 sr">07小时24分钟</div>
      </div>
      <div class="row show">
        <div class="col-lg-6 col-md-6 col-sm-12 sl">打折优惠金额:</div>
        <div class="col-lg-6 col-md-6 col-sm-12 sr">0.01元</div>
      </div><div class="row show">
      <div class="col-lg-6 col-md-6 col-sm-12 sl">超时缴费金额:</div>
      <div class="col-lg-6 col-md-6 col-sm-12 sr">0.01元</div>
    </div>


    </div>
</template>

<script>
    export default {
        name: 'timeOutRecord'
    }
</script>

<style scoped>
  .row,.show{
    margin-left: 0rem;
    margin-right: 0rem;
  }
  .record{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .col-12,.text-center,.title{
    color: #2e8ded;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .row{
  font-size: 1.5rem;
    width: 100%;
  }
  .sl{
    background-color: #bbbbbb;
    border: 0.5px solid #000000;
    padding-left: 0rem;
    padding-right: 0rem;
  }
  .sr{
    background-color: #eeeeee;
    border: 0.5px solid #000000;
    padding-left: 0rem;
    padding-right: 0rem;
  }
</style>
