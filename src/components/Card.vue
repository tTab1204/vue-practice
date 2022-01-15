<template>
  <div>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>cid: {{ cid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
      loading: false,
    };
  },

  watch: {
    $route: {
      handler: "fetchData",
      // immediate는 created()와 같은 의미를 가짐.
      immediate: true,
    },
  },

  methods: {
    fetchData() {
      console.log(this.$route.params.cid);
      this.loading = true;
      setTimeout(() => {
        this.cid = this.$route.params.cid;
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style></style>
