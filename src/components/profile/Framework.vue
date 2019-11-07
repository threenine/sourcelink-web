<template>
  <mdb-container>
    <section>
      <mdb-row>
        <mdb-col md="8" xl="10">
          <mdb-select search v-model="frameworks"
                      id="framework"
                      label="Frameworks"
                      v-on:getValue="selectedFramework"/>
        </mdb-col>
        <mdb-col md="4" xl="1" >
          <mdb-btn v-on:click="add" floating  gradient="green" tag="a" size="sm" >
            <mdb-icon icon="plus"></mdb-icon>
          </mdb-btn>

        </mdb-col>
      </mdb-row>
      <mdb-row>
        <mdb-col md="12" xl="12">
          <mdb-chip v-for="framework in skills" pill size="md"
                    v-bind:key="framework"
                    v-bind:title="framework"
                    tag="a"
                    color="blue lighten-2" text="white" close v-on:closeChip="remove"
          >{{ framework }}</mdb-chip>
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

import { GET_FRAMEWORKS_QUERY } from '@/graphql/queries/skillQueries';

export default {
  name: 'Framework',
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
      frameworks: [],
      framework: '',
    };
  },
  async mounted() {
    this.$apollo.query({ query: GET_FRAMEWORKS_QUERY })
      .then((response) => {
        response.data.frameworks.forEach((framework) => {
          this.frameworks.push({ text: framework.Name, value: framework.Name });
        });
      });
    this.frameworks.sort();
  },
  methods: {
    selectedFramework(value) {
      this.framework = value;
    },
    add() {
      if ((this.framework !== undefined) && (this.framework !== '')) {
        this.$emit('add', this.framework);
        this.framework = '';
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
