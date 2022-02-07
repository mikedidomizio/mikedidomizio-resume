<template>
    <div class="row">
        <div class="span6">

            <h1 class="logo">
                {{name}}
                <br/>
                <small>{{position}}</small>
            </h1>

        </div><!-- end .span6 -->
        <div class="span3">

            <address class="address-info hide-on-phone">
                <!--// Street-->
                {{city}}
                <br/>{{postalCode}}
            </address>

        </div><!-- end .span3 -->
        <div class="span3">

            <ul class="contact-info hide-on-phone fixed">
                <li class="text"><span>E:</span> <a :href="formattedEmail()">{{email}}</a></li>
                <li class="text"><span>T:</span> <strong>{{phoneNumber}}</strong></li>
                <li v-if="website" class="text"><span>W:</span> <a :href="formattedWebsite()">{{website}}</a></li>
                <li class="img"><span><img src="@/assets/GitHub-Mark-32px.png" /></span> <a :href="'https://www.github.com/' + github" target="_blank">{{github}}</a></li>
            </ul>

        </div><!-- end .span3 -->
    </div><!-- end .row -->
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      formattedEmail() {
        return `mailto:${this.email}`;
      },
      formattedWebsite() {
        return `http://${this.website}`;
      }
    },
    props: ['city', 'email', 'github', 'name', 'phoneNumber', 'position', 'postalCode', 'website'],
    data() {
      // This solely exists to appear in the coverage report
      return {}
    }
  }
</script>

<style scoped>
  img  {
    height: 16px;
    width: 16px;
    margin-left: -2px;
  }

  .contact-info .img a {
    vertical-align: text-bottom;
  }

  .contact-info span {
    text-align: center;
    width: 16px;
  }
</style>
