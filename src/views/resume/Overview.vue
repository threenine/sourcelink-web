<template>
  <mdb-container>
    <section >
      <mdb-row class="my-5">
        <mdb-col md="6" xl="8" class="mt-4">
          <profile :profile="profile"></profile>
        </mdb-col>
        <mdb-col  md="6" xl="4" class="mt-5">
          <mdb-row class="my-1">
            <mdb-col> <language :skills="profile.languages"
                                v-on:add="addLanguage"
                                v-on:remove="removeLanguage"></language></mdb-col>
          </mdb-row>
         <mdb-row class="my-5">
           <mdb-col>
             <framework :skills="profile.frameworks"
                        v-on:add="addFramework"
                        v-on:remove="removeFramework"></framework>

           </mdb-col>
         </mdb-row>

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
import Framework from '@/components/profile/Framework.vue';
import Profile from '@/components/profile/Profile.vue';
import Language from '@/components/profile/Language.vue';
import { Auth } from '@/firebase/auth';
import { DB } from '@/firebase/db';

export default {
  name: 'personal',
  components: {
    Profile,
    Language,
    Framework,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,

  },
  data() {
    return {
      profile: {},
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
      this.saveProfile();
      this.$router.push({ name: 'download' });
    },
    addLanguage(lang) {
      if (this.profile.languages === undefined) this.profile.languages = [];
      this.profile.languages.push(lang);
      this.saveProfile();
    },
    addFramework(framework) {
      if (this.profile.frameworks === undefined) this.profile.frameworks = [];
      this.profile.frameworks.push(framework);
      this.saveProfile();
    },
    removeLanguage(chip) {
      const index = this.profile.languages.indexOf(chip);
      if (index > -1) {
        this.profile.languages.splice(index, 1);
      }

      this.saveProfile();
    },
    removeFramework(chip) {
      const index = this.profile.frameworks.indexOf(chip);
      if (index > -1) {
        this.profile.frameworks.splice(index, 1);
      }
      this.saveProfile();
    },
    saveProfile() {
      DB.collection('users')
        .doc(Auth.currentUser.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            doc.ref.update(this.profile);
          }
        });
    },
  },

};
</script>

<style scoped>
  .float-right{
    text-align: right;
  }
</style>
