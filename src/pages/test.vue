<template>
  <div class="hello">
    <cutImg label="身份证正面" url="1" v-model="idCard" @getUrl="(value) => getdataImg('idCard',value)" />
  </div>
</template>

<script>
import cutImg from "@/components/cutImg";
import { intercept } from "../service/api";
import config from "../utils/config";
import Vue from "vue";
import { Field } from "vant";
Vue.use(Field);
export default {
  data() {
    return {
      imgUrl: "",
      idCard: "",
      cardImg:""
    };
  },
  mounted() {},
  created() {},
  methods: {
    async getdataImg(key, value) {
      this.cardImg[key] = value;
      // console.log(this.cardImg);
    }
  },
  components: {
    cutImg
  }
};
</script>
<style scoped lang="scss">
.cropper-content {
  width: 350px;
  .cropper {
    width: auto;
    height: 300px;
  }
}
.dialog-footer {
  width: 100%;
  height: 50px;
}
</style>
