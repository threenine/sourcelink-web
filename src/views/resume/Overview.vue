<template>
  <mdb-container class="mt-5 p-5">
    <mdb-card class="mt-3 p-3">

      <mdb-card-body>
               <mdb-row>
          <mdb-col class="col-10">
            <form @submit.prevent="savePersonal" novalidate>
              <mdb-row>
                <mdb-col class="col-10">
                  <mdb-input type="text" label="Job Title" v-model="profile.tagline"></mdb-input>
                </mdb-col>
                <mdb-col class="col-2">
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="col-10">
                  <mdb-input :rows="20"
                             type="textarea"
                             label="Summary"
                             v-model="profile.summary"></mdb-input>
                </mdb-col>
                <mdb-col class="col-2">
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="col-8">
                </mdb-col>
                <mdb-col class="col-4">
                  <mdb-btn>Next
                    <mdb-icon icon="angle-double-right"/>
                  </mdb-btn>
                </mdb-col>
              </mdb-row>
            </form>
          </mdb-col>
          <mdb-col class="col-2">
            <mdb-row>
              <mdb-col>
                <mdb-popover trigger="click" :options="{ placement: 'right'}">
                  <span slot="header">Profile Overview</span>
                  <span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
                  <mdb-btn slot="reference" tag="a" gradient="blue" floating size="sm">
                    <mdb-icon icon="info-circle" />
                  </mdb-btn>
                </mdb-popover>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-3">
              <mdb-col>
                <mdb-popover trigger="click" :options="{ placement: 'right'}">
                  <span slot="header">Profile Overview</span>
                  <span slot="body">Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
                  <mdb-btn slot="reference" tag="a" gradient="blue" floating size="sm">
                    <mdb-icon icon="info-circle" />
                  </mdb-btn>
                </mdb-popover>
              </mdb-col>
            </mdb-row>

          </mdb-col>
        </mdb-row>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardTitle,
  mdbCardBody,
  mdbIcon,
  mdbInput,
  mdbBtn,
  mdbPopover,
}
  from 'mdbvue';

import { Auth } from '@/firebase/auth';
import { DB } from '@/firebase/db';


export default {
  name: 'personal',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbIcon,
    mdbInput,
    mdbBtn,
    mdbPopover,
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

</style>
