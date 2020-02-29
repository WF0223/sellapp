<template>
  <div class="goods">
    <div class="main">
      <!-- 左边 -->
      <div class="left-div">
        <ul class="content">
          <div @click="title(index)"
            :class="{list:true,selected:index==curs}"
            v-for="(item,index) in list"
            :key="item.name">
            <img style="width:16px;height:16px"
              v-show="item.type==1"
              src="../assets/imgs/decrease_3@2x.png"
            />
            <img
              style="width:16px;height:16px"
              v-show="item.type==2"
              src="../assets/imgs/discount_1@2x.png"
            />
            <span>{{item.name}}</span>
          </div>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="menu">
        <ul class="content">
          <div :id="index" class="foods" v-for="(item,index) in list" :key="item.id">
            <h5>{{ item.name }}</h5>
            <!-- 标题下方的儿子 -->
            <div v-for="child in item.foods" :key="child.id" class="foods-div">
              <img :src="child.icon" alt />
              <label>{{ child.name }}</label>
            </div>
          </div>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getgoods } from "../api/apis";
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      list: [],
      curs: 0 //当前选项卡选中的索引
    };
  },
  created() {
    getgoods().then(res => {
      this.list = res.data.data;
      // console.log(res.data);
    });
  },
  mounted() {
    console.log(document.querySelector(".left-div"))
    console.log(document.querySelector(".menu"))
    //获取节点。设置容器
    new BScroll(document.querySelector(".left-div"), { click: true });
    this.rigDiv = new BScroll(document.querySelector(".menu"));
  },
  methods: {
    // 点击激活左侧背景色
    title(index) {
      this.curs = index;
      this.rigDiv.scrollToElement(document.getElementById(index), 600);
    }
  }
};
</script>

<style lang="less">
.goods {
  .main {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 320px;
    // overflow: scroll;
    //左边
    .left-div {
      width: 100px;
      height: 100%;
      overflow: scroll;
      .list {
        width: 100%;
        background-color: #f4f5f7;
        // position: relative;
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
      .selected {
        background-color: #fff;
      }
    }
    // 右边
    .menu{
      flex: 1;
      height: 100%;
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

</style>