<template>
  <div class="swiper">
    <div class="box">
      <el-carousel height="280px" @change="changeUrl()">
        <el-carousel-item v-for="(item, index) in swiper" :key="index">
          <el-image
            :src="item.imageUrl"
            fit="contain"
            style="height: 100%; width: 100%"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { getSwiper } from "../network/swiper";
export default {
  name: "lunbo",
  data() {
    return {
      swiper: [],
    };
  },
  created() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      getSwiper().then((res) => {
        this.swiper = res.banners;
      });
    },
    changeUrl() {
      /* console.log(1); */
    },
    getId(id) {
      console.log(id);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper {
  background-image: url("../assets/img/109951166208000663.jpg");
  /*   filter: blur(10px); */
}
.box {
  margin: 0 350px;
}
.el-carousel {
  height: 280px;
  width: 1220px;
  justify-content: center;
  align-items: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-image: url("../assets/img/1.png");
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-image: url("../assets/img/2.png");
} */
</style>