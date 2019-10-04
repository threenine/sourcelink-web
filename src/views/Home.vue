<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row class="mt-5 p-5">
      <mdb-col>
      <h1>Software Developer Community</h1>
        <h2>Developed by Software Developers</h2>
        <p>Searching for an need and outlet to develop a side project to have a play around with some
        of the latest tools, services, platforms and ideas, <a href="https://garywoodfine.com" target="_blank">Gary Woodfine</a>
        , was inspired to start develop this site and application to help build software developer community site.</p>
        <p>If nothing else this site will provide an outlet and scratch an itch to not only continually learn
        new things but also build a business at the same time. A business whose primary purpose is to put
        more hope, good and general well being in the world.
        </p>
        <p>This concept is still in the very early stages and is an ever changing work in progress</p>
      </mdb-col>
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
