<template>
  <div class="flexible-content">
    <Header></Header>
    <side-navigation></side-navigation>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import SideNavigation from '@/components/SideNavigation.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    SideNavigation,
    Footer,

  },
};

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

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
