<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">
          {{ boards }}
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { board } from '@/apis';

export default {
  data() {
    return {
      loading: false,
      boards: '',
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;
      const data = await board.fetch();
      this.boards = data;
      this.loading = false;
    },
  },
};
</script>

<style></style>
