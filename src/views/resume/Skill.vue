<template>
  <mdb-container class="mt-5 p-5">
                <mdb-row>
              <mdb-col>
                <mdb-select search v-model="profile.languages"
                            id="language"
                            label="Language"
                            @getvalue="selectedLanguage"/>

              </mdb-col>
              <mdb-col>
               <mdb-btn @click="addLanguage" floating  gradient="green" tag="a" size="sm">
                 <mdb-icon icon="plus"></mdb-icon>
               </mdb-btn>
              </mdb-col>

            </mdb-row>
            <mdb-row>
              <mdb-col>
                <mdb-chip v-for="language in selectedLanguages"
                          v-bind:key="language"
                          color="green lighten-2" text="white" close :handle-close="removeSkill"
                > {{ language }}</mdb-chip>
              </mdb-col>
            </mdb-row>
            <mdb-row>
              <mdb-col>
                <mdb-btn @click="saveLanguages" size="sm">Save</mdb-btn>
              </mdb-col>
            </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbBtn,
  mdbSelect,
  mdbChip,
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
    mdbIcon,
    mdbBtn,
    mdbSelect,
    mdbChip,
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
        DB.collection('users')
          .doc(Auth.currentUser.uid)
          .onSnapshot((doc) => {
            if (doc.exists) {
              doc.ref.update(this.selectedLanguages);
            }
          });
      }
    },
    // eslint-disable-next-line consistent-return
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
    removeSkill() {
      alert('Removed Skill');
    },
  },


};
</script>

<style scoped>

</style>
