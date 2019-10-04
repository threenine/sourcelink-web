<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row class="mt-5 p-5">
      <div id="source-html">
        <h1 style="text-align: center">
          Artificial Intelligence
        </h1>
        <h2>Overview</h2>
        <p>
          Artificial Intelligence(AI) is an emerging technology
          demonstrating machine intelligence. The sub studies like <u><i>Neural
          Networks</i>, <i>Robatics</i> or <i>Machine Learning</i></u> are
          the parts of AI. This technology is expected to be a prime part
          of the real world in all levels.

        </p>
      </div>
      <div class="content-footer">
        <mdb-btn id="btn-export" @click="download">Export to
          word doc</mdb-btn>
      </div>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbBtn } from 'mdbvue';

export default {
  name: 'personal',
  components: {
    mdbContainer,
    mdbRow,
    mdbBtn,
  },
  methods: {
    download() {
      const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "
    + "xmlns:w='urn:schemas-microsoft-com:office:word' "
    + "xmlns='http://www.w3.org/TR/REC-html40'>"
    + "<head><meta charset='utf-8'><title>Curriculum Vitae of Gary Woodfine</title></head><body>";
      const footer = '</body></html>';
      const sourceHTML = header + document.getElementById('source-html').innerHTML + footer;

      const source = `data:application/vnd.ms-word;charset=utf-8,${encodeURIComponent(sourceHTML)}`;
      const fileDownload = document.createElement('a');
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'Gary.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },
  },
};
</script>

<style scoped>

</style>
