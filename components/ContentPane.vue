<template>
  <div class="ContentPane">
    <h1 class="ContentPane__title">{{sectionTitle}}</h1>

    <event v-for="event in events"
      :key="`event-${event.id}`"
      :event="event" />

  </div>
</template>

<script>
import Event from '~/components/Event.vue'

export default {
  props: {
    events: Array,
    sectionTitle: String,
    remainingEvents: Number
  },
  components: {
    Event
  }
}
</script>

<style lang="scss">
@import "../assets/css/variables";

.ContentPane {
  padding: 1em;

  @media screen and (min-width: $bigScreenBreakpoint) {
    padding: 1.5em;
  }
}
</style>
