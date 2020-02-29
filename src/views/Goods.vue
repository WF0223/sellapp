<template>
  <div class="goods">
    <div class="main">
      <Row>
        <i-col span="8" class="left-div">
          <ul class="content">
            <div @click="title(index)" :class="{list:true,selected:index==curs}" v-for="(item,index) in list" :key="item.name">
              <img style="width:16px;height:16px" v-show="item.type==1" src="../assets/imgs/decrease_3@2x.png">
              <img style="width:16px;height:16px" v-show="item.type==2" src="../assets/imgs/discount_1@2x.png">
              <span>{{item.name}}</span>
            </div>
          </ul>
        </i-col>
        <i-col span="16" class="menu">
          <ul class="content">
            <div :id="index" class="foods" v-for="(item,index) in list" :key="item.id">
              <h5 >{{ item.name }}</h5>
              <!-- 标题下方的儿子 -->
              <div v-for="child in item.foods" :key="child.id" class="foods-div">
                <img :src="child.icon" alt />
                <label>{{ child.name }}</label>
              </div>
            </div>
          </ul>
        </i-col>
      </Row>
    </div>
    <!-- 购物车 -->
    <div class="footer">
      <div class="left">
        <div class="shop">
          <div class="font">
            <img src="../assets/imgs/shoppingcar.png" alt />
          </div>
        </div>
        <div class="settment">
          <span>￥0</span>
          <span>另需配送费￥0元</span>
        </div>
      </div>
      <div class="right">￥起送</div>
    </div>
  </div>
</template>

<script>
import { getgoods } from "../api/apis";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: [],
      curs:0//当前选项卡选中的索引
    };
  },
  created() {
    getgoods().then(res => {
      this.list = res.data.data;
      console.log(res.data);
    });
  },
  mounted() {
    // console.log(document.querySelector(".left-div"))
    // console.log(document.querySelector(".menu"))
//获取节点。设置容器
    new BScroll(document.querySelector(".left-div"),{click:true});
    this.rigDiv = new BScroll(document.querySelector(".menu"));
  },
  methods:{
    // 点击激活左侧背景色
    title(index){
      this.curs=index;
      this.rigDiv.scrollToElement(document.getElementById(index),600)
    }
  }
};
</script>

<style lang="less">
.goods {
  .main {
    display: flex;
    justify-content: space-between;
    height: 100% !important;
    .ivu-row {
      width: 100%;
      height: 320px;;
      overflow: scroll;
      .ivu-col-span-8 {
        height: 320px;
        overflow: scroll;
        .list {
          width: 100% !important;
          background-color: #f4f5f7;
          position: relative;
          z-index: 10;
          padding-left: 10px;
          padding-right: 10px;
          display: flex;
          span {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 50px;
            border-bottom: 1px solid #dddee0;
          }
        }
        .selected{
          background-color: #fff;
        }
      }
      .ivu-col-span-16 {
        height: 320px;
        overflow: scroll;
        .foods {
          overflow: scroll;
          h5 {
            width: 100%;
            height: 20px;
            background-color: #f4f5f7;
            color: #9ca1a5;
            text-align: left;
            line-height: 20px;
          }
          .foods-div {
            padding: 10px;
            display: flex;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
  }
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #141c27;
  position: fixed;
  bottom: 0px;
  display: flex;
  z-index: 50;
  .left {
    flex: 3;
    color: #919095;
    display: flex;

    .shop {
      flex: 1;
      .font {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #141c27;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        left: 10px;
        top: -15px;
        vertical-align: middle;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .settment {
      flex: 3;
      padding-top: 15px;
      padding-bottom: 15px;
      display: flex;
      justify-content: space-around;
      span:nth-child(1) {
        width: 22%;
        border-right: 1px solid #919095;
      }
    }
  }
  .right {
    flex: 1;
    line-height: 50px;
    background-color: #2b343b;
    color: #9c9d9f;
  }
}
</style>