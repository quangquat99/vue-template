<template>
  <div
    v-if="showLoadingIndicator"
    class="bg-loader"
  >
    <div class="wrapper-loader">
      <img
        class="loading"
        src="@/assets/loading.svg"
        alt=""
        height="64"
        width="64"
      >
    </div>
  </div>
</template>

<script>

  export default {
    computed: {
      showLoadingIndicator () {
        return this.$store.state.showLoadingIndicator
      },
    },
  }
</script>
<style scoped lang="scss">
.bg-loader:before {
    content: '';
    z-index: 1000;
    background: #000;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    opacity: 0.2;
}
.wrapper-loader {
    width: 4rem;
    height: 4rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 50%;
    margin: 0 auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.625rem;
    transform: translateY(-50%);
}
img {
transform: translate(50% -50%);
}
</style>
