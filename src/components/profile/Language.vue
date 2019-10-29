<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row>
      <mdb-col>
        <mdb-select search v-model="languages"
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
        <mdb-chip v-for="language in profile.languages"
                  v-bind:key="language"
                  color="green lighten-2" text="white" close :handle-close="removeSkill"
        > {{ language }}</mdb-chip>
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

import { GET_LANGUAGES_QUERY } from '@/graphql/queries/skillQueries';

export default {
  name: 'Language',
  props: {
    profile: {
      type: Object,
    },
  },
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
    selectedLanguage() {
      return this.languages.find(option => option.selected === true).value;
    },
  },
};
</script>

<style scoped>

</style>
