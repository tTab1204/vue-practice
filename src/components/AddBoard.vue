<template>
  <modal>
    <div slot="header">
      <h2>
        Create new board
        <a
          href=""
          class="modal-default-button"
          @click.prevent="SET_IS_ADD_BOARD(false)"
          >&times;</a
        >
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" @submit.prevent="addBoard">
        <input
          class="form-control"
          type="text"
          v-model="inputBoardTitle"
          ref="inputBoardTitle"
        />
      </form>
    </div>
    <div slot="footer">
      <button
        class="btn"
        :class="{ 'btn-success': isValidInput }"
        type="submit"
        form="add-board-form"
        :disabled="!isValidInput"
      >
        Create Board
      </button>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue';
import { mapMutations } from 'vuex';

export default {
  components: { Modal },
  data() {
    return {
      inputBoardTitle: '',
      isValidInput: false,
    };
  },

  watch: {
    inputBoardTitle(v) {
      this.isValidInput = v.trim().length > 0;
    },
  },

  mounted() {
    this.$refs.inputBoardTitle.focus();
  },

  methods: {
    ...mapMutations(['SET_IS_ADD_BOARD']),

    addBoard() {
      this.SET_IS_ADD_BOARD(false);
      this.$emit('submit', this.inputBoardTitle);
    },
  },
};
</script>
