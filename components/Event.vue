<template>
  <section class="Event Box">
    <div class="Event__payload Box__payload">
        <div class="Event__when">
          {{event.startTime}}
        </div>
      </div>


      <div class="Event__body">
        {{event.localTeam.shortName}} - {{event.visitorTeam.shortName}}
      </div>


        <div class="Event__providers">
          <provider v-for="source in event.sources"
            :provider="source"
            :key="`event-prov-${event.id}-${source.id}`" />
        </div>
    </div>
  </section>
</template>

<script>
import Provider from '@/components/Provider'

export default {
  props: {
    event: Object
  },
  components: {
    Provider
  }
}
</script>

<style lang="scss">
@import "../assets/css/variables";

.Event {
  overflow: hidden;
  display: flex;

  &__payload {
    flex: 1 1 auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  &__providers {
    display: flex;
  }

  &__when {
    text-align: right;
    flex-grow: 1;
  }

  &__body {
    margin: 1em 0;
    width: 100%
  }
}
</style>
