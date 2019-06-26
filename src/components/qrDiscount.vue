<template>
  <div class="discount">

    <div>
      <h2 class="park">二维码打折</h2>
    </div>
    <br/>

    <div class="container">

      <div class="row merchant">
        <div class="col-6 ri">商&#8194;户&#8194;名&#8194;称&#8194;:</div>
        <div class="col-6">维也纳大酒店</div>
      </div>

      <div class="row discprog">
        <div class="col-6 ri">打&#8194;折&#8194;方&#8194;案&#8194;:</div>
        <div class="col-6 text-center">
          <div class="discountType" @click="discountSel()">
            ...
          </div>
        </div>
      </div>

      <div class="row disnumber">
        <div class="col-6 ri"><button class="btn btn-success">更新有效期</button> </div>
        <div class="col-6">
          <input type="text" id="test" class="date" @click="selTime()" placeholder="选择时间"/>
        </div>
      </div>

    </div>

    <div class="dis_btn">

      <div class="row merchant">
        <div class="col-5">
          <button class="btn btn-success dis_pre">二维码打折</button>
        </div>
        <div class="col-2"></div>
        <div class="col-5">
          <button class="btn btn-success dis_plate">车牌打折</button>
        </div>
      </div>

      <div class="row discprog">
        <div class="col-12">
          <button class="btn btn-success searchSet">查询/设置</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'qrDiscount',
    mounted(){

    },
    methods: {
      selTime: function(){
        laydate.render({
          elem: '#test'
          ,type: 'datetime'
        });
      },
      discountSel: function () {
        layer.open({
          title: '打折方式',
          scrollbar: true,area: ['70px', '40%'],
          shade: 0.8,
          content: "<div style='width: 100%;text-align:center;'>" +
            "<div style='width:50%;display: inline-table;'>免费</div>" +
            "<div style='width:50%;display: inline-table;'>九折</div>" +
            "</div>"+
            "<div style='width: 100%;text-align:center;'>" +
            "<div style='width:50%;display: inline-table;'>八折</div>" +
            "<div style='width:50%;display: inline-table;'>七折</div>" +
            "</div>"+
            "<div style='width: 100%;text-align:center;'>" +
            "<div style='width:50%;display: inline-table;'>六折</div>" +
            "<div style='width:50%;display: inline-table;'>五折</div>" +
            "</div>"
        });
      }
    }
  }

</script>

<style scoped>
  .discount {
    width: 100%;
    line-height: 1.5rem;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  .park {
    font-family: 宋体;
    font-weight: 700;
  }

  .container {
    width: 95%;
    background-color: #ffffff;
    font-size: 1rem;
  }

  .ri {
  }

  .dis_btn {
    width: 95%;
    font-size: 1rem;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    line-height: 2rem;
  }

  .dis_pre, .dis_plate {
    width: 100%;
  }

  .merchant, .discprog {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .discountType {
    border: 1px #000000 solid;
    border-radius: .5rem;
    background-color: #E8E8E8;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: auto;
    padding-top: auto;
  }

  .searchSet {
    width: 100%;
  }

  .col-5, .col-6 {
    font-family: 宋体;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    line-height: 2rem;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .col-12 {
    padding-left: 0rem;
    padding-right: 0rem;
  }

  .btn-success {
    background-color: #6097ff;
  }
  .date{
    border-radius: .5rem;
    text-align: center;
    outline: none;
    width: 80%;
  }
</style>
