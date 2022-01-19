<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">Trelno</router-link>
    </div>
    <div class="header-user">
      <!-- 제출 이벤트가 페이지를 다시 로드 하지 않습니다 -->
      <a v-if="isAuth" href="" @click.prevent="logout">Logout</a>
      <!-- 상수로 만드는 법은? -->
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
import { ROUTES } from '../router/routes';
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuth']),
  },
  methods: {
    ...mapMutations(['LOGOUT']),

    logout() {
      this.LOGOUT();
      this.$router.push(ROUTES.LOGIN);
    },
  },
};
</script>

<style>
.header {
  background-color: rgba(0, 0, 0, 0.15);
  height: 32px;
  padding: 4px;
}
.header a {
  display: block;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
}
.header-logo {
  position: absolute;
  left: 50%;
  margin-left: -30px;
  text-align: center;
  font-weight: bolder;
  font-size: 24px;
}
.header-logo a:hover,
.header-logo a:focus {
  color: rgba(255, 255, 255, 0.9);
}
.header-user {
  position: absolute;
  right: 15px;
}
.header-user a {
  border-radius: 2px;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.5);
  color: white;
}
.header-user a:hover,
.header-user a:focus {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
