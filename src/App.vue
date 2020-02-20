<template>
  <div id="app">

      <system-head></system-head>
      <router-view></router-view>
  </div>
</template>

<script>
import Customers from './components/Customers'
import About from './components/About'
import SystemHead from './components/SystemHead'

export default {
  name: 'App',
  components: {
    Customers,About,SystemHead
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px
}

</style>
