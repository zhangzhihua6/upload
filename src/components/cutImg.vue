<template>
  <div class="hello">
    <van-field v-bind="$attrs" required label-width="120px">
      <template #input>
        <van-uploader :after-read="afterRead" :before-delete="afterDelete" v-model="fileList" :max-count="1" v-bind="$attrs">
          <img class="idCardImg" style="width:150px;height:80px;" v-if="url == 1" src="../../static/images/idCard1.png" alt />
          <img class="idCardImg" style="width:150px;height:80px;" v-if="url == 2" src="../../static/images/idCard2.png" alt />
          <img class="idCardImg" style="width:150px;height:80px;" v-if="url == 3" src="../../static/images/idCard3.png" alt />
        </van-uploader>
      </template>
    </van-field>
    <van-popup v-model="show" :close-on-click-overlay="false">
      <div class="cropper-content">
        <div class="cropper" style="text-align:center">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :fixed="option.fixed"
            :fixedNumber="option.fixedNumber"
            :centerBox="option.centerBox"
            :infoTrue="option.infoTrue"
            :fixedBox="option.fixedBox"
            @realTime="realTime"
          ></vueCropper>
        </div>
      </div>
      <div class="dialog-footer">
        <van-button type="default" @click="cancel">取 消</van-button>
        <van-button type="primary" @click="finish" :loading="loading" loading-text="上传中...">确认</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup, Uploader, Button } from "vant";
Vue.use(Popup)
  .use(Uploader)
  .use(Button);
import { VueCropper } from "vue-cropper";
import { intercept } from "../service/api";
import config from "../utils/config";
export default {
  props: {
    url: {
      type: String
    },
  },
  data() {
    return {
      imgUrl: "",
      show: false,
      // 裁剪组件的基础配置option
      option: {
        img: "", // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 0.8, // 裁剪生成图片的质量
        canMove: true, //上传图片是否可以移动
        outputType: "jpg", // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 400, // 默认生成截图框宽度
        autoCropHeight: 250, // 默认生成截图框高度
        fixedBox: false, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [8, 5], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      picsList: [], //页面显示的数组
      // 防止重复提交
      loading: false,
      fileList: []
    };
  },
  mounted() {},
  created() {},
  methods: {
    finish() {
      this.$refs.cropper.getCropData(async fileImg => {
        this.loading = true;
        try {
          const file = fileImg;
          const data = new FormData();
          data.append("img", file);
          this.$axios
            .post(
              config.apiUrl + "api/default/Uploadpersonal?t=AXN81AXWPHO",
              data,
              {
                headers: {
                  "Content-Type": "multipart/form-data"
                }
              }
            )
            .then(res => {
              let fileurl = config.apiUrl + res.data.path;
              if (res.status == 200) {
                this.fileList.push({
                  url: fileurl
                });
                this.$emit('getUrl',this.fileList[0].url)
                this.option.img = "";//重置组件数据
                this.loading = false;
                this.show = false;
              }
            })
            .catch(err => {});
        } catch {}
      });
    },
    cancel() {
      this.show = false;
      this.fileList = [];
    },
    // 实时预览函数
    realTime(data) {
      // console.log("realTime",data);
      // this.previews = data;
    },
    afterRead(file) {
      this.fileList = [];
      let imgUrl = file.content;
      if (imgUrl) {
        this.show = true;
        // 上传成功后将图片地址赋值给裁剪框显示图片
        this.option.img = imgUrl;
      }
    },
    afterDelete(file){
      this.fileList = [];
      this.$emit('getUrl',this.fileList)
    }
  },
  components: {
    VueCropper
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
