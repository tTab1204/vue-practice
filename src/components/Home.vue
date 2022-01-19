<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list">
      <div
        class="board-item"
        v-for="b in boards"
        :key="b.id"
        :data-bgcolor="b.bgColor"
        ref="boardItem"
      >
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{ b.title }}</div>
        </router-link>
      </div>
      <div class="board-item">
        <a class="new-board-btn" href="" @click.prevent="addBoard"
          >Create new board...</a
        >
      </div>
    </div>
    <AddBoard
      v-if="isAddBoard"
      @close="isAddBoard = false"
      @submit="onAddBoard"
    />
  </div>
</template>

<script>
import { board } from '@/apis';
import AddBoard from './AddBoard.vue';

export default {
  components: {
    AddBoard,
  },

  data() {
    return {
      loading: false,
      boards: [],
      error: '',
      isAddBoard: false,
    };
  },

  created() {
    this.fetchData();
  },

  updated() {
    this.$refs.boardItem.forEach((item) => {
      item.style.backgroundColor = item.dataset.bgcolor;
    });
  },

  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const data = await board.fetch();
        this.boards = data.list;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    addBoard() {
      this.isAddBoard = true;
    },
    async onAddBoard(title) {
      try {
        await board.create(title);
        await this.fetchData();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0, 0, 0, 0.1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700;
}
</style>
