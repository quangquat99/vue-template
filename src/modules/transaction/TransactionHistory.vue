<template>
  <div>transaction id: {{ id }}</div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 0,
      },
    },

  }
</script>

<style>

</style>
