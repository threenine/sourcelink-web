<template>
  <mdb-navbar class="navbar-light lighten-5 flexible-navbar"
              color="orange"
              expand="large"
              position="top"
              :toggler="false"
              scrolling

  >
    <mdb-navbar-brand href="https://sourcelink.co.uk" style="padding-left: 150px" target="_blank">
      <img alt="SourceLink" class="img-fluid" height="30" src="../../public/img/logo.png"/>
    </mdb-navbar-brand>

    <mdb-navbar-nav class="nav-flex-icons" right>
      <mdb-nav-item :to="{ name: 'login' }" v-if="!user" waves-fixed>Login</mdb-nav-item>
      <mdb-dropdown v-else tag="li" class="nav-item">
        <mdb-dropdown-toggle tag="a"
                             navLink slot="toggle"
                             waves-fixed><mdb-icon icon="user-circle" /></mdb-dropdown-toggle>
        <mdb-dropdown-menu>
          <mdb-dropdown-item :to="{ name: 'account'}">
            <mdb-icon icon="user-cog" class="icon-padding" />
            Account Settings
          </mdb-dropdown-item>
          <mdb-dropdown-item @click="logout">
            <mdb-icon icon="sign-out-alt"  class="icon-padding"  />
            Logout
          </mdb-dropdown-item>
        </mdb-dropdown-menu>
      </mdb-dropdown>
    </mdb-navbar-nav>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbIcon,
} from 'mdbvue';

import { Auth } from '@/firebase/auth';


export default {
  name: 'Header',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbIcon,
  },
  data() {
    return {
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
    logout() {
      Auth.signOut().then(() => {
        Auth.onAuthStateChanged(async () => {
          await this.$router.push('/');
        });
      });
    },
  },
};
</script>
<style scoped>
  .flexible-navbar {
    transition: padding-left 0.5s;
    padding-right: 130px;
    padding-left: 100px;
  }
  .icon-padding {
    padding-right: 5px;
    margin-right: 3px;
  }

  @media (min-width: 900px) {
    .flexible-content {
      margin-left: 240px;
    }

    .side-toggler {
      display: none;
    }
  }

</style>
