<template>
  <div>authorizing</div>
</template>

<script>
export default {
  name: 'Listener',
  created() {
    window.open('', '_self').close();
    this.$store.dispatch('callbackStatus', this.$route.params.state)
      .then(() => {
        this.$store.commit('setWindowState');
      });
  },
};
</script>
