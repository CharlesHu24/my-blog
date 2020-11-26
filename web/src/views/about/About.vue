<template>
  <div class="about">
    <Breadcrumb>
      <h1 slot="blog-title" class="title">About Us</h1>
      <p slot="blog-desc">Why our Clients love to work with us.</p>
    </Breadcrumb>
    <!--/#page-breadcrumb-->

    <AboutCompanyInfo/>
    <!--/#company-information-->

    <AboutAction/>
    <!--/#services-->

    <AboutService/>
    <!--/#action-->

    <AboutTeam/>
    <!--/#team-->
  </div>
</template>

<script>
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import AboutCompanyInfo from "@/views/about/childComps/AboutCompanyInfo";
import AboutAction from "@/views/about/childComps/AboutAction";
import AboutService from "@/views/about/childComps/AboutService";
import AboutTeam from "@/views/about/childComps/AboutTeam";

export default {
  name: 'about',
  components: {
    Breadcrumb,
    AboutCompanyInfo,
    AboutAction,
    AboutService,
    AboutTeam
  }
}
</script>
