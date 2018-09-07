<template>
  <div>
    <h1>zfx</h1>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <div>
      <router-link to="/user">user</router-link>
    </div>
    <div>{{name}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: ''
    }
  },
  async asyncData () {
    const {data} = await axios.get('http://39.108.115.22/api/artical/11')
    console.log(data)
    return {name: data}
  }
}
</script>
