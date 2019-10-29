<template>
  <mdb-container>
    <section class="mt-5">
      <mdb-row>
        <mdb-col md="6" xl="8" class="mt-4">
          <profile :profile="profile"></profile>
        </mdb-col>
        <mdb-col  md="6" xl="4" class="mt-5">
          <language :profile="profile"></language>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col md="12" xl="12" class="float-right">
          <mdb-btn @click="savePersonal" size="sm">Next
            <mdb-icon icon="angle-double-right"/>
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </section>

  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbBtn,
}
  from 'mdbvue';
import Profile from '@/components/profile/Profile.vue';
import Language from '@/components/profile/Language.vue';
import { Auth } from '@/firebase/auth';
import { DB } from '@/firebase/db';

export default {
  name: 'personal',
  components: {
    Profile,
    Language,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,

  },
  data() {
    return {
      profile: '',
      errors: [],
    };
  },
  created() {
    DB.collection('users')
      .doc(Auth.currentUser.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          this.profile = { ...doc.data() };
        }
      });
  },
  methods: {
    savePersonal(event) {
      event.target.classList.add('was-validated');

      DB.collection('users')
        .doc(Auth.currentUser.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            doc.ref.update(this.profile);
          }
        });

      this.$router.push({ name: 'skill' });
    },
  },

};
</script>

<style scoped>
  .float-right{
    text-align: right;
  }
</style>
