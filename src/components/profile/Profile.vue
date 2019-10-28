<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row>
    <mdb-col class="col-7">
      <mdb-input type="text" label="Tag line" v-model="profile.tagline"></mdb-input>
    </mdb-col>
    <mdb-col class="col-5">
      <mdb-popover trigger="hover" :options="{ placement: 'right'}">
        <span slot="header" class="info-popover">Tag Line</span>
        <span slot="body"><p>Try to define your <em>Value Proposition</em>
                    succinctly as possible.</p>
                  <p>The key thing that you consistently
                  walk into an organisation and do!</p></span>
        <mdb-btn slot="reference" tag="a" gradient="aqua" floating size="sm">
          <mdb-icon icon="info-circle"/>
        </mdb-btn>
      </mdb-popover>
    </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col class="col-7">
        <mdb-input :rows="20"
                   type="textarea"
                   label="Summary"
                   v-model="profile.summary"></mdb-input>
      </mdb-col>
      <mdb-col class="col-5 bottom">
        <mdb-popover trigger="hover" :options="{ placement: 'right'}">
          <span slot="header">Summary</span>
          <span slot="body"><p>Your summary should include 3 key components: </p>
                    <ul><li><strong>What are you?</strong></li>
                      <li><strong>What is your <em>Value Proposition</em></strong></li>
                      <li><strong>What are your top four key strengths</strong></li></ul>
                  </span>
          <mdb-btn slot="reference" tag="a" gradient="aqua" floating size="sm">
            <mdb-icon icon="info-circle"/>
          </mdb-btn>
        </mdb-popover>
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
  mdbBtn,
  mdbPopover,
}
  from 'mdbvue';

export default {
  name: 'Profile',
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
    mdbInput,
    mdbBtn,
    mdbPopover,
  }
  ,
};
</script>

<style scoped>

</style>
