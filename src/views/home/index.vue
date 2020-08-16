<template>
  <div class="wrapper">
    <img class="tipImg tip" src="../../assets/scape.png" alt="">
    <div class="mengban"></div>
    <div class="tipWord tip">请将屏幕旋转90度横屏浏览</div>
    <div class="topBigPic noTop">
      <img src="../../assets/bg.png" alt="">
    </div>
    <div class="container">
      <img src="../../assets/1.png" alt="英雄" class="person">
      <img src="../../assets/2.png" alt="英雄" class="person">
      <img src="../../assets/3.png" alt="英雄" class="person">
      <img src="../../assets/4.png" alt="英雄" class="person">
      <img src="../../assets/5.png" alt="英雄" class="person">
      <img src="../../assets/6.png" alt="英雄" class="person">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ajaxData: ''
    }
  },
  mounted () {
    this.getSomeData()
  },
  methods: {
    getSomeData () {
      let that = this
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'https://nei.netease.com/api/apimock-v2/e87739b244ae3706efa082ed6c8070b0/unDiagnoseCase', true)
      xhr.send()
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          that.ajaxData = JSON.parse(xhr.responseText).data[0].caseType
          alert('这个是原生AJAX请求回来的数据：' + that.ajaxData)
        }
      }
    }
  }
}
</script>

<style>
.wrapper {
  background: #111;
  height: auto;
}
.container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (orientation:portrait) {
  html {
    font-size: 100px;
  }
  .tipImg {
    width: 26%;
    height: auto;
    position: absolute;
    z-index: 100;
    left: 50%;
    top: 50%;
    margin-left: -13%;
    transform: rotate(0);
    animation:play 2s linear infinite;
  }
  .mengban {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #111;
    opacity: .5;
  }
  .tipWord {
    width: 100%;
    font-size: 0.2rem;
    color: orange;
    text-align: center;
    position: absolute;
    bottom: 20%;
  }
  @keyframes play {
    0%
    {
      transform: rotate(0);
    }
    20%
    {
      transform: rotate(45deg);
    }
    40%
    {
      transform: rotate(90deg);
    }
    60%
    {
      transform: rotate(90deg);
    }
    80%
    {
      transform: rotate(45deg);
    }
    90%
    {
      transform: rotate(0);
    }
  }
  .noTop {
    display: none;
  }
}

@media screen and (orientation:landscape) {
  html {
    font-size: 100px;
  }
  .wrapper {
    height: 100%;
  }
  .container img {
    width: 24%;
    height: 24%;
    margin: 0.2rem;
  }
  .topBigPic, .topBigPic img {
    width: 100%;
    height: auto;
  }
  .tip {
    display: none;
  }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  html {
    font-size: 100px;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .container img {
    width: 100%;
    height: 100%;
    margin: 0.2rem;
  }
}
@media only screen and (min-width: 480px) and (max-width: 1024px) {
  html {
    font-size: 100px;
  }
  .wrapper {
    height: 100%;
  }
  .container img {
    width: 34%;
    height: 34%;
    margin: 0.2rem;
  }
  .noTop {
    display: none;
  }
}
@media only screen and (min-width: 1029px) {
  html {
    font-size: 100px;
  }
  .wrapper {
    height: auto;
  }
  .container img {
    width: 28%;
    height: 28%;
    margin: 0.2rem;
  }
}
</style>
