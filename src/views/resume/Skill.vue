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
                <mdb-autocomplete
                  icon="list-ul"
                  clearClass="fa-lg"
                  class="wide-box"
                  :data="languages"
                  label="Languages"
                  v-on:input="handler"
                />
              </mdb-col>
              <mdb-col>
               <mdb-btn @click="addLanguage" v-model="selected">
                 <mdb-icon icon="plus"></mdb-icon>
               </mdb-btn>
              </mdb-col>

            </mdb-row>
            <mdb-row>
              <mdb-col>
                <mdb-list-group>
                  <mdb-list-group-item v-for="language in selLanguage"
                                       v-bind:key="language">{{ language }}
                  </mdb-list-group-item>
                </mdb-list-group>
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
  mdbAutocomplete,
  mdbListGroup,
  mdbListGroupItem,

}
  from 'mdbvue';

import { GET_LANGUAGES_QUERY } from '../../graphql/queries/skillQueries';

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
    mdbAutocomplete,
    mdbListGroup,
    mdbListGroupItem,
  },
  data() {
    return {
      languages: [],
      selLanguage: [],
      selected: '',
      isSelectedLanguage: false,
    };
  },
  async mounted() {
    this.$apollo.query({ query: GET_LANGUAGES_QUERY })
      .then((response) => {
        response.data.languages.forEach((language) => {
          this.languages.push(language.name);
        });
      });
    this.languages.sort();
  },
  methods: {
    addLanguage() {
      if (this.isSelectedLanguage) {
        this.selLanguage.push(this.selected);
      }
    },
    handler(val) {
      console.log(val);
      console.log(val.target.value);
      this.selected = val.target.value;
      this.isSelectedLanguage = true;
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
