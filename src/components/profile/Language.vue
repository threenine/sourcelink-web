<template>
  <mdb-container>
    <section>
    <mdb-row>
      <mdb-col md="8" xl="10">
        <mdb-select search v-model="languages"
                    id="language"
                    label="Languages"
                    v-on:getValue="selectedLanguage"/>
      </mdb-col>
      <mdb-col md="4" xl="1" >
        <mdb-btn @click="add" floating  gradient="green" tag="a" size="sm" >
          <mdb-icon icon="plus"></mdb-icon>
        </mdb-btn>

      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col md="12" xl="12">
        <mdb-chip v-for="language in skills" pill size="md"
                  v-bind:key="language"
                  v-bind:title="language"
                  tag="a"
                  color="green lighten-2" text="white" close @closeChip="remove"
        >{{ language }}</mdb-chip>
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
  mdbSelect,
  mdbChip,
}
  from 'mdbvue';

import { GET_LANGUAGES_QUERY } from '@/graphql/queries/skillQueries';

export default {
  name: 'Language',
  props: {
    skills: {
      type: Array,
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
      language: '',
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
    selectedLanguage(value) {
      this.language = value;
    },
    add() {
      if ((this.language !== undefined) && (this.language !== '')) {
        this.$emit('add', this.language);
        this.language = '';
      }
    },
    remove(chip) {
      if (chip !== undefined) {
        this.$emit('remove', chip);
      }
    },
  },

};
</script>

<style scoped>

</style>
