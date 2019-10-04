<template>
  <mdb-container class="mt-5 p-5 align-content-center">
    <mdb-row>
      <mdb-col class="mt-5 " sm="2"></mdb-col>
      <mdb-col class="mt-5 " sm="8">
        <mdb-card class=" mt-3 p-5">
          <mdb-card-body>
            <form @submit.prevent="submit" novalidate>
              <p class="h4 text-center mb-4">New User Registration</p>
              <mdb-list-group class="mb-4" v-if="errors.length">
                <mdb-list-group-item :key="error" class="list-group-item-danger"
                                     v-for="error in errors">{{error}}
                </mdb-list-group-item>
              </mdb-list-group>
              <div class="grey-text mt-5">
                <mdb-input icon="at" label="Email" required size="sm" type="email"
                           v-model="email"/>
                <mdb-input icon="lock" label="Password" required size="sm" type="password"
                           v-model="password"/>
                <mdb-input icon="lock" label="Confirm Password" required size="sm" type="password"
                           v-model="confirmPassword"/>
              </div>
              <div class="text-center">
                <mdb-btn type="submit">Register</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col class="mt-5 " sm="2"></mdb-col>
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
} from 'mdbvue';

import { Auth } from '@/firebase/auth';
import validate from '@/modules/validation-module';

export default {
  name: 'register',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbInput,
    mdbListGroup,
    mdbListGroupItem,
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errors: [],
    };
  },
  methods: {
    submit(event) {
      this.errors = [];
      if (!validate.email(this.email)) {
        this.errors.push('Please enter a valid email address');
      }
      if (!validate.password(this.password)) {
        this.errors.push('Your password is not strong enough!');
      }
      if (this.password !== this.confirmPassword) {
        this.errors.push('Password do not match');
      }

      if (!this.errors.length) {
        event.target.classList.add('was-validated');
        Auth.createUserWithEmailAndPassword(this.email, this.password)
          .then((created) => {
            created.user.sendEmailVerification().then(() => {
              this.$router.push('/user/account');
            });
          }).catch((error) => {
            this.errors.push(error.message);
          });
      }
    },
  },
};
</script>

<style scoped>

</style>
