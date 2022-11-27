<template>
  <div>
    {{ now }}
    <BaseHeader></BaseHeader>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      now : null
    }
  },
  mounted() {
    this.now = this.$dayjs().format('YYYY-MM-DD HH:mm:ss');
  }
}
</script>

<style>

</style>
