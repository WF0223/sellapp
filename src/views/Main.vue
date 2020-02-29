<template>
  <div id="main">
    <div class="header">
      <div :style="{background:'url('+seller.avatar+')'}">
        <div class="logo">
          <div class="left">
            <img :src="seller.avatar" alt />
          </div>
          <div class="center">
            <p>
              <span class="brand">
                <img src="../assets/imgs/brand@2x.png" alt />
              </span>
              <span style="font-weight: bold;font-size:16px">{{seller.name}}</span>
            </p>
            <p>{{seller.description}} / {{seller.deliveryTime}}分钟送达</p>
            <p>
              <span class="cut">
                <img src="../assets/imgs/decrease_3@2x.png" alt />
              </span>
              {{seller.supports.map((obj)=>{return obj.description})}}
            </p>
          </div>
          <div class="right">
            <div>5个 ></div>
          </div>
        </div>
        <div class="notice">
          <p>
            <span>
              <img src="../assets/imgs/bulletin@2x.png" alt />
            </span>
            {{seller.bulletin}}
          </p>
        </div>
      </div>
      <div class="nav">
        <router-link to="/Goods" active-class="u-link--Active">商品</router-link>
        <router-link to="/evaluate" active-class="u-link--Active">评价</router-link>
        <router-link to="/business" active-class="u-link--Active">商家</router-link>
      </div>
    </div>

    <div class="Content">
      <!-- 二级路由出口 -->
      <router-view />
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
import { getSeller } from "../api/apis";
export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    getSeller().then(res => {
      this.seller = res.data.data;
      sessionStorage.setItem("id", res.data.data.id); //保存id
    });
  }
};
</script>

<style lang="less">
* {
  padding: 0px;
  margin: 0px;
}
#main {
  width: 100%;
  .header {
    width: 100%;
    height: 185px;
    .logo {
      height: 120px;
      padding-top: 30px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      background-color: rgba(0, 0, 0, 0.2);

      .left {
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background-color: #000;
        margin-left: 5px;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .center {
        padding-top: 8px;
        text-align: left;
        color: #fff;
        text-overflow: ellipsis;
        width: 60%;
        white-space: nowrap;
        overflow: hidden;
        .brand {
          img {
            width: 25px;
            height: 15px;
          }
        }
        .cut {
          img {
            width: 15px;
            height: 15px;
          }
        }
      }
      .right {
        display: flex;
        align-items: flex-end;
        div {
          font-size: 12px;
          width: 35px;
          height: 20px;
          background-color: rgba(0, 0, 0, 1.5);
          border-radius: 5px;
          color: #fff;
        }
      }
    }
    .notice {
      height: 25px;
      padding: 5px;
      line-height: 15px;
      background-color: rgba(0, 0, 0, 0.6);
      p {
        text-overflow: ellipsis;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        color: #fff;
        span {
          img {
            width: 25px;
            height: 15px;
          }
        }
      }
    }
    .nav {
      height: 40px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #e5e6e8;
      a {
        height: 40px;
        line-height: 40px;
        color: #000000;
      }
      .u-link--Active {
        color: #ed0b0d;
      }
    }
  }
  .Content {
    height: 100%;
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
}
</style>