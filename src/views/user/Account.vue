<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row>
      <mdb-col sm="3">
        <mdb-card class="mt-3">
          <mdb-card-body>
            <mdb-file-input :src="profile.image" @getValue="saveImage" btn-title="upload"
                            circle icon="upload" img name="ProfileImage" rounded sm/>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col sm="6">

      <mdb-card class="mt-3 p-1">
        <mdb-card-body>
          <form @submit.prevent="saveProfile" novalidate>
            <mdb-list-group class="mb-4" v-if="errors.length">
              <mdb-list-group-item :key="error" class="list-group-item-danger"
                                   v-for="error in errors">{{error}}
              </mdb-list-group-item>
            </mdb-list-group>
            <mdb-container>
              <mdb-row>
                <mdb-col sm="6">
                  <mdb-input label="Firstname" required type="text" v-model="profile.firstName"/>
                </mdb-col>
                <mdb-col sm="6">
                  <mdb-input label="Lastname" required type="text" v-model="profile.lastName"/>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col sm="12">
                  <mdb-input label="Email" type="email" v-model="profile.email"/>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col sm="12">
                  <mdb-input label="Phone Number" type="text" v-model="profile.phoneNumber" />
                </mdb-col>
              </mdb-row>
            </mdb-container>
            <div class="text-right">
              <mdb-btn size="sm" type="submit">Save</mdb-btn>
            </div>
          </form>
        </mdb-card-body>
      </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>

import {
  mdbBtn,
  mdbCard,
  mdbCardBody,
  mdbCol,
  mdbContainer,
  mdbInput,
  mdbListGroup,
  mdbListGroupItem,
  mdbRow,
  mdbFileInput,
} from 'mdbvue';

import { Auth } from '@/firebase/auth';
import { Storage } from '@/firebase/storage';
import { DB } from '@/firebase/db';
import validate from '@/modules/validation-module';

export default {
  name: 'Account-Settings',
  components: {
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbInput,
    mdbListGroup,
    mdbListGroupItem,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbFileInput,
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
    saveProfile(event) {
      this.errors = [];

      if (this.profile.firstName === '') {
        this.errors.push('A Firstname is required');
      }

      if (this.profile.lastName === '') {
        this.errors.push('A lastname is required');
      }

      if (!validate.email(this.email)) {
        this.errors.push('Please enter a valid email address');
      }

      if (!this.errors.length) {
        event.target.classList.add('was-validated');

        DB.collection('users')
          .doc(Auth.currentUser.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              doc.ref.update(this.profile)
                .then(() => {
                  Auth.currentUser
                    .updateProfile({
                      displayName: `${this.profile.firstName} ${this.profile.lastName}`,
                      email: this.profile.email,
                      phoneNumber: this.profile.phoneNumber,
                    });
                  event.target.classList.remove('was-validated');
                });
            }
          });
      }
    },
    saveImage(payload) {
      const file = payload[0];
      const extension = file.name.split('.').pop();
      const uploadDate = new Date();
      const fileName = `${Auth.currentUser.uid}-${uploadDate.toDateString()}.${extension}`;

      Storage.ref(`users/profile/${fileName}`)
        .put(file)
        .then((response) => {
          response.ref.getDownloadURL().then((link) => {
            Auth.currentUser.updateProfile({
              photoURL: link,
            }).then(() => {
              DB.collection('users')
                .doc(Auth.currentUser.uid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    doc.ref.update({ image: link });
                  }
                });
            });
          });
        });
    },
  },
};
</script>

<style scoped>

</style>
https://amzn.to/2AHoVRH
https://mdbootstrap.com/docs/vue/forms/file-input?utm_ref_id=47167

https://mdbootstrap.com/docs/vue/?utm_ref_id=47167
