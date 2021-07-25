<template>
  <div>
    <el-header height="70px">
      <div class="head-box">
        <div class="logo">`</div>
        <div class="head-item">
          <div>发现音乐</div>
          <div>我的音乐</div>
          <div>朋友</div>
          <div>商城</div>
          <div>音乐人</div>
        </div>
        <div>下载客户端</div>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search">
        </el-input>
        <div class="head-worker">创作者中心</div>
        <img src="../assets/logo.png" alt="" />
      </div>
    </el-header>
    <div class="headbottom">
      <div class="headbottom-item">
        <div>推荐</div>
        <div>排行榜</div>
        <div>歌单</div>
        <div>主播电台</div>
        <div>歌手</div>
        <div>新碟上架</div>
      </div>
    </div>
    <lunbo></lunbo>
    <div class="main">
      <div class="main-left">
        <hot></hot>
      </div>
      <div class="main-right"></div>
    </div>
  </div>
</template>

<script>
import lunbo from "./lunbo.vue";
import hot from "./main/hot.vue";
export default {
  name: "home",
  components: {
    lunbo,
    hot,
  },
};
</script>

<style scoped>
/* head */
.main {
  margin: 0 450px 0 450px;
  display: flex;
}
.main-left {
  width: 729px;
  height: 1745px;
  padding: 20px 20px 40px;
}
.main-right {
  width: 250px;
  height: 1745px;
  background-color: pink;
}
.el-header {
  background-color: #242424;
  text-align: center;
  line-height: 70px;
}

.head-box {
  margin: 0 350px;
  background-color: #242424;
  display: flex;
}
.logo {
  width: 170px;
  background-image: url("../assets/img/logo.png");
  margin-right: 20px;
}
.head-item {
  display: flex;
}
.head-item div {
  font-size: 14px;
  width: 56px;
  justify-content: space-between;
  color: white;
  padding: 0 19px;
}
.head-box div:nth-child(3) {
  margin-left: 15px;
  font-size: 14px;
  color: #ffffff;
}
.el-input {
  height: 70px;
  width: 158px;
  margin-left: 80px;
  border-radius: 30px;
}
/deep/.el-input__inner {
  border-radius: 30px;
}
.head-worker {
  margin-top: 20px;
  line-height: 32px;
  width: 90px;
  height: 32px;
  color: #cccccc;
  border: 1px #cccccc solid;
  margin-left: 20px;
  border-radius: 30px;
  font-size: 12px;
}
.head-box img {
  display: block;
  width: 30px;
  height: 30px;
  margin: 20px 0 18px 20px;
  border-radius: 30px;
}
.headbottom {
  width: 100%;
  height: 32px;
  background-color: #c20c02;
}
.headbottom-item {
  margin: 0 350px;
}
.headbottom-item div {
  margin-left: 90px;
  padding: 0 10px;
  margin-right: 30px;
  margin-top: 7px;
  float: left;
  font-size: 12px;
  color: #ffffff;
  flex: 1;
  justify-content: space-between;
  line-height: 20px;
  text-align: center;
  height: 20px;
  width: 50px;
  border-radius: 21px;
  background-color: #9b0909;
}
</style>


