<template>
  <div class="template">
    <H1>Hello World</H1>
    <button class="btn" @click="alertFn">弹窗</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  
  methods: {
    alertFn() {

      this.$HlAlert({
        title: "信息提示",
        subMessage: "这是一个信息提示弹窗",
        ensureBtnText: "知道了",
        message: "你好",
        isCloseIcon: true
      },
      () => {
        console.log('确认按钮函数')
      },
      () => {
        console.log('取消按钮函数')
      }
      )
    }
    
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.template {
  height: auto;
  // background: red;
  text-align: center;
}
.button {
  display: block;
  width: 100px;
  height: 30px;
  background: #ccc;
  border: 1px solid #000;
  text-decoration: none;
  color: #000;
  text-align: center;
  line-height: 30px;
  margin: 10px auto;
}
.btn {
  width: 60px;
  height: 30px;
  border: 2px solid;
  border-radius: 3px;
}
</style>
