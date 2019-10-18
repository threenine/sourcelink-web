<template>
  <mdb-container class="mt-5 p-5">
<profile :profile="profile"></profile>
    <mdb-row>
      <mdb-col class="col-8 float-right">
        <mdb-btn @click="btnClick" size="sm">Next
          <mdb-icon icon="angle-double-right"/>
        </mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbIcon,
  mdbRow,
  mdbCol,
  mdbBtn,
}
  from 'mdbvue';
import Profile from '@/components/profile/Profile.vue';

export default {
  name: 'Location',
  components: {
    mdbContainer,
    Profile,
    mdbBtn,
    mdbIcon,
    mdbRow,
    mdbCol,

  },
  data() {
    return {
      profile: [],

    };
  },
  created() {
    this.profile = { tagLine: 'poo', summary: 'bolloks' };
  },
  methods: {
    btnClick() {
      console.log(this.profile);
    },
  },
};
</script>

<style scoped>

</style>
