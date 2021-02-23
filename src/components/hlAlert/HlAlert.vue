<template>
  <div class="hl-pop-wrap">
    <div class="hl-pop-wrap-bg" @click="close(1)"></div>
    <div class="hl-pop-content">
      <div class="hl-alert-close" @click="close(1)" v-if="isCloseIcon">
        <i class="iconfont icon-tubiao-qingchu-copy-copy fa" aria-hidden="true"></i>
      </div>
      <div class="hl-pop-title" v-html="title" v-if="title"></div>
      <div class="hl-pop-detail">
        <div class="hl-pop-message" v-html="message" v-if="message"></div>
        <div
          class="hl-pop-submessage"
          v-html="subMessage"
          v-if="subMessage"
        ></div>
      </div>
      <div class="hl-alert-btn-group">
        <button class="u-hl-base-btn u-alert-ensure" @click="ensure">
          {{ ensureBtnText }}
        </button>
        <button class="u-hl-base-btn u-alert-close" @click="close(2)">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "111"
    };
  },
  methods: {
    ensure() {
      this.isVisible = false;
      this.ensureHanlder();
      this.$el.parentNode.removeChild(this.$el);
    },
    close(mode) {
      this.isVisible = false;
      mode === 2 && this.cancelHandler();
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>

<style lang="scss">
.hl-pop-wrap {
  .hl-pop-content {
    width: 320px;
    height: 215px;
    border: 1px solid rgb(130, 130, 130);
    .hl-pop-title {
      width: 100%;
      height: 40px;
      line-height: 39px;
      font-size: 18px;
      text-align: left;
      padding-left: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid rgb(130, 130, 130);
    }
    .hl-alert-close {
      position: relative;
      .fa {
        font-style: normal;
        position: absolute;
        width: 39px;
        height: 39px;
        // background: red;
        right: 0px;
        top: 0px;
        text-align: center;
        line-height: 39px;
      }
    }
    .hl-pop-detail {
      margin: 40px 0;
      width: 100%;
      height: 40px;
    }
    .hl-alert-btn-group {
      overflow: hidden;
      .u-hl-base-btn {
        width: 95px;
        height: 35px;
        border: none;
        border-radius: 3px;
        float: left;
        margin-left: 55px;
      }
      .u-alert-close {
        float: right;
        margin-left: 0;
        margin-right: 55px;
      }
    }
  }
}
</style>