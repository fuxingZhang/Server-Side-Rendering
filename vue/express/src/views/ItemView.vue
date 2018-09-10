<template>
  <div>
    <router-link to="/">index</router-link>
    <p>{{data}}</p>
    <p>{{test}}</p>
    <p>{{$store.state.test}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.data,
      test: this.$store.state.test
    }
  },
  asyncData ({store}) {
    return store.dispatch('fetch_data')
  },
}
</script>