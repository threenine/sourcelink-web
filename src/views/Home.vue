<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row class="mt-5 p-5">
<h1> This is the homepage</h1>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow } from 'mdbvue';

export default {
  name: 'home',
  components: {

    mdbContainer,
    mdbRow,

  },
};
</script>
