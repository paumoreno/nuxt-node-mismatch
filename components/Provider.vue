<template>
  <div class="Provider">
    {{providerName}}
  </div>
</template>

<script>
export default {
  props: {
    provider: Object
  },
  computed: {
    providerName () {
      return this.provider.name + (this.provider.type === 'online' ? ' online' : '')
    }
  }
}
</script>

<style lang="scss">
.Provider {
    margin-right: .7em;
}
</style>
