<template>
  <mdb-container>
    <mdb-side-nav :breakWidth="0" :isCollapsed="collapsed"
                  :logo="user.photoURL"
                  :name="user.displayName"
                  fixed logoRound mask="strong" slim v-if="user">
      <mdb-side-nav-nav>
        <mdb-side-nav-item :to="{ name: 'dashboard' }"
                           icon="tachometer-alt">Dashboard</mdb-side-nav-item>
        <mdb-side-nav-cat far icon="address-card" name="Profile">
          <mdb-side-nav-item :to="{ name: 'overview' }" icon="user-circle">Overview
          </mdb-side-nav-item>
          <mdb-side-nav-item :to="{ name: 'skill' }" icon="clipboard-list">Skills
          </mdb-side-nav-item>
          <mdb-side-nav-item :to="{ name: 'location' }" icon="clipboard-list">Location
          </mdb-side-nav-item>
          <mdb-side-nav-item :to="{ name: 'download' }" icon="file-download" > Download
          </mdb-side-nav-item>
         </mdb-side-nav-cat>
        <mdb-side-nav-item :collapsed="collapsed" @toggle="toggleSlim"
                           fixed icon="angle-double-left"
                           :isCollapsed="collapsed" openIcon="angle-double-right" toggler>Minimize
        </mdb-side-nav-item>
      </mdb-side-nav-nav>
    </mdb-side-nav>
  </mdb-container>
</template>

<script>
import {
  mdbContainer, mdbSideNav, mdbSideNavCat, mdbSideNavItem, mdbSideNavNav, waves,
} from 'mdbvue';
import { Auth } from '../firebase/auth';


export default {
  name: 'SideNavigation',
  components: {
    mdbContainer,
    mdbSideNav,
    mdbSideNavNav,
    mdbSideNavCat,
    mdbSideNavItem,

  },
  data() {
    return {
      collapsed: false,
      user: null,
    };
  },
  created() {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {

    toggleSlim() {
      this.collapsed = !this.collapsed;
    },
  },
  mixins: [waves],
};
</script>

<style scoped>

</style>
