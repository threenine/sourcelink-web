<template>
  <mdb-container class="mt-5 p-5">
    <mdb-card class="mt-3 p-3">

      <mdb-card-body>
               <mdb-row>
          <mdb-col class="col-10">
            <form @submit.prevent="savePersonal" novalidate>
              <mdb-row>
                <mdb-col class="col-10">
                  <mdb-input type="text" label="Tag line" v-model="profile.tagline"></mdb-input>
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
                  <span slot="header">Tag Line</span>
                  <span slot="body"><p>Try to define your <em>Value Proposition</em>
                    succinctly as possible.</p>
                  <p>This should be the over-arching offering: The key thing that you consistently
                  walk into an organisation and do!</p></span>
                  <mdb-btn slot="reference" tag="a" gradient="blue" floating size="sm">
                    <mdb-icon icon="info-circle" />
                  </mdb-btn>
                </mdb-popover>
              </mdb-col>
            </mdb-row>
            <mdb-row class="mt-3">
              <mdb-col>
                <mdb-popover trigger="click" :options="{ placement: 'right'}">
                  <span slot="header">Summary</span>
                  <span slot="body"><p>Your summary should include 3 key components: </p>
                    <ul><li><strong>What are you?</strong></li>
                      <li><strong>What is your <em>Value Proposition</em></strong></li>
                      <li><strong>What are your top four key strengths</strong></li></ul>
                  </span>
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
