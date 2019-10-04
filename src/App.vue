<template>
  <div class="flexible-content">
    <Header></Header>
    <side-navigation></side-navigation>
    <main>

      <router-view></router-view>
    </main>


  </div>


</template>
<script>
import Header from '@/components/Header.vue';
import SideNavigation from '@/components/SideNavigation';

export default {
  name: 'App',
  components: {
    Header,
    SideNavigation

  },
};

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
