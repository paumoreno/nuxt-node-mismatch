import Vuex from 'vuex'
import _ from 'lodash'

import events from '../data/events.json'

const store = () => new Vuex.Store({
  state: {
    timeline: {
      lastFetchedAt: null,
      data: {}
    }
  },
  getters: {
    futureEvents: (state) => {
      return Object.values(state.timeline.data)
        .sort((a, b) => {
          if (a.startTime < b.startTime) {
            return -1
          } else if (a.startTime > b.startTime) {
            return 1
          } else {
            return 0

            // if (a.id < b.id) {
            //   return -1
            // } else {
            //   return 1
            // }
          }
        })
    }
  },
  mutations: {
    addEvents (state, freshEvents) {
      const keyedEvents = _.transform(freshEvents, (result, freshEvent) => {
        result[freshEvent.id] = freshEvent
      }, {})

      state.timeline.data = {
        ...state.timeline.data,
        ...keyedEvents
      }

      state.timeline.lastFetchedAt = new Date().getTime()
    }
  },
  actions: {
    fetchEvents ({ commit, state }) {
      commit('addEvents', events.timeline)

      return state.timeline.data
    }
  }
})

export default store
