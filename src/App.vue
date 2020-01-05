<template>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    programState: '',
  }),

  computed: {
    ...mapState(['status']),
  },

  created() {
    window.addEventListener('storage', this.handy, false);
  },

  beforeDestroy() {
    window.removeEventListener('storage', this.handy);
  },

  methods: {
    handy(event) {
      if (event.key === 'vuex') {
        const j = JSON.parse(event.newValue);
        if (j.status === 'ok') {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      }
    },
  },

  beforeMount() {
    if (this.$store.state.status === 'ok' && this.$route.name !== 'app') {
      this.$router.push({ name: 'app' });
    }

    this.axios.interceptors.response.use(res => (res),
      (err) => {
        if (err.response.status === 401) {
          this.$store.dispatch('callbackStatus', '')
            .then(() => {
              this.$router.push({ name: 'authorize' })
                .then(() => {});
            });
        }
      });
  },
};
</script>
