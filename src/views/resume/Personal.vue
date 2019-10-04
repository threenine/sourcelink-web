<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row  class="mt-3 p-3">
      <mdb-col>
      <mdb-card>
        <mdb-card-title><h3>Personal Information</h3></mdb-card-title>
        <mdb-card-body>
         <mdb-row>
           <mdb-col class="col-4">
             <mdb-input type="text" label="Firstname"></mdb-input>
           </mdb-col>
           <mdb-col class="col-4">
             <mdb-input type="text" label="Lastname"></mdb-input>
           </mdb-col>
         </mdb-row>
          <mdb-row>
            <mdb-col class="col-5">
              <mdb-input type="text" label="Job Title"></mdb-input>
            </mdb-col>
            <mdb-col class="col-6">
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col class="col-8">
              <mdb-input :rows="10" type="textarea" label="Summary"></mdb-input>
            </mdb-col>
            <mdb-col class="col-6">
            </mdb-col>
          </mdb-row>
        </mdb-card-body>
      </mdb-card>
      </mdb-col>

    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardTitle, mdbCardBody, mdbIcon, mdbInput,
}
  from 'mdbvue';

export default {
  name: 'personal',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardBody,
    mdbIcon,
    mdbInput,
  },

};
</script>

<style scoped>

</style>
