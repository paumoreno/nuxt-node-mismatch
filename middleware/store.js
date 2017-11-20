export default function ({ store, error }) {
  return store.dispatch('fetchEvents')
}
