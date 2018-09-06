<template>
  <div>
    <h1>Hello world!</h1>
    <div>
      <router-link to="/user">user</router-link>
    </div>
    <div>
      <router-link to="/user/zfx">zfx</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>