<template>
  <mdb-footer class="page-footer font-small pt-0" color="unique-color-dark">
    <div style="backgroundColor: #f78d14">
      <mdb-container class="text-left">
        <mdb-row class="py-4 d-flex align-items-center">
          <mdb-col class="text-center text-md-left mb-4 mb-md-0" lg="5" md="6">
            <h6 class="mb-0 white-text">Follow us to keep updated</h6>
          </mdb-col>
          <mdb-col class="text-center text-md-right" lg="7" md="6">
            <a class="fb-ic ml-0"><i class="fab fa-slack white-text mr-lg-4"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <mdb-container class="mt-5 mb-4 text-center text-md-left">
      <mdb-row class="mt-3">
        <mdb-col class="mb-4" lg="4" md="3" xl="3">
          <h6 class="text-uppercase font-weight-bold"><strong>Sourcelink</strong></h6>

          <p></p>
        </mdb-col>
        <mdb-col class="mb-4" lg="2" md="2" xl="2">
          <h6 class="text-uppercase font-weight-bold"><strong>Services</strong></h6>

          <p><a href="#!">Recruiter</a></p>
          <p><a href="#!">Candidate</a></p>

        </mdb-col>
        <mdb-col class="mb-4" lg="2" md="3" xl="2">
          <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>

          <p><a href="#!">Your Account</a></p>
          <p><a href="#!">Help</a></p>
        </mdb-col>
        <mdb-col class="mb-4" lg="3" md="4" xl="3">
          <h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>

          <p><i class="fas fa-map-marker mr-3"></i> Swindon, UK, SN4 7SD</p>
          <p><i class="fas fa-envelope mr-3"></i> hello@sourcelink.co.uk</p>
          <p><i class="fas fa-phone mr-3"></i> + (0) 843 289 4539</p>

        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2018 Copyright: <a href="https://sourcelink.co.uk"> Sourcelink </a>
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
import {
  mdbCol, mdbContainer, mdbFooter, mdbRow,
} from 'mdbvue';

export default {
  name: 'Footer',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
};
</script>
