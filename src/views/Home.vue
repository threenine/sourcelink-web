<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row class="mt-5 p-5">
      <mdb-col> <h1> This is the homepage</h1> </mdb-col>
   </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'home',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
