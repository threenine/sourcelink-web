<template>
  <mdb-container class="mt-5 p-5">
    <h1>Skills</h1>
    <mdb-row class="mt-3 p-3">
      <mdb-col>
        <mdb-card>

          <mdb-card-body>
            <mdb-card-title class="section-title">Programming Languages</mdb-card-title>
            <mdb-row>
              <mdb-col>
                <mdb-select search v-model="languages"
                            id="language"
                            label="Language"
                            @getvalue="selectedLanguage"/>

              </mdb-col>
              <mdb-col>
               <mdb-btn @click="addLanguage" floating  gradient="green" tag="a">
                 <mdb-icon icon="plus"></mdb-icon>
               </mdb-btn>
              </mdb-col>

            </mdb-row>
            <mdb-row>
              <mdb-col>
                <mdb-list-group>
                  <mdb-list-group-item v-for="language in selectedLanguages"
                                       v-bind:key="language">{{ language }}
                  </mdb-list-group-item>
                </mdb-list-group>
                <mdb-btn @click="saveLanguages">Save</mdb-btn>
              </mdb-col>
            </mdb-row>

          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col></mdb-col>

    </mdb-row>
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
  mdbBtn,
  mdbSelect,
  mdbListGroup,
  mdbListGroupItem,

}
  from 'mdbvue';

import { GET_LANGUAGES_QUERY } from '../../graphql/queries/skillQueries';
import { Auth } from '@/firebase/auth';
import { DB } from '@/firebase/db';

export default {
  name: 'Skill',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbSelect,
    mdbListGroup,
    mdbListGroupItem,
  },
  data() {
    return {
      languages: [],
      selectedLanguages: [],
    };
  },
  async mounted() {
    this.$apollo.query({ query: GET_LANGUAGES_QUERY })
      .then((response) => {
        response.data.languages.forEach((language) => {
          this.languages.push({ text: language.name, value: language.name });
        });
      });
    this.languages.sort();
  },
  methods: {
    addLanguage() {
      const selected = this.selectedLanguage();

      if (selected !== undefined && !this.selectedLanguages.includes(selected)) {
        this.selectedLanguages.push(selected);
        this.selectedLanguages.sort();
      }
    },
    selectedLanguage() {
      const language = this.languages.find(option => option.selected === true);
      if (language) {
        return language.value;
      }
    },
    saveLanguages() {
      DB.collection('users')
        .doc(Auth.currentUser.uid)
        .onSnapshot((doc) => {
          if (doc.exists) {
            doc.ref.update(this.selectedLanguages);
          }
        });
    },
  },


};
</script>

<style scoped>

  .section-title {
    font-weight: bold;
    font-size: medium;
  }

  .wide-box {
    width: 100%;
  }
</style>
