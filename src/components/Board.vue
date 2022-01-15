<template>
  <div>
    Board
    <div>bid: {{ bid }}</div>
    <hr />
    <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0,
    };
  },
  created() {
    // this.$route 객체를 통해서 라우터 주소 정보를 받아볼 수 있다.
    // 이게 되는 이유는 index.js의 Vue.router() 함수를 통해
    // 미들웨어 식으로 추가해줬기 때문임.
    this.bid = this.$route.params.bid;
  },
};
</script>

<style></style>
