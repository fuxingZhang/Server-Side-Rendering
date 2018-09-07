<template>
  <div>
    <router-link to="/">index</router-link>
    <p>{{data}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.data
    }
  },
  asyncData ({store}) {
    return store.dispatch('fetch_data')
  },
}
</script>