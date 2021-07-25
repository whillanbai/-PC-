<template>
  <div>
    <div class="hot-head">
      <ul class="hot-head-item">
        <li class="el-icon-cold-drink"></li>
        <li class="tuijiang">热门推荐</li>
        <li>华语</li>
        <li>流行</li>
        <li>摇滚</li>
        <li>民谣</li>
        <li>电子</li>
        <li class="el-icon-right"></li>
        <li class="more">更多</li>
      </ul>
    </div>
    <ul class="hot-main">
      <li class="hot-main-yx">
        <div class="hot-main-item-img">
          <img
            src="https://p2.music.126.net/3I-73aQn3YCw-2cZdK1fQw==/109951166027478939.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>私人雷达 | 根据听歌记录为你打造</p>
      </li>
      <li class="hot-main-xy">
        <div class="hot-main-item-img">
          <img
            src="https://p2.music.126.net/HDwLd_yXK0wUBzpbtLPagg==/109951163508894004.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>她没那么喜欢你，只是刚好遇见你</p>
      </li>
      <li class="hot-main-xy">
        <div class="hot-main-item-img">
          <img
            src="http://p1.music.126.net/bjG6tiohuxZeRUuhktaMAg==/3412884131870384.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>恶作剧之吻 电视原声带</p>
      </li>
      <li class="hot-main-xy">
        <div class="hot-main-item-img">
          <img
            src="https://p2.music.126.net/FkD_nltOo5gTrxYkU0OMkw==/18620229418586290.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>Seventeen哄你睡觉啦੭ ᐕ)੭*⁾⁾</p>
      </li>
      <li class="hot-main-yx">
        <div class="hot-main-item-img">
          <img
            src="https://p2.music.126.net/pkMDYU-bGPViBNl7pB6Izg==/109951163631290048.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>适合学生党写作业刷题学习的歌单</p>
      </li>
      <li class="hot-main-xy">
        <div class="hot-main-item-img">
          <img
            src="https://p2.music.126.net/KZ0VfIoFYsxpjz9sTQuLVQ==/17687843556430013.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>孙燕姿-免费歌曲</p>
      </li>
      <li class="hot-main-xy">
        <div class="hot-main-item-img">
          <img
            src="http://p1.music.126.net/bmA_ablsXpq3Tk9HlEg9sA==/2002210674180203.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>根据你喜欢的单曲《恶作剧》推荐</p>
      </li>
      <li class="hot-main-xy">
        <div class="hot-main-item-img">
          <img
            src="http://p1.music.126.net/-7gz68N_fr_bikp_-Q3hjA==/109951165449481018.jpg"
            alt=""
          />
          <div class="hot-main-item-xia">
            <span class="el-icon-s-promotion"></span>
            <span class="hot-main-number">743486万</span>
            <span class="hot-main-right el-icon-star-on"></span>
          </div>
        </div>
        <p>根据你喜欢的单曲《遇见》推荐</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPhoneLogin } from "../../network/login";
import { getMusicList } from "../../network/musiclist";
export default {
  name: "hot",
  data() {
    return {
      musiclist: [],
      user: {
        phone: "13479636407",
        password: "kzj2372966718",
      },
    };
  },
  created() {
    this.getPhoneLogin(this.user.phone, this.user.password);
    this.getMusicList();
  },
  methods: {
    getMusicList() {
      getMusicList().then((res) => {
        this.musiclist = res;
        if (res.code == "200") {
          this.musiclist = res.recommend;
          console.log(this.musiclist);
        } else {
          console.log(xxxx);
        }
      });
    },
    getPhoneLogin(phone, password) {
      getPhoneLogin(phone, password).then((res) => {
        console.log(res);
        if (res.code !== 200) {
          return this.$message.error("登录失败");
        }
        this.$message.success("登录成功");
        /* 1.将登录成功后的tokn，保存到客户端 的sessionStorage中
        2.跳转到home */
        window.sessionStorage.setItem("token", res.token);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.hot-head-item .el-icon-cold-drink {
  font-size: 20px;
  align-items: center;
  line-height: 35px;
  padding: 0 10px 0 10px;
  color: pink;
}
.hot-head-item .tuijiang {
  font-size: 20px;
  color: #333333;
}
.hot-head {
  width: 689px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-bottom: 2px #c10d0c solid;
}
.hot-head-item li {
  float: left;
}
.hot-head-item li {
  font-size: 12px;
  padding: 0px 0 0 20px;
  color: #666666;
}
.hot-head .hot-head-item .more {
  float: right;
  font-size: 12px;
  color: #666666;
  padding-right: 4px;
}
.hot-head .hot-head-item .el-icon-right {
  float: right;
  font-size: 12px;
  color: red;
  align-items: center;
  line-height: 35px;
  padding-left: 0;
}
.hot-main {
  display: block;
  margin: 20px 0;
  background-color: pink;
}
.hot-main-item-img {
  width: 140px;
  height: 140px;
  position: relative;
  top: 0;
  left: 0;
}
.hot-main-item-img img {
  width: 100%;
  height: 100%;
}
.hot-main-item-xia {
  align-items: center;
  line-height: 27px;
  width: 140px;
  height: 27px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: #ccc;
}
.hot-main li {
  float: left;
}
.hot-main-item-xia .el-icon-s-promotion {
  margin: 0 5px;
  font-size: 11px;
}
.hot-main-item-xia .hot-main-number {
  margin-bottom: 2px;
  font-size: 11px;
}
.hot-main-item-xia .hot-main-right {
  margin-left: 40px;
  font-size: 20px;
}
.hot-main li p {
  width: 140px;
  height: 38px;
  font-size: 14px;
  color: #000000;
  margin-top: 10px;
}
.hot-main-xy {
  padding: 0 0 30px 42px;
}
.hot-main-yx {
  padding: 0 0 30px 0;
}
</style>