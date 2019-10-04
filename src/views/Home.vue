<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row class="mt-5 p-5">
      <mdb-col>
      <h1>Software Developer Community</h1>
        <h2>Developed by Software Developers</h2>
        <p>Searching for an need and outlet to develop a side project to have a play around with
          some of the latest tools, services, platforms and ideas,
          <a href="https://garywoodfine.com" target="_blank">Gary Woodfine</a>, was inspired to
          start develop this site and application to help build software developer community site.
        </p>
        <p>If nothing else this site will provide an outlet and scratch an itch to not only
          continually learn new things but also build a business at the same time. A business
          whose primary purpose is to put more hope, good and general well being in the world.
        </p>
        <p>This concept is still in the very early stages and is an ever changing work in progress.
        It is entirely possible that this concept or latest brainwave may not actually get off
          the ground, and like so many Software Developer side projects and ideas it will cease to
          exist and dissapear, lost to the new shiny which will replace it.</p>
        <p><b>For the time being, at least it lives!</b></p>
        <p>One of the main inspirations for this site and the applications it will spawn, are the
          initial series
        of tutorials developed to help developers get acquainted with JavaScript, Vue, .net Core,
          Ionic, Firebase and other new and exciting technologies which take Gary's fancy</p>
        <p>The initial set of tutorials can be found here :</p>
        <ul>
          <li><a href="https://garywoodfine.com/how-to-start-a-new-project-using-vue-js" target="_blank">How to start a new project using Vue.js</a></li>
          <li><a href="Hhttps://garywoodfine.com/how-to-install-firebase-with-vue-js/" target="_blank">How to Install Firebase with Vue.JS</a></li>
          <li><a href="https://garywoodfine.com/using-vuex-and-vue-router-in-a-vue-project/" target="_blank">How to Use Vuex and Vue-Router in a Vue.JS Project</a></li>
          <li><a href="https://garywoodfine.com/how-to-implement-navigation-guards-vue/" target="_blank">How to implement Navigation Guards Vue</a></li>
          <li><a href="https://garywoodfine.com/how-to-use-firebase-cloud-functions/" target="_blank">How to Use Firebase Cloud Functions</a></li>
          <li><a href="https://garywoodfine.com/how-to-split-vuex-store-into-modules" target="_blank">How to split Vuex Store into modules</a></li>
        </ul>

        <p>The source code for this site and the associated tutorials are all in the <a href="https://github.com/threenine/sourcelink-web" target="blank">Github Repository</a> </p>
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
