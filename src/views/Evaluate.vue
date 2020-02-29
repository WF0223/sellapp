<template>
  <div id="evaluate">
    <!-- 评分 -->
    <div class="grade">
      <div class="grade-all">
        <h2 style="color:#fe9700">3.9</h2>
        <h4>综合评分</h4>
        <h6 style="color:#92979b">高于周边商家69.2%</h6>
      </div>
      <div class="grade-sort">
        <p>
          服务态度
          <Rate allow-half v-model="valueHalf" />
        </p>
        <p>
          服务态度
          <Rate allow-half v-model="valueHalf" />
        </p>
        <p>送达时间分钟</p>
      </div>
    </div>
    <!-- 评价 -->
    <div class="eval">
      <div class="but">
        <div class="but-t">
          <Button type="info">全部</Button>
          <Button type="success">满意</Button>
          <Button type="error">不满意</Button>
        </div>
        <div class="but-icon">
          <Icon style="fontSize:24px" type="ios-checkmark-circle-outline" />只看有内容的评价
        </div>
      </div>
      <div class="user">
        <img src="" alt="">
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { getratings } from "../api/apis.js";
export default {
  data() {
    return {
      valueHalf: 3.5,
      ratings: {}
    };
  },
  created() {
    getratings().then(res => {
      this.ratings = res.data.data;
      console.log(res.data.data);
    });
  }
};
</script>

<style lang="less">
#evaluate {
  background-color: #f4f5f7;
  .grade {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 20px;
    background-color: #fff;
    .grade-all {
      padding-right: 2px;
      border-right: 1px solid #e6e6e6;
    }
    .grade-sort {
      padding-left: 2px;
    }
  }
  .eval {
    width: 100%;
    background-color: #fff;
    .but {
      height: 100px;
      border-bottom: 1px solid #e6e6e6;
      .but-t {
        width: 90%;
        margin: auto;
        padding-top: 14px;
        padding-bottom: 14px;
        text-align: left;
        border-bottom: 1px solid #e6e6e6;
        button {
          margin-right: 10px;
        }
      }
      .but-icon {
        width: 100%;
        height: 40px;
        padding-left: 14px;
        color: #b7babf;
        display: flex;
        align-items: center;
      }
    }
    .user{

    }
  }
}
</style>