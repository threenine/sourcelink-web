<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row  class="mt-3 p-3">
      <mdb-col>
        <mdb-card>

          <mdb-card-body>
            <mdb-card-title class=""><h3>Skills</h3></mdb-card-title>

          </mdb-card-body>
        </mdb-card>
      </mdb-col>

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
  mdbInput,
  mdbBtn,
}
  from 'mdbvue';

export default {
  name: 'Education',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbIcon,
    mdbInput,
    mdbBtn,
  },
};
</script>

<style scoped>

</style>
