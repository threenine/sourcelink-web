<template>
<mdb-container>
<mdb-row>
  <mdb-col>
    <mdb-input placeholder="Company Name"></mdb-input>
  </mdb-col>
</mdb-row>
  <mdb-row>
    <mdb-col>
      <mdb-input placeholder="Job Title"></mdb-input>
    </mdb-col>
  </mdb-row>
<mdb-row>
  <mdb-col> <mdb-date-picker  /></mdb-col>
  <mdb-col> <mdb-date-picker /></mdb-col>
</mdb-row>
  <mdb-row>
    <mdb-col>
      <mdb-input :rows="10"
                 type="textarea"
                 label="Description"
                ></mdb-input>
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
  mdbInput,
  mdbDatePicker,
}
  from 'mdbvue';

export default {
  name: 'Position',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbInput,
    mdbDatePicker,
  },
};
</script>

<style scoped>

</style>
