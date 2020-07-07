<template >
  <div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import config from "./utils/config";
export default {
  data() {
    return {
      goBackShow: false,
    };
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back();
      } else {
        this.$router.push("/");
      }
    }
  },
  async created() {},
  computed: {},
  watch: {}
};
</script>
<style lang="scss">

</style>