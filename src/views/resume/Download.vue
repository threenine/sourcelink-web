<template>
  <mdb-container class="mt-5 p-5">
    <mdb-row class="mt-5 p-5">
      <div id="source-html" >
       <p><span style="font-size: 30px; font-weight: bold">Gary Woodfine</span> -
         <span style="font-size: 25px;">Full Stack Developer</span></p>
        <p><span style="font-size: 18px; margin-right: 10px;">
          threenine.co.uk
        </span>
          <span style="font-size: 18px; margin-right: 10px;">
            gary@threenine.co.uk </span>
          <span style="font-size: 18px; margin-right: 10px;">
            07 8245 64769
          </span>
        </p>
        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Profile</h1>
<p>Experienced Contract .net Developer, well versed in a number of Web & Mobile based
  and Database Technologies, with a strong understanding of software design principles and
  best practices. (18+ years experience) Predominantly focused on Microsoft .net framework
  since 2002, including broad exposure to several platforms, programming languages and frameworks.
</p>
 <p> Significant exposure to the full software development life cycle and Solution Architecture
  with strong analytical and problem solving capabilities.
  Highly motivated team player, enthusiastic about learning and implementing new skills and
  sharing with others. Ability to work and thrive as part of a cross-disciplinary team in highly
   Agile environments focused on either SCRUM or Kanban.</p>
  <p>Experienced at Engaging with customers and implementation teams to solve business and
  technical problems. Accustomed to to delivering both training and consultancy services.
  Strong business background and very entrepreneurial. Having been self employed for
    most of his career.</p>
  <p>Comprehensive industry experience in several business sectors including Ecommerce,
  Financial Services, Defence, Law & Order, Construction & Property. </p>
        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Key Skills
        </h1>
        <p>
          <span style="font-size: 15px; font-weight: bold;"> C# </span>
          <span style="font-size: 15px;font-weight: bold;"> PHP </span>
          <span style="font-size: 15px;font-weight: bold;"> Python </span>
          <span style="font-size: 15px;font-weight: bold;"> JavaScript </span>
          <span style="font-size: 15px;font-weight: bold;"> mySQL </span>
        </p>
        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Key Projects
        </h1>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>

        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Positions
        </h1>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Education & Qualifications
        </h1>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>

        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Education & Qualifications
        </h1>

        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>

        <h1 style="border-bottom: #0d0d0d solid 1px; font-size: 20px; font-weight: bold;">
          Personal Details
        </h1>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>
        <p> <span style="font-size: 15px; font-weight: bold;"> Company Name </span>
          <span style="font-size: 15px;"> Engaged </span>  </p>

</div>
      <div class="content-footer">
        <mdb-btn id="btn-export" @click="download">Export to
          word doc</mdb-btn>
      </div>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer, mdbRow, mdbBtn, mdbIcon,
} from 'mdbvue';

export default {
  name: 'Download',
  components: {
    mdbContainer,
    mdbRow,
    mdbBtn,
    mdbIcon,
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
