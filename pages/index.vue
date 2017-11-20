<template>
    <content-pane :events="futureEvents" />
</template>

<script>
import { mapGetters } from 'vuex'

import ContentPane from '~/components/ContentPane.vue'

export default {
  components: {
    ContentPane
  },
  computed: {
    ...mapGetters([
      'futureEvents'
    ])
  }
}
</script>
